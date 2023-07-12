import { ShoppingCart } from 'phosphor-react'
import { FC } from 'react'
import { Button } from '../../../../components/Button'
import { SelectCounter } from '../../../../components/Select'
import * as S from './styles'
import { ProductProps } from './types'

export const Product: FC<ProductProps> = ({
  list,
  product,
  quantity,
  handleProduct = (productId: string, newQuantity: number) => {},
}) => {
  const handleQuantity = (newQuantity: number) => {
    handleProduct(product.id, newQuantity)
  }

  return (
    <S.Container>
      <S.Header>
        <S.Image src={product.photo} alt="" />
      </S.Header>

      <S.Main>
        <S.Title>{product.name}</S.Title>

        <S.Description>{product.description}</S.Description>

        <S.Price>
          <strong>
            {new Intl.NumberFormat('pt-Br', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price)}
          </strong>
        </S.Price>
      </S.Main>

      <S.Footer>
        <SelectCounter value={quantity} onChange={handleQuantity} />

        <Button
          height="medium"
          variant="purple"
          icon={<ShoppingCart weight="fill" size={22} />}
        />
      </S.Footer>
    </S.Container>
  )
}
