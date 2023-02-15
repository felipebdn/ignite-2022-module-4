import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImg from '../assets/logo.svg'
import Image from 'next/image'
import { BagContainer, Container, Header } from '../styles/pages/app'
import { Handbag } from 'phosphor-react'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logoImg} alt="" />
        <BagContainer isItem={true}>
          <Handbag size={24} weight="bold" />
          <span>1</span>
        </BagContainer>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
