import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { ReactElement } from 'react'
import IconCircle from '../../../../components/IconCircle'
import { COLOR_VARIANTS } from '../../../../components/IconCircle/styles'
import * as S from './styles'
import homeBanner from '../../../../assets/homeBanner.svg'

const BANNER_INFORMATIONS: {
  icon: ReactElement
  text: string
  color?: keyof typeof COLOR_VARIANTS
}[] = [
  {
    icon: <ShoppingCart weight="fill" size={18} />,
    text: 'Compra simples e segura',
    color: 'yellowDark',
  },
  {
    icon: <Package weight="fill" size={18} />,
    text: 'Embalagem mantém o café intacto',
  },
  {
    icon: <Timer weight="fill" size={18} />,
    text: 'Entrega rápida e rastreada',
    color: 'yellow',
  },
  {
    icon: <Coffee weight="fill" size={18} />,
    text: 'O café chega fresquinho até você',
    color: 'purple',
  },
]

export const Banner = () => {
  return (
    <S.Container>
      <S.Box>
        <S.BannerTitle>
          Encontre o café perfeito para qualquer hora do dia
        </S.BannerTitle>

        <S.BannerSubTitle>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </S.BannerSubTitle>

        <S.BannerInformationList>
          {BANNER_INFORMATIONS.map(({ icon, text, color }) => {
            return (
              <li key={text}>
                <IconCircle variant={color} icon={icon} />

                <span>{text}</span>
              </li>
            )
          })}
        </S.BannerInformationList>
      </S.Box>

      <S.BannerImageBox>
        <S.BannerImage src={homeBanner} alt="banner" />
      </S.BannerImageBox>
    </S.Container>
  )
}
