import { IProduct } from '@/src/context/CartContenxt'
import { urls } from '@/src/environments/keysApi'
import { stripe } from '@/src/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { products } = req.body as { products: IProduct[] }

  if (req.method !== 'POST') {
    return res.status(405)
  }
  if (!products) {
    return res.status(400).json({ error: 'Products not found' })
  }

  const successUrl = `${urls.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${urls.NEXT_URL}/`

  const params: Stripe.Checkout.SessionCreateParams = {
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: products.map((product) => ({
      price: product.defaultPriceId,
      quantity: 1,
    })),
  }
  const checkoutSession = await stripe.checkout.sessions.create(params)

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
