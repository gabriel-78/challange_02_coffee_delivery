import styled from "styled-components";

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
`;

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
`;

export const BoxAux = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
  align-items: center;
`;

export const Image = styled.img`
  height: 64px;
  object-fit: cover;
  width: 64px;
`;
