import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 786px) {
    flex-wrap: wrap;
  }
`

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`

export const BannerImageBox = styled.figure`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`

export const BannerImage = styled.img`
  display: flex;
  height: 360px;
  object-fit: cover;
  width: 476px;

  @media (max-width: 786px) {
    height: 260px;
    width: 376px;
  }
`

export const BannerInformationList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-gap: 8px 32px;

  li {
    align-items: center;
    list-style: none;
    display: flex;
    flex: 1;
    justify-content: flex-start;
    gap: 12px;

    span {
      color: ${({ theme: { colors } }) => colors.base.text};
      line-height: ${({ theme }) => theme.fonts.text.lineHeight.min};
    }
  }
`

export const BannerTitle = styled.h1`
  color: ${({ theme: { colors } }) => colors.base.title};
  font-family: 'Baloo 2';
  font-weight: ${({ theme }) => theme.fonts.header.fontWeights.extraBold};
  font-size: ${({ theme }) => theme.fonts.header.fontSizes['5xl']};
  line-height: ${({ theme }) => theme.fonts.header.lineHeight};
`

export const BannerSubTitle = styled.p`
  color: ${({ theme: { colors } }) => colors.base.subTitle};
  font-size: ${({ theme }) => theme.fonts.text.fontSizes.xl};
  line-height: ${({ theme }) => theme.fonts.text.lineHeight.min};
`
