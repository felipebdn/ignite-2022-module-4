import { FormaterValue } from '@/src/lib/formaterValue'
import { Close, Content, Detail } from '@/src/styles/components/shoppingCart'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { Minus, Plus, X } from 'phosphor-react'
import { useState } from 'react'
import { useShoppingCart } from 'use-shopping-cart'

export default function ViewShoppingCart() {
  const [creatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const {
    cartCount,
    cartDetails,
    removeItem,
    totalPrice,
    incrementItem,
    decrementItem,
    redirectToCheckout,
  } = useShoppingCart()

  console.log(cartDetails)

  async function HandleBuyProducts() {
    try {
      setIsCreatingCheckoutSession(true)
      redirectToCheckout()
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
          {Object.values(cartDetails ?? {}).map((entry) => (
            <Detail key={entry.id}>
              <div>
                <div>
                  <Image src={entry.image!} width={100} height={100} alt="" />
                </div>
                <main>
                  <h4>{entry.name}</h4>
                  <pre>{FormaterValue(entry.value)}</pre>
                  <button onClick={() => removeItem(entry.id)}>Remover</button>
                </main>
              </div>
              <aside>
                <Minus
                  size={24}
                  weight="bold"
                  onClick={() => decrementItem(entry.id)}
                />
                <pre>{entry.quantity}</pre>
                <Plus
                  size={24}
                  weight="bold"
                  onClick={() => incrementItem(entry.id)}
                />
              </aside>
            </Detail>
          ))}
        </main>
        <footer>
          <div>
            <h4>Quantidade</h4>
            <span>
              {cartCount! > 1 ? `${cartCount} itens` : `${cartCount} item`}{' '}
            </span>
          </div>
          <div>
            <h4>Valor total</h4>
            <pre>{FormaterValue(totalPrice!)}</pre>
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
