import { useContext } from 'react'
import { CartContext } from '../context/CartContenxt'

export function useCart() {
  return useContext(CartContext)
}
