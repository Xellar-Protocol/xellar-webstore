import { GoogleSpreadsheet } from 'google-spreadsheet';
import { NextApiRequest, NextApiResponse } from 'next';

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const body = req.body;
    const client_email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const private_key = process.env.GOOGLE_PRIVATE_KEY;

    try {
      if (
        !body.first_name ||
        !body.address_1 ||
        !body.city ||
        !body.state ||
        !body.postcode ||
        !body.country ||
        !body.email_address
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

      res
        .status(200)
        .json({ message: 'Successful add new order', customerInfo: body });
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    return res.status(404).send('Api routes not found');
  }
}
