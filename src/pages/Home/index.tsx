import * as S from './styles'
import { coffesMock } from '../../mock/coffes'
import { Product } from './Components/Product'
import { Banner } from './Components/Banner'

export const Home = () => {
  return (
    <S.Page>
      <Banner />

      <S.ProductsListContainer>
        <S.ProductsListTitle>Nossos Cafés</S.ProductsListTitle>

        <S.ProductsList>
          {coffesMock.map((coffe) => {
            return <Product key={coffe.photo} product={coffe} />
          })}
        </S.ProductsList>
      </S.ProductsListContainer>
    </S.Page>
  )
}
