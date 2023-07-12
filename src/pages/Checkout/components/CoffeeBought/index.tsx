import { FC } from 'react'
import * as S from './styles'
import { Button } from '../../../../components/Button'
import { Trash } from 'phosphor-react'
import { SelectCounter } from '../../../../components/Select'

interface CoffeBoughtProps {
  quantity: number
  imageUrl: string
  name: string
  price: number
}

export const CoffeBought: FC<CoffeBoughtProps> = ({
  quantity,
  imageUrl,
  name,
  price,
}) => {
  return (
    <S.Container>
      <S.Image src={imageUrl} alt="" />

      <S.Box>
        <span>{name}</span>

        <S.BoxAux>
          <SelectCounter value={quantity} />

          <Button label="Remover" icon={<Trash />} variant="base" />
        </S.BoxAux>
      </S.Box>

      <strong>
        {new Intl.NumberFormat('pt-Br', {
          style: 'currency',
          currency: 'BRL',
        }).format(quantity * price)}
      </strong>
    </S.Container>
  )
}
