import { FC, InputHTMLAttributes } from 'react'
import { Container, OptionalLabel, StyledInput } from './styles'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isMandatory?: boolean
}

export const Input: FC<InputProps> = (props) => {
  return (
    <Container width={props.width}>
      <StyledInput {...props} />

      {props.isMandatory && <OptionalLabel>Opcional</OptionalLabel>}
    </Container>
  )
}
