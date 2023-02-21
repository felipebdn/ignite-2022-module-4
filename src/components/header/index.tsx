import { HeaderContainer } from '@/src/styles/components/header'
import { BagContainer } from '@/src/styles/pages/app'
import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import logoImg from '../../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog'
import ViewShoppingCart from '../shoppingCart'
import { useCart } from '@/src/hooks/useCart'

export default function Header() {
  const { cart } = useCart()

  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={logoImg} alt="" />
      </Link>

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <BagContainer isItem={true}>
            <Handbag size={24} weight="bold" />
            {cart.length > 0 ? <span>{cart.length}</span> : null}
          </BagContainer>
        </Dialog.Trigger>
        <ViewShoppingCart />
      </Dialog.Root>
    </HeaderContainer>
  )
}
