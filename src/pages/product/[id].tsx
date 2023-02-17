import Header from '@/src/components/header'
import { FormaterValue } from '@/src/lib/formaterValue'
import { stripe } from '@/src/lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/src/styles/pages/product'
// import axios from 'axios'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'

interface Productprops {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
    currency: string
    priceNumber: number
  }
}

export default function Product({ product }: Productprops) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const { addItem } = useShoppingCart()

  function addItemCart() {
    setIsCreatingCheckoutSession(true)
    try {
      const productAdd = {
        name: product.name,
        description: product.description,
        sku: product.id,
        price: product.priceNumber,
        image: product.imageUrl,
        currency: product.currency,
        // price_id: product.defaultPriceId,
      }
      addItem(productAdd)
      setIsCreatingCheckoutSession(false)
    } catch (err) {
      setIsCreatingCheckoutSession(false)
    }
  }

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
          <button disabled={isCreatingCheckoutSession} onClick={addItemCart}>
            Comprar agora
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
        priceNumber: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
        currency: price.currency,
      },
    },
    revalidate: 60 * 60 * 1, // uma hora
  }
}
