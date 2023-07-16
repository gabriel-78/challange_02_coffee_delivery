import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  gap: 32px;
  height: 100vh;
  width: 100%;
  overflow-y: auto;

  @media (max-width: 786px) {
    flex-direction: column;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`

export const TextContainer = styled.div`
  color: ${({ theme: { colors } }) => colors.product.yellow.dark};
  display: flex;
  gap: 8px;
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  h3 {
    font-size: ${({ theme }) => theme.fonts.text.fontSizes.base};
    line-height: ${({ theme }) => theme.fonts.text.lineHeight.min};
    color: ${({ theme }) => theme.colors.base.subTitle};
  }

  span {
    color: ${({ theme }) => theme.colors.base.text};
    font-size: ${({ theme }) => theme.fonts.text.fontSizes.sm};
    line-height: ${({ theme }) => theme.fonts.text.lineHeight.min};
  }
`

export const BoxTitle = styled.h2`
  font-family: 'Baloo 2';
  font-size: ${({ theme: { fonts } }) => fonts.header.fontSizes.lg};
  font-weight: ${({ theme: { fonts } }) => fonts.header.fontWeights.extraBold};
`

export const AddresFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`
export const AddresFormBox = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media (min-width: 786px) {
    max-height: 300px;
    overflow-y: auto;
  }
`

export const PaymentOptionBox = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
  overflow: auto;
`

export const PaymentOption = styled.div`
  background: ${({ theme: { colors } }) => colors.base.button};
  align-items: center;
  display: flex;
  gap: 12px;
  min-width: 178px;
  padding: 16px;
  border-radius: 6px;

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
