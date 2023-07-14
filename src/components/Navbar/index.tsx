import { MapPin, ShoppingCart } from 'phosphor-react'
import { FC, useContext } from 'react'
import { Button } from '../Button'
import * as S from './styles'
import logoImg from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'
import { ShoppingListContext } from '../../context/ShoppingListContext'

const quantityLabel = (quantity: number) => {
  if (!quantity || quantity <= 0) return ''

  return `${quantity > 9 ? '+9' : quantity}`
}

const NavBar: FC = () => {
  const navigate = useNavigate()

  const { shoppingList } = useContext(ShoppingListContext)

  return (
    <S.StyledNav>
      <img src={logoImg} alt="" onClick={() => navigate('/')} />

      <S.ButtonsBox>
        <Button
          variant="base"
          label="Fortaleza, CE"
          icon={<MapPin weight="fill" size={18} filter="red" />}
        />

        <Button
          variant="light"
          quantityLabel={quantityLabel(
            shoppingList.reduce(
              (accumulator, currentValue) =>
                accumulator + currentValue.quantity,
              0,
            ),
          )}
          icon={<ShoppingCart weight="fill" size={18} />}
          onClick={() => navigate('checkout')}
        />
      </S.ButtonsBox>
    </S.StyledNav>
  )
}

export default NavBar
