import { urls } from '@/src/environments/keysApi'
import { stripe } from '@/src/lib/stripe'
import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'

export default async function hadler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const cartItems = req.body

  if (req.method !== 'POST') {
    return res.status(405)
  }
  if (!cartItems) {
    return res.status(400).json({ error: 'Price not found' })
  }

  const successUrl = `${urls.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${urls.NEXT_URL}/`

  const params: Stripe.Checkout.SessionCreateParams = {
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: cartItems,
    submit_type: 'pay',
    payment_method_types: ['card'],
  }

  const checkoutSession = await stripe.checkout.sessions.create(params)

  return res.status(201).json(checkoutSession)
}
