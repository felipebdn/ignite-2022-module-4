import type { AppProps } from 'next/app'
import { CartContextProvider } from '../context/CartContenxt'
import { globalStyles } from '../styles/global'

import { Container } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </Container>
  )
}
