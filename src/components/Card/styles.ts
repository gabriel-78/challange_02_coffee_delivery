import styled, { css } from 'styled-components'
import { CardSize, CardVariant } from './types'

export const CARD_SIZE = {
  small: css`
    padding: 20px;
  `,
  medium: css`
    padding: 40px;
  `,
} as const

export const CARD_VARIANT = {
  default: css`
    border-radius: 6px;
  `,
  curve: css`
    border-radius: 6px 36px;
  `,
} as const

export const Container = styled.div<{
  size: CardSize
  variant: CardVariant
  width: string
}>`
  background: ${({ theme: { colors } }) => colors.base.card};
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: ${({ width }) => width};

  ${({ size }) => CARD_SIZE[size]};
  ${({ variant }) => CARD_VARIANT[variant]}
`
