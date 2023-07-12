import * as S from './styles'
import { coffesMock } from '../../mock/coffes'
import { Product } from './Components/Product'
import { Banner } from './Components/Banner'
import { useEffect, useState } from 'react'

export interface ShoppingItem {
  id: string
  quantity: number
}

export const Home = () => {
  const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([])

  const handleProduct = (productId: string, newQuantity: number) => {
    setShoppingList((state) =>
      state.map((selectedProduct) => {
        return productId === selectedProduct.id
          ? { ...selectedProduct, quantity: newQuantity }
          : selectedProduct
      }),
    )
  }

  useEffect(() => {
    setShoppingList(
      coffesMock.map(({ id }) => {
        return { id, quantity: 0 } as ShoppingItem
      }),
    )
  }, [])

  return (
    <S.Page>
      <Banner />

      <S.ProductsListContainer>
        <S.ProductsListTitle>Nossos Cafés</S.ProductsListTitle>

        <S.ProductsList>
          {coffesMock.map((coffe) => {
            return (
              <Product
                list={shoppingList}
                key={coffe.id}
                handleProduct={handleProduct}
                product={coffe}
                quantity={
                  shoppingList.find((item) => item.id === coffe.id)?.quantity ||
                  0
                }
              />
            )
          })}
        </S.ProductsList>
      </S.ProductsListContainer>
    </S.Page>
  )
}
