import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import NavBar from './components/Navbar'
import { Router } from './router'
import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/lightTheme'

export function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
        <GlobalStyle />

        <NavBar />

        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}
