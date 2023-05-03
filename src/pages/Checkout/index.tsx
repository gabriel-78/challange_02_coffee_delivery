import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import * as S from './styles'
import { Card } from '../../components/Card'

export const Checkout = () => {
  const { colors } = useTheme()

  return (
    <S.Container>
      <S.BoxTitle>Complete seu pedido</S.BoxTitle>

      <Card size="medium" variant="default" width="100%">
        <S.TextContainer>
          <MapPinLine weight="regular" size={22} />

          <S.TextBox>
            <h3>Endereço de Entrega</h3>

            <span>Informe o endereço onde deseja receber seu pedido</span>
          </S.TextBox>
        </S.TextContainer>
      </Card>

      <Card size="medium" variant="default" width="100%">
        <S.TextContainer>
          <CurrencyDollar
            weight="regular"
            size={22}
            color={colors.product.purple.default}
          />

          <S.TextBox>
            <h3>Pagamento</h3>

            <span>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </span>
          </S.TextBox>
        </S.TextContainer>
      </Card>
    </S.Container>
  )
}
