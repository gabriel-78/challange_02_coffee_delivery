import { ReactElement } from 'react'
import { CARD_SIZE, CARD_VARIANT } from './styles'

export type CardSize = keyof typeof CARD_SIZE
export type CardVariant = keyof typeof CARD_VARIANT

export interface CardProps {
  size: CardSize
  variant: CardVariant
  width: string
  children: ReactElement
}
