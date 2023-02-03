import { FC, ReactElement } from 'react'
import { COLOR_VARIANTS, Container } from './styles'

interface IconCircleProps {
  icon?: ReactElement
  variant?: keyof typeof COLOR_VARIANTS
}

const IconCircle: FC<IconCircleProps> = ({ icon, variant }) => {
  return <Container variant={variant}>{icon}</Container>
}

IconCircle.defaultProps = {
  icon: undefined,
  variant: 'base',
}

export default IconCircle
