import { GoogleSpreadsheet } from 'google-spreadsheet';
import { NextApiRequest, NextApiResponse } from 'next';

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

async function addCustomer(
  body: any,
  client_email: string,
  private_key: string
) {
  try {
    if (
      !body.first_name ||
      !body.address_1 ||
      !body.city ||
      !body.state ||
      !body.postcode ||
      !body.country ||
      !body.email_address ||
      !body.order_id
    ) {
      throw new Error('Missing body key');
    }

    if (!client_email || !private_key) {
      throw new Error('Missing Google service account email or private key');
    }

    await doc.useServiceAccountAuth({
      client_email,
      private_key: private_key.replace(/\\n/gm, '\n'),
    });

    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow(body);
  } catch (error) {
    console.log(error);
  }
}

// access token is used to authenticate all REST API requests
async function generateAccessToken(
  base: string,
  client_id: string,
  app_secret: string
) {
  const auth = Buffer.from(client_id + ':' + app_secret).toString('base64');
  const response = await fetch(`${base}/v1/oauth2/token`, {
    method: 'POST',
    body: 'grant_type=client_credentials',
    headers: {
      Authorization: `Basic ${auth}`,
    },
  });
  const data = await handleResponse(response);
  return data.access_token;
}

async function handleResponse(response: any) {
  if (response.status === 200 || response.status === 201) {
    return response.json();
  }

  const errorMessage = await response.text();
  throw new Error(errorMessage);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const base = process.env.PAYPAL_BASE_URL;
  const client_id = process.env.PAYPAL_CLIENT_ID;
  const app_secret = process.env.PAYPAL_APP_SECRET;
  const client_email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const private_key = process.env.GOOGLE_PRIVATE_KEY;

  if (req.method === 'POST') {
    try {
      if (!base || !client_id || !app_secret || !client_email || !private_key) {
        throw new Error('Missing Paypal credential data');
      }

      const body = req.body;
      const { orderId } = req.query;

      const accessToken = await generateAccessToken(
        base,
        client_id,
        app_secret
      );
      const url = `${base}/v2/checkout/orders/${orderId}/capture`;
      const response = await fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const resp = await handleResponse(response);
      if (resp.status == 'COMPLETED')
        await addCustomer(
          { ...body, order_id: orderId },
          client_email,
          private_key
        );

      res.status(200).json(resp);
    } catch (error) {
      res.status(500).json(error);
    }
  } else if (req.method === 'GET') {
    return res.status(404).send('Api routes not found');
  }
}
