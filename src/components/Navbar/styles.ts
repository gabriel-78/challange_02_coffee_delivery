import styled from 'styled-components'

export const StyledNav = styled.nav`
  background: ${({ theme }) => theme.colors.base.background};
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 32px 0px;
  width: 100%;
  z-index: 3;
`

export const ButtonsBox = styled.div`
  display: flex;
  gap: 12px;
`
