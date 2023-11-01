import { createContext, useState } from 'react'
import {
  ShoppingItem,
  ShoppingListContextProps,
  ShoppingListContextProviderProps,
} from './types'

export const ShoppingListContext = createContext({} as ShoppingListContextProps)

export const ShoppingListContextProvider = ({
  children,
}: ShoppingListContextProviderProps) => {
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([])

  const loadShoppingList = (products: ShoppingItem[]) => {
    setShoppingList(products)
  }

  const addProducts = (products: ShoppingItem[]) => {
    setShoppingList((state) => [...state, ...products])
  }

  const cleanProductsList = () => {
    setShoppingList([])
  }

  const handleProductQuantity = (productId: string, newQuantity: number) => {
    setShoppingList((state) =>
      state.map((shoppingItem) => {
        return {
          ...shoppingItem,
          quantity:
            shoppingItem.id === productId ? newQuantity : shoppingItem.quantity,
        }
      }),
    )
  }

  return (
    <ShoppingListContext.Provider
      value={{
        shoppingList,
        addProducts,
        handleProductQuantity,
        loadShoppingList,
        cleanProductsList,
      }}
    >
      {children}
    </ShoppingListContext.Provider>
  )
}
