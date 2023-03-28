export interface Product {
  id: number
  name: string
  description: string
  price: number
  type: number[]
  photo: string
}

export interface ProductProps {
  product: Product
  quantity?: number
  handleQuantity?: (newValue: number) => void
}
