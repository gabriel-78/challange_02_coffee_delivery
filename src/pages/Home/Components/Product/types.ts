import { ShoppingItem } from '../..'

export interface ProductEntity {
  id: string
  name: string
  description: string
  price: number
  type: number[]
  photo: string
}

export interface ProductProps {
  list: ShoppingItem[]
  product: ProductEntity
  quantity: number
  handleProduct?: (productId: string, newQuantity: number) => void
}
