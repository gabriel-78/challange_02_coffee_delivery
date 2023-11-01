import { FC } from 'react'
import * as S from './styles'

interface BuyInfoProps {
  rateDelivery: number
  totalProductPrice: number
}

export const BuyInfo: FC<BuyInfoProps> = ({
  rateDelivery,
  totalProductPrice,
}) => {
  return (
    <S.Container>
      <S.TextBox>
        <small>Total de itens</small>
        <span>
          {new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL',
          }).format(totalProductPrice)}
        </span>
      </S.TextBox>

      <S.TextBox>
        <small>Entrega</small>
        <span>
          {new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL',
          }).format(rateDelivery)}
        </span>
      </S.TextBox>

      <S.TextBox>
        <strong>Total</strong>
        <strong>
          {new Intl.NumberFormat('pt-Br', {
            style: 'currency',
            currency: 'BRL',
          }).format(rateDelivery + totalProductPrice)}
        </strong>
      </S.TextBox>
    </S.Container>
  )
}
