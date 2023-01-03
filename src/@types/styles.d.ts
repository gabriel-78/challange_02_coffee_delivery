import 'styled-components'
import { lightTheme } from '../styles/themes/lightTheme'

type ThemeType = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
