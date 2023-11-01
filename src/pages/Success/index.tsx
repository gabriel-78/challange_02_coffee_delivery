import * as S from './styles'
import banner from '../../assets/successBanner.svg'
import IconCircle from '../../components/IconCircle'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation } from 'react-router-dom'
import {
  OPTIONS_PAYMENT_LABEL,
  PaymentOption,
} from '../Checkout/components/PaymentOptions'

export const Success = () => {
  const { state } = useLocation()

  return (
    <S.Container>
      <S.Header>
        <S.Title>Uhu! Pedido confirmado</S.Title>

        <S.TextDetail>
          Agora é só aguardar que logo o café chegará até você
        </S.TextDetail>
      </S.Header>

      <S.Main>
        <S.InformationList>
          <li>
            <IconCircle
              variant="purple"
              icon={<MapPin weight="fill" size={18} />}
            />

            <S.InformationTextBox>
              Entrega em{' '}
              <strong>
                {state ? state?.street : 'Não inserido'},
                {state ? state?.number : 'Não inserido'}{' '}
                {state ? state?.district : 'Não inserido'}
              </strong>
              - {state ? `${state?.city}, ${state?.uf}` : 'Não inserido'}
            </S.InformationTextBox>
          </li>
          <li>
            <IconCircle
              variant="yellow"
              icon={<Timer weight="fill" size={18} />}
            />

            <S.InformationTextBox>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </S.InformationTextBox>
          </li>
          <li>
            <IconCircle
              variant="yellowDark"
              icon={<CurrencyDollar weight="fill" size={18} />}
            />

            <S.InformationTextBox>
              <span>Pagamento na entrega</span>
              <strong>
                {state
                  ? OPTIONS_PAYMENT_LABEL[state?.paymentType as PaymentOption]
                  : 'Não inserido'}
              </strong>
            </S.InformationTextBox>
          </li>
        </S.InformationList>

        <S.Image src={banner} />
      </S.Main>
    </S.Container>
  )
}
