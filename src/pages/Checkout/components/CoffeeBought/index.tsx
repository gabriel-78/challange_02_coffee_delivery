import { FC } from 'react'
import * as S from './styles'
import traditionalExpressImg from '../../../../assets/traditionalExpress.svg'
import { Button } from '../../../../components/Button'
import { Trash } from 'phosphor-react'
import { SelectCounter } from '../../../../components/Select'

interface CoffeBoughtProps {
  quantity: number
}

export const CoffeBought: FC<CoffeBoughtProps> = ({ quantity }) => {
  return (
    <S.Container>
      <S.Image src={traditionalExpressImg} alt="" />

      <S.Box>
        <span>Expresso Tradicional</span>

        <S.BoxAux>
          <SelectCounter value={quantity} />

          <Button label="Remover" icon={<Trash />} variant="base" />
        </S.BoxAux>
      </S.Box>

      <strong>
        {new Intl.NumberFormat('pt-Br', {
          style: 'currency',
          currency: 'BRL',
        }).format(quantity * 99.9)}
      </strong>
    </S.Container>
  )
}
