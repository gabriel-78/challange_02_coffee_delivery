import styled from 'styled-components'

export const Container = styled.li`
  background: ${({ theme: { colors } }) => colors.base.card};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 16px;
  padding: 0px 20px;
`

export const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

export const Main = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`

export const Footer = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 1;
  gap: 8px;
  justify-content: space-evenly;
  padding: 0px 12px 16px;
`

export const Image = styled.img`
  margin-top: -20px;
  height: 100px;
  object-fit: cover;
  width: 100px;
`

export const Title = styled.h3`
  color: ${({ theme: { colors } }) => colors.base.subTitle};
  font-family: 'Baloo 2';
  font-size: ${({ theme: { fonts } }) => fonts.header.fontSizes.lg};
  font-weight: ${({ theme: { fonts } }) => fonts.header.fontWeights.bold};
  line-height: ${({ theme }) => theme.fonts.header.lineHeight};
`

export const Description = styled.span`
  color: ${({ theme: { colors } }) => colors.base.label};
  font-size: ${({ theme: { fonts } }) => fonts.text.fontSizes.sm};
  font-weight: ${({ theme: { fonts } }) => fonts.text.fontWeights.regular};
  line-height: ${({ theme }) => theme.fonts.text.lineHeight.min};
  text-align: center;
`

export const Price = styled.span`
  display: flex;
  color: ${({ theme: { colors } }) => colors.base.text};
  font-size: ${({ theme: { fonts } }) => fonts.text.fontSizes.sm};
  line-height: ${({ theme }) => theme.fonts.text.lineHeight.min};

  strong {
    margin-left: 4px;
    font-family: 'Baloo 2';
    font-size: ${({ theme: { fonts } }) => fonts.text.fontSizes['2xl']};
    font-weight: ${({ theme: { fonts } }) =>
      fonts.header.fontWeights.extraBold};
  }
`
