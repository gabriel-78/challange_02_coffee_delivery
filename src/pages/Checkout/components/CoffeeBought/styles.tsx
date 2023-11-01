import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.base.button};
  gap: 20px;
  padding-bottom: 24px;

  strong {
    color: ${({ theme: { colors } }) => colors.base.text};
    font-family: ${({ theme: { fonts } }) => fonts.text.fontFamily};
    font-size: ${({ theme: { fonts } }) => fonts.text.fontSizes.lg};
    font-weight: ${({ theme: { fonts } }) => fonts.text.fontWeights.bold};
    line-height: ${({ theme: { fonts } }) => fonts.text.lineHeight.min};
  }

  @media (max-width: 786px) {
    align-items: center;
    flex-direction: column;

    & > & :nth-child(1) {
      order: 1;
    }
    & :nth-child(2) {
      order: 3;
    }
    & :nth-child(3) {
      order: 2;
    }
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  & > span {
    font-size: ${({ theme }) => theme.fonts.text.fontSizes.base};
    line-height: ${({ theme }) => theme.fonts.text.lineHeight.min};
    color: ${({ theme }) => theme.colors.base.subTitle};
  }

  @media (max-width: 786px) {
    align-items: center;
  }
`

export const BoxAux = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  align-items: center;

  @media (max-width: 786px) {
    padding-top: 8px;
    justify-content: space-evenly;
  }
`

export const Image = styled.img`
  height: 64px;
  object-fit: cover;
  width: 64px;
`
