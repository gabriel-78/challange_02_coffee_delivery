import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaulTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <GlobalStyle />
      <div>
        <h1>hello world</h1>
      </div>
    </ThemeProvider>
  )
}
