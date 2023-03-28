import styled from 'styled-components'

export const Page = styled.main`
  display: flex;
  flex-direction: column;
  gap: 40px;
  height: 100vh;
  width: 100%;
`

export const ProductsListContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 48px;
`

export const ProductsList = styled.ul`
  display: grid;
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

export const ProductsListTitle = styled.h2`
  font-family: 'Baloo 2';
  font-size: ${({ theme: { fonts } }) => fonts.header.fontSizes['3xl']};
  font-weight: ${({ theme: { fonts } }) => fonts.header.fontWeights.extraBold};
`
