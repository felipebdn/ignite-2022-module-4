import { FormaterValue } from '@/src/lib/formaterValue'
import { Close, Content, Detail } from '@/src/styles/components/shoppingCart'
// import Image from 'next/image'
import { X } from 'phosphor-react'
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { useCart } from '@/src/hooks/useCart'
import Image from 'next/image'
import axios from 'axios'

export default function ViewShoppingCart() {
  const { cart, RemoveItemInCart, cartTotal } = useCart()

  const [creatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function HandleBuyProducts() {
    try {
      setIsCreatingCheckoutSession(true)
      const res = await axios.post('/api/checkout', {
        products: cart,
      })

      const { checkoutUrl } = res.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)
    }
  }

  return (
    <Dialog.Portal>
      <Content>
        <Close>
          <X size={24} weight="bold" />
        </Close>
        <main>
          <h2>Sacola de compras</h2>
          {cart.map((item) => {
            return (
              <Detail key={item.id}>
                <div>
                  <div>
                    <Image
                      src={item.imageUrl}
                      width={100}
                      height={100}
                      alt=""
                    />
                  </div>
                  <main>
                    <h4>{item.name}</h4>
                    <pre>{item.price}</pre>
                    <button onClick={() => RemoveItemInCart(item.id)}>
                      Remover
                    </button>
                  </main>
                </div>
              </Detail>
            )
          })}
        </main>
        <footer>
          <div>
            <h4>Quantidade</h4>
            <span>
              {cart.length > 1 ? `${cart.length} itens` : `${cart.length} item`}{' '}
            </span>
          </div>
          <div>
            <h4>Valor total</h4>
            <pre>{FormaterValue(cartTotal)}</pre>
          </div>
          <button
            disabled={creatingCheckoutSession}
            onClick={HandleBuyProducts}
          >
            Finalizar compra
          </button>
        </footer>
      </Content>
    </Dialog.Portal>
  )
}
