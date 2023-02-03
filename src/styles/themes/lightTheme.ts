const baseLight = {
  background: '#FAFAFA',
  button: '#E6E5E5',
  card: '#F3F2F2',
  hover: '#D7D5D5',
  input: '#EDEDED',
  label: '#8D8686',
  subTitle: '#403937',
  text: '#574F4D',
  title: '#272221',
  white: '#FFFFFF',
} as const

const purple = {
  dark: '#4B2995',
  default: '#8047f8',
  light: '#EBE5F9',
} as const

const yellow = {
  dark: '#C47F17',
  default: '#DBAC2C',
  light: '#F1E9C9',
} as const

const product = {
  purple,
  yellow,
} as const

const colors = {
  product,
  base: baseLight,
} as const

const header = {
  fontFamily: 'Baloo 2',
  fontWeights: {
    bold: '700',
    extraBold: '800',
  },
  fontSizes: {
    lg: '1.125rem',
    xl: '1.25rem',
    '3xl': '2rem',
    '5xl': '3rem',
  },
  lineHeight: '130%',
} as const

const text = {
  fontFamily: 'Roboto',
  fontWeights: {
    bold: '700',
    regular: '400',
  },
  fontSizes: {
    '2xs': '0.625rem',
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
  },
  lineHeight: { min: '130%', max: '160%' },
} as const

export const lightTheme = {
  colors,
  fonts: {
    header,
    text,
  },
} as const
