import { Stripe } from 'stripe'

export const stripe = new Stripe(process.env.NEXT_SECRET_KEY ?? '', {
  apiVersion: '2022-11-15',
})