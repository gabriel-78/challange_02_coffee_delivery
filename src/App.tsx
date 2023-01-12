import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button'
import { GlobalStyle } from './styles/global'
import { lightTheme } from './styles/themes/lightTheme'

export function App() {
  const [counter, setCounter] = useState(0)

  const handleCounter = (increment: boolean) => {
    setCounter((state) => (increment ? state + 1 : state - 1))
  }

  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <div>
        <h1>hello world</h1>
      </div>
      <Button
        variant="base"
        label="incrementar"
        onClick={() => handleCounter(true)}
      />
      <Button
        variant="light"
        label="decrementar"
        onClick={() => handleCounter(false)}
      />
      <Button
        variant="base"
        label="teste de contador"
        quantityLabel={counter > 0 ? String(counter) : undefined}
      />
      <Button
        variant="light"
        label="teste de contador 2"
        quantityLabel={counter > 0 ? String(counter) : undefined}
      />
      <Button
        variant="purple"
        label="teste de contador 3"
        quantityLabel={counter > 0 ? String(counter) : undefined}
      />
      <Button
        variant="yellow"
        label="teste de contador 4"
        quantityLabel={counter > 0 ? String(counter) : undefined}
      />
    </ThemeProvider>
  )
}
