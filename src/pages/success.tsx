import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ImageContainer, SuccessContainer } from '../styles/pages/success'
import { useShoppingCart } from 'use-shopping-cart'
import logo from '../assets/logo.svg'

export default function Success() {
  const { cartDetails } = useShoppingCart()

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <Link href="/">
          <Image src={logo} alt="" />
        </Link>
        <ImageContainer>
          {Object.values(cartDetails ?? {}).map((entry) => (
            <div key={entry.id}>
              <Image src={entry.image!} width={120} height={110} alt="" />
            </div>
          ))}
        </ImageContainer>
        <h1>Compra efetuada</h1>
        <p>
          Uhuul <strong>{}</strong>, sua <strong>{}</strong> já está a caminho
          da sua casa.{' '}
        </p>
        <Link href="/">Voltar ao catalogo</Link>
      </SuccessContainer>
    </>
  )
}
