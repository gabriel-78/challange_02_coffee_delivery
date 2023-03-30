import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;
  width: 100%;
`
export const Header = styled.div`
  display: inherit;
  flex-direction: column;
`

export const Main = styled.div`
  display: inherit;
  gap: 20px;
  justify-content: center;
  width: 100%;

  @media (max-width: 786px) {
    flex-wrap: wrap;
  }
`

export const Title = styled.h2`
  color: ${({ theme: { colors } }) => colors.product.yellow.dark};
  font-family: 'Baloo 2';
  font-weight: ${({ theme: { fonts } }) => fonts.header.fontWeights.extraBold};
  font-size: ${({ theme: { fonts } }) => fonts.header.fontSizes['3xl']};
`

export const TextDetail = styled.span`
  color: ${({ theme: { colors } }) => colors.base.subTitle};
  font-size: ${({ theme: { fonts } }) => fonts.text.fontSizes.xl};
  line-height: ${({ theme: { fonts } }) => fonts.text.lineHeight.min};
`

export const InformationList = styled.ul`
  align-items: center;
  justify-content: center;
  border: solid 2px transparent;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0)
    ),
    linear-gradient(
      101deg,
      ${({ theme: { colors } }) => colors.product.yellow.default},
      ${({ theme: { colors } }) => colors.product.purple.default}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px
    ${({ theme: { colors } }) => colors.base.background} inset;
  border-radius: 6px 36px;
  display: inherit;
  flex-direction: column;
  gap: 32px;
  list-style: none;
  padding: 40px;
  width: 50%;

  @media (max-width: 786px) {
    width: 100%;
  }

  li {
    display: inherit;
    gap: 16px;
    width: 100%;
    align-items: center;
  }
`

export const InformationTextBox = styled.div`
  color: ${({ theme: { colors } }) => colors.base.text};
  display: flex;
  font-size: ${({ theme: { fonts } }) => fonts.text.fontSizes.base};
  line-height: ${({ theme: { fonts } }) => fonts.text.lineHeight.min};
  flex-direction: column;
`

export const Image = styled.img`
  display: inherit;
  object-fit: cover;
  height: 100%;
  width: 50%;

  @media (max-width: 786px) {
    max-height: 293px;
    width: 100%;
  }
`
