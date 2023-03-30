import * as S from './styles'
import banner from '../../assets/successBanner.svg'
import IconCircle from '../../components/IconCircle'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export const Success = () => {
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
              <strong>Rua João Daniel Martinelli, 102 Farrapos</strong>- Porto
              Alegre, RS
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
              <strong>Cartão de débito</strong>
            </S.InformationTextBox>
          </li>
        </S.InformationList>

        <S.Image src={banner} />
      </S.Main>
    </S.Container>
  )
}
