import * as S from './styles'
import { Minus, Plus } from 'phosphor-react'
import { FC } from 'react'

interface SelectCounterProps {
  value?: number
  onChange?: (newValue: number) => void
}

export const SelectCounter: FC<SelectCounterProps> = ({ value, onChange }) => {
  const handleValue = (isIncrementing = true) => {
    if (onChange && value) {
      if (isIncrementing) onChange(value + 1)
      else onChange(value - 1)
    }
  }

  return (
    <S.Container>
      <S.ActionButton onClick={() => handleValue(false)}>
        <Minus size={16} />
      </S.ActionButton>

      {value}

      <S.ActionButton onClick={() => handleValue()}>
        <Plus size={16} />
      </S.ActionButton>
    </S.Container>
  )
}

SelectCounter.defaultProps = {
  value: 0,
  onChange: () => {},
}
