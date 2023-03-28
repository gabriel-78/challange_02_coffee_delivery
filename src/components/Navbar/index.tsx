import { MapPin, ShoppingCart } from 'phosphor-react'
import { FC } from 'react'
import { Button } from '../Button'
import * as S from './styles'
import logoImg from '../../assets/logo.svg'
import { useNavigate } from 'react-router-dom'

const NavBar: FC = () => {
  const navigate = useNavigate()

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
          icon={<ShoppingCart weight="fill" size={18} />}
          onClick={() => navigate('checkout')}
        />
      </S.ButtonsBox>
    </S.StyledNav>
  )
}

export default NavBar
