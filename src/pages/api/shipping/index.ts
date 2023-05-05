import { NextApiRequest, NextApiResponse } from 'next';

import { getShippingCost } from '@/hooks/getShippingCost';

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
      const resp = await getShippingCost(body, key);

      res.status(200).json(resp);
    } catch (error) {
      res.status(500).json(error);
    }
  } else if (req.method === 'GET') {
    return res.status(404).send('Api routes not found');
  }
}
