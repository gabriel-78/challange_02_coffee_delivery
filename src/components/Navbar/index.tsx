import { MapPin, ShoppingCart } from 'phosphor-react'
import { FC } from 'react'
import { Button } from '../Button'
import * as S from './styles'
import logoImg from '../../assets/logo.svg'

const NavBar: FC = () => {
  return (
    <S.StyledNav>
      <img src={logoImg} alt="" />

      <S.ButtonsBox>
        <Button
          variant="base"
          label="Fortaleza, CE"
          icon={<MapPin weight="fill" size={18} />}
        />
        <Button
          variant="light"
          icon={<ShoppingCart weight="fill" size={18} />}
        />
      </S.ButtonsBox>
    </S.StyledNav>
  )
}

export default NavBar
