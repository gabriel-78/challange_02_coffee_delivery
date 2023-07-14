export interface ProductEntity {
  id: string
  name: string
  description: string
  price: number
  type: number[]
  photo: string
}

export interface ProductCardProps {
  product: ProductEntity
  quantity: number
  handleProduct?: (productId: string, newQuantity: number) => void
  onBuy?: () => void
}
