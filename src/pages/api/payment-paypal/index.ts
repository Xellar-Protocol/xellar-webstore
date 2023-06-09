import { NextApiRequest, NextApiResponse } from 'next';

import { getShippingCost } from '@/hooks/getShippingCost';

import Cities from '@/constant/cityId.json';

// call this function to create your client token
async function generateClientToken(
  base: string,
  client_id: string,
  app_secret: string
) {
  const accessToken = await generateAccessToken(base, client_id, app_secret);
  const response = await fetch(`${base}/v1/identity/generate-token`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Accept-Language': 'en_US',
      'Content-Type': 'application/json',
    },
  });
  const data = await handleResponse(response);
  return data.client_token;
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
  const key = process.env.RAJAONGKIR_KEY;

  if (req.method === 'POST') {
    try {
      if (!base || !client_id || !app_secret || !key) {
        throw new Error('Missing Paypal credential data');
      }

      const body = req.body;
      let shippingBody;

      if (body?.country.toLowerCase() === 'indonesia') {
        const city = Cities.cities.find((item) => {
          return item.city_name.toLowerCase() === body?.city.toLowerCase();
        });
        shippingBody = {
          local: true,
          data: {
            origin: 153,
            destination: city?.city_id,
            courier: 'jne',
            weight: 500,
          },
        };
      } else {
        const country = Cities.country.find((item) => {
          return (
            item.country_name.toLowerCase() === body?.country.toLowerCase()
          );
        });
        shippingBody = {
          local: false,
          data: {
            origin: 153,
            destination: country?.country_id,
            courier: 'jne:pos',
            weight: 1,
          },
        };
      }

      const shipping = await getShippingCost(shippingBody, key);

      const price = [19.99, 36.99, 50.0];
      const purchaseAmount =
        body.amount > 3
          ? (
              ((body.amount - (body.amount % 3)) / 3) * Number(price[2]) +
              (body.amount % 3 > 0 ? Number(price[(body.amount % 3) - 1]) : 0) +
              (shipping ? shipping[body.courier].cost : 0)
            ).toFixed(2)
          : price[body.amount - 1] +
            (shipping ? shipping[body.courier].cost : 0); // TODO: pull prices from a database

      const accessToken = await generateAccessToken(
        base,
        client_id,
        app_secret
      );

      const url = `${base}/v2/checkout/orders`;
      const response = await fetch(url, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          intent: 'CAPTURE',
          purchase_units: [
            {
              amount: {
                currency_code: 'USD',
                value: purchaseAmount.toString(),
              },
            },
          ],
        }),
      });

      const resp = await handleResponse(response);
      res.status(200).json(resp);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  } else if (req.method === 'GET') {
    try {
      if (!base || !client_id || !app_secret) {
        throw new Error('Missing Paypal credential data');
      }

      const clientToken = await generateClientToken(
        base,
        client_id,
        app_secret
      );

      if (clientToken.error) {
        res.status(500).json(clientToken);
      }

      res
        .status(200)
        .json({ message: 'Successful request client token', clientToken });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
