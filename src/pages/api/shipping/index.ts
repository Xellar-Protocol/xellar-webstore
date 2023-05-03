import axios from 'axios';
import HTMLParser from 'html-to-json-parser';
import { NextApiRequest, NextApiResponse } from 'next';
import queryString from 'query-string';

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
  const key = process.env.RAJAONGKIR_KEY;

  if (req.method === 'POST') {
    try {
      if (!key) {
        throw new Error('Missing Shipping key');
      }

      const body = req.body;

      const urlInternational = 'https://cek-ongkir.com/international/cost';
      const urlLocal = 'https://api.rajaongkir.com/starter/cost';
      const query = queryString.stringify(body.data);

      const response = await axios.post(
        body.local ? urlLocal : urlInternational,
        body.local ? body.data : queryString.stringify(body.data),
        {
          headers: body.local
            ? { key }
            : { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
      );

      const data = response.data.replace(/<small>/g, '');
      const data2 = data.replace(/<i>/g, '');
      const indexStyle = data2.indexOf('<style ');
      const dataFinal = data2.slice(0, indexStyle);

      console.log('nih');

      const text =
        '<table class=" table table-bordered"><tr><td class="bold">Dari</td><td>Jakarta Selatan , DKI Jakarta</td></tr><tr><td class="bold">Ke</td><td>Singapore</td></tr><tr><td class="bold">Berat</td><td>1 kg</td></tr></table>';

      const result = await HTMLParser(dataFinal, true);

      console.log(dataFinal);
      console.log(text);
      console.log('result', result);

      // const browser = await puppeteer.launch()
      // const page = await browser.newPage()

      const parser = new DOMParser();
      const parsedHTML = parser.parseFromString(text, 'text/xml');
      console.log(parsedHTML.firstChild?.nodeName);
      const tr = parsedHTML.getElementsByTagName('tr');
      console.log(tr.length);

      res.status(200).json(dataFinal);
    } catch (error) {
      res.status(500).json(error);
    }
  } else if (req.method === 'GET') {
    return res.status(404).send('Api routes not found');
  }
}
