import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const PaymentOptionBox = styled(RadioGroup.Root)`
  display: flex;
  gap: 12px;
  width: 100%;
  overflow: auto;
`
export const PaymentOption = styled(RadioGroup.Item)`
  background: ${({ theme: { colors } }) => colors.base.button};
  align-items: center;
  display: flex;
  gap: 12px;
  min-width: 178px;
  padding: 16px;
  border-radius: 6px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;

  &[data-state='checked'] {
    border: 1px solid
      ${({ theme: { colors } }) => colors.product.purple.default};
    background: ${({ theme: { colors } }) => colors.product.purple.light};
  }

  &::before {
    content: '';
    top: 0;
    left: 0;
    position: absolute;
    background: transparent;
    height: 100%;
    width: 100%;
    transition: background 0.3s ease-in-out;
  }

  &::after {
    content: '';
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    position: absolute;
    border-radius: 9999px;
    height: 10px;
    width: 10px;
    scale: 0;
    transition: all 0.2s ease-in;
  }

  &:hover::before {
    background: rgba(0, 0, 0, 0.1);
  }

  &:active {
    &:hover::after {
      background: rgba(0, 0, 0, 0.2);
      scale: 50;
    }
  }

  & > svg {
    color: ${({ theme: { colors } }) => colors.product.purple.default};
    font-size: 16px;
  }

  span {
    color: ${({ theme: { colors } }) => colors.base.text};
    font-size: ${({ theme: { fonts } }) => fonts.text.fontSizes.sm};
    font-weight: ${({ theme: { fonts } }) => fonts.text.fontWeights.regular};
    line-height: ${({ theme: { fonts } }) => fonts.text.lineHeight.max};
    text-transform: uppercase;
  }
`
