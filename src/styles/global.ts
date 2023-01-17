import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        border: none;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.base.background};
        padding: 0 160px;
        -webkit-font-smoothing: antialiased;
    }
    
    body, input-security, textarea, button{
        font-family: ${({ theme }) => theme.fonts.text.fontFamily}, sans-serif;
        font-weight: ${({ theme }) => theme.fonts.text.fontWeights.regular};
        font-size: ${({ theme }) => theme.fonts.text.fontSizes.base};
    }
`
