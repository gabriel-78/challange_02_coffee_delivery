import { FC } from 'react'
import * as S from './styles'
import { CardProps } from './types'

export const Card: FC<CardProps> = ({ children, variant, size, width }) => {
  return (
    <S.Container size={size} variant={variant} width={width}>
      {children}
    </S.Container>
  )
}
