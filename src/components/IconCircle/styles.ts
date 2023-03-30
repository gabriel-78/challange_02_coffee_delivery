import styled, { css } from 'styled-components'

export const COLOR_VARIANTS = {
  base: css`
    background: ${({ theme }) => theme.colors.base.text};
  `,
  light: css`
    background: ${({ theme }) => theme.colors.base.button};
  `,
  purple: css`
    background: ${({ theme }) => theme.colors.product.purple.default};
  `,
  yellow: css`
    background: ${({ theme }) => theme.colors.product.yellow.default};
  `,
  yellowDark: css`
    background: ${({ theme }) => theme.colors.product.yellow.dark};
  `,
} as const

export const Container = styled.div<{
  variant?: keyof typeof COLOR_VARIANTS
}>`
  align-items: center;
  background: red;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  min-width: 36px;
  min-height: 36px;
  max-width: 36px;
  max-height: 36px;

  svg {
    color: ${({ theme: { colors } }) => colors.base.background};
  }

  ${({ variant }) => (variant ? COLOR_VARIANTS[variant] : '')}
`
