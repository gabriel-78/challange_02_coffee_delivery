import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 100vh;
  width: 100%;
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px;
  gap: 32px;
  width: 640px;
  height: 372px;
  background: ${({ theme: { colors } }) => colors.base.card};
  border-radius: 6px;
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
