import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'

import { addresses } from './addresses.data';

const createOrder = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const body = JSON.parse(req.body)

    const btc_address = addresses[Math.floor(Math.random() * addresses.length)];

    const createOrderBody = {
      item_description: body.item_description,
      fiat_price: body.fiat_price,
      fiat_currency_code: 'USD',
      btc_address,
      buyer_email: body.buyer_email,
      return_url: body.return_url
    }

    const b = Buffer.from(`${process.env.PAYMENT_LINK_USERNAME}:${process.env.PAYMENT_LINK_API_KEY}`);
    const encoded = b.toString('base64')

    const response = await fetch(
      'https://cryptopayment.link/api/create-order',
      {
        method: 'POST',
        body: JSON.stringify(createOrderBody),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${encoded}`
        }
      }
    )

    const orderResult = await response.json()

    res.status(200).json(orderResult)
  } catch (error) {
    console.log(error)
    res.status(500).json(error)
  }
}

export default createOrder