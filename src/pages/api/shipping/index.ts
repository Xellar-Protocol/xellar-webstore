import axios from 'axios';
import * as cheerio from 'cheerio';
import { NextApiRequest, NextApiResponse } from 'next';
import queryString from 'query-string';

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

      const currencyRate = await axios.get(
        'https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/IDR/USD/1?format=json'
      );

      const body = req.body;

      const urlInternational = 'https://cek-ongkir.com/international/cost';
      const urlLocal = 'https://api.rajaongkir.com/starter/cost';

      const response = await axios.post(
        body.local ? urlLocal : urlInternational,
        body.local ? body.data : queryString.stringify(body.data),
        {
          headers: body.local
            ? { key }
            : { 'Content-Type': 'application/x-www-form-urlencoded' },
        }
      );

      let resp: any[] = [];

      if (body.local) {
        response.data.rajaongkir.results[0].costs.map((item: any) => {
          const res = {
            name:
              item.service === 'OKE'
                ? 'Economical'
                : item.service.includes('YES')
                ? 'Next Day'
                : 'Regular',
            est: item.cost[0].etd,
            cost: item.cost[0].value,
          };
          resp.push(res);
        });
      } else {
        const data: any[] = [];
        const final: any[] = [];

        const $ = cheerio.load(response.data);
        $('.cell').each((index, elem) => {
          data.push($(elem).text());
        });

        data.map((item, index) => {
          if (index % 3 === 0) {
            if (item.includes('JNE') || item.includes('EMS')) {
              const price = data[index + 1].includes('IDR')
                ? Math.ceil(
                    data[index + 1].split(' ')[1] *
                      currencyRate.data.InterbankRate
                  )
                : Number(data[index + 1].split(' ')[1]);
              const courier = {
                name: item,
                est: data[index + 2],
                cost: price,
              };
              final.push(courier);
            }
          }
        });

        final.sort((a, b) => {
          return a.cost - b.cost;
        });

        final.map((item, idx) => {
          item.name =
            idx === 0 ? 'Economical' : idx === 1 ? 'Regular' : 'Express';
        });

        resp = final;
      }

      res.status(200).json(resp);
    } catch (error) {
      res.status(500).json(error);
    }
  } else if (req.method === 'GET') {
    return res.status(404).send('Api routes not found');
  }
}
