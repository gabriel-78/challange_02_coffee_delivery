import { ButtonHTMLAttributes, ReactElement } from 'react'
import { COLOR_VARIANTS, HEIGHT_VARIANTS } from './styles'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  height?: keyof typeof HEIGHT_VARIANTS
  icon?: ReactElement
  isIconButton?: boolean
  label?: string
  variant?: keyof typeof COLOR_VARIANTS
  quantityLabel?: string
}
