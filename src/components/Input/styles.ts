import styled from 'styled-components'

export const OptionalLabel = styled.span`
  color: ${({ theme: { colors } }) => colors.base.label};
  font-style: italic;
  font-weight: ${({ theme: { fonts } }) => fonts.text.fontWeights.regular};
  font-size: ${({ theme: { fonts } }) => fonts.text.fontSizes.xs};
  line-height: ${({ theme: { fonts } }) => fonts.text.lineHeight.min};
`

export const StyledInput = styled.input`
  display: flex;
  height: 100%;
  width: 100%;
  background: transparent;
  outline: none;
  font-weight: ${({ theme: { fonts } }) => fonts.text.fontWeights.regular};
  font-size: ${({ theme: { fonts } }) => fonts.text.fontSizes.sm};
  line-height: ${({ theme: { fonts } }) => fonts.text.lineHeight.min};
  color: ${({ theme: { colors } }) => colors.base.text};

  &::placeholder {
    color: ${({ theme: { colors } }) => colors.base.label};
  }
`

export const Container = styled.div<{
  width: string | number | undefined
}>`
  align-items: center;
  display: flex;
  gap: 4px;
  padding: 12px;

  min-width: 75px;
  width: ${({ width }) => width};
  height: 42px;

  background: ${({ theme: { colors } }) => colors.base.input};
  border: 1px solid ${({ theme: { colors } }) => colors.base.button};
  border-radius: 4px;

  &:has(${StyledInput}:focus) {
    border: 1px solid ${({ theme: { colors } }) => colors.product.yellow.dark};
  }

  transition: all 0.3s ease-in-out;
`
