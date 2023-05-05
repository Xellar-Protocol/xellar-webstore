import axios from 'axios';
import * as cheerio from 'cheerio';
import queryString from 'query-string';

export async function getShippingCost(body: any, key: string) {
  try {
    const currencyRate = await axios.get(
      'https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/IDR/USD/1?format=json'
    );

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
          cost:
            Math.ceil(
              item.cost[0].value * 100 * currencyRate.data.InterbankRate
            ) / 100,
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
                    100 *
                    currencyRate.data.InterbankRate
                ) / 100
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

    return resp;
  } catch (error) {
    console.log(error);
  }
}
