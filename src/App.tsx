import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaulTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaulTheme}>
      <div><h1>hello world</h1></div>
    </ThemeProvider>
  )
}