import * as S from './styles'
import { coffesMock } from '../../mock/coffes'
import { ProductCard } from './Components/Product'
import { Banner } from './Components/Banner'
import { useContext, useEffect } from 'react'
import { ShoppingListContext } from '../../context/ShoppingListContext'
import { useNavigate } from 'react-router-dom'

export interface ShoppingItem {
  id: string
  quantity: number
}

export const Home = () => {
  const navigate = useNavigate()
  const { shoppingList, loadShoppingList, handleProductQuantity } =
    useContext(ShoppingListContext)

  useEffect(() => {
    loadShoppingList(
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
              <ProductCard
                key={coffe.id}
                handleProduct={handleProductQuantity}
                product={coffe}
                quantity={
                  shoppingList.find((item) => item.id === coffe.id)?.quantity ||
                  0
                }
                onBuy={() => navigate('checkout')}
              />
            )
          })}
        </S.ProductsList>
      </S.ProductsListContainer>
    </S.Page>
  )
}
