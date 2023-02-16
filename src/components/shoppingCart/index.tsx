import { Close, Content } from '@/src/styles/components/shoppingCart'
import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'
import { X } from 'phosphor-react'
import img1 from '../../assets/Shirt/1.png'
import { useShoppingCart } from 'use-shopping-cart'

export default function ViewShoppingCart() {
  const { cartCount } = useShoppingCart()

  console.log(cartCount)

  return (
    <Dialog.Portal>
      <Content>
        <Close>
          <X size={24} weight="bold" />
        </Close>
        <main>
          <h2>Sacola de compras</h2>
          <div>
            <aside>
              <Image width={100} height={100} src={img1} alt="" />
            </aside>
            <div>
              <h4>Camiseta Beyond the Limits</h4>
              <pre>R$ 79,90</pre>
              <button>Remover</button>
            </div>
          </div>
          <div>
            <aside>
              <Image width={100} height={100} src={img1} alt="" />
            </aside>
            <div>
              <h4>Camiseta Beyond the Limits</h4>
              <pre>R$ 79,90</pre>
              <button>Remover</button>
            </div>
          </div>
          <div>
            <aside>
              <Image width={100} height={100} src={img1} alt="" />
            </aside>
            <div>
              <h4>Camiseta Beyond the Limits</h4>
              <pre>R$ 79,90</pre>
              <button>Remover</button>
            </div>
          </div>
        </main>
        <footer>
          <div>
            <h4>Quantidade</h4>
            <span>3 itens</span>
          </div>
          <div>
            <h4>Valor total</h4>
            <pre>R$ 270,00</pre>
          </div>
          <button>Finalizar compra</button>
        </footer>
      </Content>
    </Dialog.Portal>
  )
}
