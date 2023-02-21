import { createContext, ReactNode, useState } from 'react'

export interface IProduct {
  id: string
  name: string
  imageUrl: string
  price: string
  numberPrice: number
  description: string
  defaultPriceId: string
}

interface CartContextType {
  cart: IProduct[]
  AddProductInCart: (product: IProduct) => void
  RemoveItemInCart: (id: string) => void
  checkIfItemAlreadyExists: (id: string) => boolean
  cartTotal: number
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState([] as IProduct[])

  const cartTotal = cart.reduce((total, product) => {
    return total + product.numberPrice
  }, 0)

  function AddProductInCart(product: IProduct) {
    setCart((state) => [...state, product])
  }
  function RemoveItemInCart(id: string) {
    setCart((state) => state.filter((item) => item.id !== id))
  }
  function checkIfItemAlreadyExists(id: string) {
    return cart.some((product) => product.id === id)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        AddProductInCart,
        checkIfItemAlreadyExists,
        RemoveItemInCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
