import { FC, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { StyledButton, CircleMark } from './styles'
import { ButtonProps } from './types'

export const Button: FC<ButtonProps> = ({ ...props }) => {
  const { icon, isIconButton, label, quantityLabel } = props

  const nodeRef = useRef(null)

  return (
    <StyledButton data-quantity={quantityLabel} {...props}>
      {icon && icon}
      {label && !isIconButton && label?.length > 0 ? (
        <span>{label}</span>
      ) : null}

      <CSSTransition
        classNames="growing"
        in={!!quantityLabel}
        nodeRef={nodeRef}
        timeout={300}
        unmountOnExit
      >
        <CircleMark ref={nodeRef}>{quantityLabel || ' '}</CircleMark>
      </CSSTransition>
    </StyledButton>
  )
}

Button.defaultProps = {
  height: 'medium',
  icon: undefined,
  isIconButton: false,
  label: '',
  quantityLabel: '',
  variant: 'yellow',
}
