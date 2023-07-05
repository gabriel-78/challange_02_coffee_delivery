import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: ${({ theme: { colors } }) => colors.base.button};
  border-radius: 6px;
  color: ${({ theme: { colors } }) => colors.base.title};
  display: flex;
  font-size: ${({ theme: { fonts } }) => fonts.text.fontSizes.base};
  gap: 8px;
  line-height: ${({ theme: { fonts } }) => fonts.text.lineHeight.min};
  padding: 9px;
  text-align: center;
`

export const ActionButton = styled.button`
  align-items: center;
  background: transparent;
  color: ${({ theme: { colors } }) => colors.product.purple.default};
  cursor: pointer;
  display: flex;
  flex: 1;
  justify-content: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({ theme: { colors } }) => colors.product.purple.dark};
  }
`
