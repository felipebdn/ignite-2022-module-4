import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ImageContainer, SuccessContainer } from '../styles/pages/success'
import logo from '../assets/logo.svg'
import { GetServerSideProps } from 'next'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'

interface Successprops {
  customerName: string
  productsImages: string[]
}

export default function Success({
  customerName,
  productsImages,
}: Successprops) {
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
          {productsImages.map((url, i) => (
            <div key={i}>
              <Image src={url} width={120} height={110} alt="" />
            </div>
          ))}
        </ImageContainer>
        <h1>Compra efetuada</h1>
        <p>
          Uhuul <strong>{customerName}</strong>, suas{' '}
          <strong>{`${productsImages.length} camisas`}</strong> já está a
          caminho da sua casa.{' '}
        </p>
        <Link href="/">Voltar ao catalogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name
  const productsImages = session.line_items!.data.map((item) => {
    const product = item.price?.product as Stripe.Product
    return product.images[0]
  })

  return {
    props: {
      customerName,
      productsImages,
    },
  }
}
