/* eslint-disable prettier/prettier */
import traditionalExpressImg from '../assets/traditionalExpress.svg'
import americanExpressImg from '../assets/americanExpress.svg'
import creamyExpressImg from '../assets/creamyExpress.svg'
import icedExpressImg from '../assets/icedExpress.svg'
import coffeWithMilkImg from '../assets/coffeWithMilk.svg'
import latteImg from '../assets/latte.svg'
import capuccinoImg from '../assets/capuccino.svg'
import machiatoImg from '../assets/machiato.svg'
import mocaccinoImg from '../assets/mocaccino.svg'
import hotChocolateImg from '../assets/hotChocolate.svg'
import cubanImg from '../assets/cuban.svg'
import hawaiianImg from '../assets/hawaiian.svg'
import arabicImg from '../assets/arabic.svg'
import irishImg from '../assets/irish.svg'
import { Product } from '../pages/Home/Components/Product/types'

const COFFE_TYPES = {
  tradicional: 1,
  special: 2,
  iced: 3,
  alcohol: 4,
  withMilk: 4,
} as const

export const coffesMock : Product[] = [
  {
    id: 1,
    description: "O tradicional café feito com água quente e grãos moídos",
    name: "Expresso Tradicional",
    price: 9.90,
    type: [COFFE_TYPES.tradicional],
    photo: traditionalExpressImg
  },
  {
    id: 2,
    description: "Expresso diluído, menos intenso que o tradicional",
    name: "Expresso Americano",
    price: 9.90,
    type: [COFFE_TYPES.tradicional],
    photo: americanExpressImg
  },
  {
    id: 3,
    description: "Café expresso tradicional com espuma cremosa",
    name: "Expresso Cremoso",
    price: 119.90,
    type: [COFFE_TYPES.tradicional],
    photo: creamyExpressImg
  },
  {
    id: 4,
    description: "Bebida preparada com café expresso e cubos de gelo",
    name: "Expresso Gelado",
    price: 9.90,
    type: [COFFE_TYPES.tradicional,COFFE_TYPES.iced],
    photo: icedExpressImg
  },
  {
    id: 5,
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    name: "Café com Leite",
    price: 9.90,
    type: [COFFE_TYPES.tradicional,COFFE_TYPES.withMilk],
    photo: coffeWithMilkImg
  },
  {
    id: 6,
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    name: "Latte",
    price: 9.90,
    type: [COFFE_TYPES.tradicional,COFFE_TYPES.withMilk],
    photo: latteImg
  },
  {
    id: 7,
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    name: "Capuccino",
    price: 9.90,
    type: [COFFE_TYPES.tradicional,COFFE_TYPES.withMilk],
    photo: capuccinoImg
  },
  {
    id: 8,
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    name: "Macchiato",
    price: 9.90,
    type: [COFFE_TYPES.tradicional,COFFE_TYPES.withMilk],
    photo: machiatoImg
  },
  {
    id: 9,
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    name: "Mocaccino",
    price: 9.90,
    type: [COFFE_TYPES.tradicional,COFFE_TYPES.withMilk],
    photo: mocaccinoImg
  },
  {
    id: 10,
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    name: "Chocolate Quente",
    price: 9.90,
    type: [COFFE_TYPES.special,COFFE_TYPES.withMilk],
    photo: hotChocolateImg
  },
  {
    id: 11,
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    name: "Cubano",
    price: 9.90,
    type: [COFFE_TYPES.special, COFFE_TYPES.alcohol, COFFE_TYPES.withMilk],
    photo: cubanImg
  },
  {
    id: 12,
    description: "Bebida adocicada preparada com café e leite de coco",
    name: "Havaiano",
    price: 9.90,
    type: [COFFE_TYPES.special],
    photo: hawaiianImg
  },
  {
    id: 13,
    description: "Bebida preparada com grãos de café árabe e especiarias",
    name: "Árabe",
    price: 9.90,
    type: [COFFE_TYPES.special],
    photo: arabicImg
  },
  {
    id: 14,
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    name: "Irlandês",
    price: 9.90,
    type: [COFFE_TYPES.special, COFFE_TYPES.alcohol],
    photo: irishImg
  },
]
