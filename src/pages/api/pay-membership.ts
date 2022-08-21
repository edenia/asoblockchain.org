import { NextApiRequest } from 'next'
import fetch from 'node-fetch'

const createOrder = async (req: NextApiRequest) => {
  const body = JSON.parse(req.body)

  const createOrderBody = {
    item_description: 'New member joining',
    fiat_price: 99.99,
    fiat_currency_code: 'USD',
    buyer_email: body.buyer_email
  }

  const b = Buffer.from(`${process.env.PAYMENT_LINK_USERNAME}:${process.env.PAYMENT_LINK_API_KEY}`);
  const encoded = b.toString('base64')

  const orderResult = await fetch(
    'https://checkout-service-staging-0.web.app/api/create-order',
    {
      method: 'POST',
      body: JSON.stringify(createOrderBody),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${encoded}`
      }
    }
  )

  console.log(orderResult)

  return orderResult
}

export default createOrder