import styled, { css } from 'styled-components'
import { ButtonProps } from './types'

export const CircleMark = styled.div`
  align-items: center;
  background: transparent;
  border-radius: 9999px;
  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2),
    0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12);
  color: ${({ theme: { colors } }) => colors.base.white};
  display: flex;
  font-size: ${({ theme: { fonts } }) => fonts.text.fontSizes.xs};
  font-weight: ${({ theme: { fonts } }) => fonts.text.fontWeights.bold};
  height: 20px;
  justify-content: center;
  position: absolute;
  right: -9px;
  top: -7.5px;
  width: 20px;

  &.growing-enter {
    opacity: 0.01;
    transform: scale(0);
  }

  &.growing-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 300ms ease-in;
  }

  &.growing-exit {
    opacity: 1;
    transform: scale(1);
  }

  &.growing-exit-active {
    opacity: 0.01;
    transform: scale(0);
    transition: all 300ms ease-in;
  }
`

export const COLOR_VARIANTS = {
  base: css`
    background: ${({ theme }) => theme.colors.base.button};

    span,
    svg {
      color: ${({ theme: { colors } }) => colors.product.purple.default};
    }

    ${CircleMark} {
      background: ${({ theme: { colors } }) => colors.product.purple.default};
      color: ${({ theme }) => theme.colors.base.button};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.base.hover};
    }
  `,
  light: css`
    background: ${({ theme }) => theme.colors.product.yellow.light};

    span,
    svg {
      color: ${({ theme: { colors } }) => colors.product.yellow.dark};
    }

    ${CircleMark} {
      background: ${({ theme: { colors } }) => colors.product.yellow.dark};
      color: ${({ theme: { colors } }) => colors.product.yellow.light};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.product.yellow.default};
    }
  `,
  purple: css`
    background: ${({ theme }) => theme.colors.product.purple.default};

    span,
    svg {
      color: ${({ theme: { colors } }) => colors.base.card};
    }

    ${CircleMark} {
      background: ${({ theme: { colors } }) => colors.base.card};
      color: ${({ theme: { colors } }) => colors.product.purple.default};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.product.purple.dark};
    }
  `,
  yellow: css`
    background: ${({ theme }) => theme.colors.product.yellow.default};

    span,
    svg {
      color: ${({ theme: { colors } }) => colors.base.white};
    }

    ${CircleMark} {
      background: ${({ theme: { colors } }) => colors.base.white};
      color: ${({ theme: { colors } }) => colors.product.yellow.default};
    }

    &:hover {
      background: ${({ theme }) => theme.colors.product.yellow.dark};
    }
  `,
}

export const HEIGHT_VARIANTS = {
  small: css`
    height: 32px;
    padding: 0px 8px;
  `,
  medium: css`
    height: 38px;
    padding: 8px;
  `,
  large: css`
    height: 46px;
    padding: 12px 8px;
  `,
}

export const AnimationContainer = styled.div`
  display: flex;
  .transition-enter {
    opacity: 0.01;
    transform: scale(0);
  }

  .transition-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: all 300ms ease-in;
  }

  .transition-exit {
    opacity: 1;
    transform: scale(1);
  }

  .transition-exit-active {
    opacity: 0.01;
    transform: scale(0);
    transition: all 300ms ease-in;
  }
`

export const StyledButton = styled.button<ButtonProps>`
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.3s ease-in-out;
  position: relative;

  &:disabled {
    cursor: not-allowed;
  }

  ${({ height }) => (height ? HEIGHT_VARIANTS[height] : '')}
  ${({ variant }) => (variant ? COLOR_VARIANTS[variant] : '')}
`
