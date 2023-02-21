import Header from '@/src/components/header'
import { IProduct } from '@/src/context/CartContenxt'
import { useCart } from '@/src/hooks/useCart'
import { FormaterValue } from '@/src/lib/formaterValue'
import { stripe } from '@/src/lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Stripe from 'stripe'

interface Productprops {
  product: IProduct
}

export default function Product({ product }: Productprops) {
  const { checkIfItemAlreadyExists, AddProductInCart } = useCart()

  const isItemInCard = checkIfItemAlreadyExists(product.id)

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <Header />
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button
            disabled={isItemInCard}
            onClick={() => AddProductInCart(product)}
          >
            {isItemInCard ? 'produto ja no carrinho' : 'comprar agora'}
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: FormaterValue(price.unit_amount!),
        numberPrice: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // uma hora
  }
}
