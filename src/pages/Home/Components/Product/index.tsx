import { ShoppingCart } from 'phosphor-react'
import { FC } from 'react'
import { Button } from '../../../../components/Button'
import * as S from './styles'
import { ProductProps } from './types'

export const Product: FC<ProductProps> = ({ product }) => {
  return (
    <S.Container>
      <S.Header>
        <S.Image src={product.photo} alt="" />
      </S.Header>

      <S.Main>
        <S.Title>{product.name}</S.Title>

        <S.Description>{product.description}</S.Description>
      </S.Main>

      <S.Footer>
        <S.Price>
          R$ <strong>{product.price}</strong>
        </S.Price>

        <Button
          height="medium"
          variant="purple"
          icon={<ShoppingCart weight="fill" size={22} />}
        />
      </S.Footer>
    </S.Container>
  )
}
