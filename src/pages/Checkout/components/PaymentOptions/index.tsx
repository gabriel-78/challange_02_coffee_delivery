import { Bank, CreditCard, Money } from 'phosphor-react'
import * as S from './styles'

export const OPTIONS_PAYMENT = {
  creditCard: 'creditCard',
  debitCard: 'debitCard',
  money: 'money',
} as const

const OPTIONS_PAYMENT_LABEL = {
  [OPTIONS_PAYMENT.creditCard]: 'Cartão de crédito',
  [OPTIONS_PAYMENT.debitCard]: 'Cartão de débito',
  [OPTIONS_PAYMENT.money]: 'Dinheiro',
} as const

const renderIcon = (type: keyof typeof OPTIONS_PAYMENT) => {
  switch (type) {
    case OPTIONS_PAYMENT.creditCard:
      return <CreditCard weight="regular" />

    case OPTIONS_PAYMENT.debitCard:
      return <Bank weight="regular" />

    default:
      return <Money weight="regular" />
  }
}

interface PaymentOptionsProps {
  value: keyof typeof OPTIONS_PAYMENT
  onChange: (value: string) => void
}

export const PaymentOptions = ({ value, onChange }: PaymentOptionsProps) => {
  return (
    <S.PaymentOptionBox value={value} onValueChange={onChange}>
      {Object.values(OPTIONS_PAYMENT).map((option) => (
        <S.PaymentOption key={option} value={OPTIONS_PAYMENT[option]}>
          {renderIcon(option)}

          <span>{OPTIONS_PAYMENT_LABEL[option]}</span>
        </S.PaymentOption>
      ))}
    </S.PaymentOptionBox>
  )
}
