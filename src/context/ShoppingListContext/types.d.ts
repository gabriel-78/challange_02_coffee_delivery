import { ReactNode } from 'react'

export interface ShoppingItem {
  id: string
  quantity: number
}

export interface ShoppingListContextProps {
  shoppingList: ShoppingItem[]
  addProducts: (products: ShoppingItem[]) => void
  handleProductQuantity: (productId: string, newQuantity: number) => void
  loadShoppingList: (products: ShoppingItem[]) => void
}

export interface ShoppingListContextProviderProps {
  children: ReactNode
}
