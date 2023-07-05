import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`

export const TextBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 12px;

  small,
  span {
    font-family: ${({ theme: { fonts } }) => fonts.text.fontFamily};
    font-weight: ${({ theme: { fonts } }) => fonts.text.fontWeights.regular};
    line-height: ${({ theme: { fonts } }) => fonts.text.lineHeight.min};

    color: ${({ theme: { colors } }) => colors.base.text};
  }

  small {
    font-size: ${({ theme: { fonts } }) => fonts.text.fontSizes.sm};
  }

  span {
    font-size: ${({ theme: { fonts } }) => fonts.text.fontSizes.base};
  }

  strong {
    color: ${({ theme: { colors } }) => colors.base.subTitle};
    font-family: ${({ theme: { fonts } }) => fonts.text.fontFamily};
    font-size: ${({ theme: { fonts } }) => fonts.text.fontSizes.xl};
    font-weight: ${({ theme: { fonts } }) => fonts.text.fontWeights.bold};
    line-height: ${({ theme: { fonts } }) => fonts.text.lineHeight.min};
  }
`
