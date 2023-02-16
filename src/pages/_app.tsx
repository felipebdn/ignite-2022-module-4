import type { AppProps } from 'next/app'
import { CartProvider } from 'use-shopping-cart'
import { env } from '../environments/keysApi'
import { globalStyles } from '../styles/global'

import { Container } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider
        cancelUrl="/"
        cartMode="client-only"
        mode="payment"
        currency="BRL"
        stripe={env.STRIPE_PUBLIC_KEY}
        shouldPersist={true}
        billingAddressCollection={true} // remover se não ser certo
        successUrl="/success"
      >
        <Component {...pageProps} />
      </CartProvider>
    </Container>
  )
}
