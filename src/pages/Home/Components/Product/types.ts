export interface Product {
  name: string
  description: string
  price: number
  type: number[]
  photo: string
}

export interface ProductProps {
  product: Product
}
