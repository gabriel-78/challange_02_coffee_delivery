import { ThemeProvider } from 'styled-components'
import NavBar from './components/Navbar'
import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/lightTheme'

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />

      <NavBar />
    </ThemeProvider>
  )
}
