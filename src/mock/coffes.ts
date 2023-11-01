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
import { ProductEntity } from '../pages/Home/Components/Product/types'

const COFFE_TYPES = {
  tradicional: 1,
  special: 2,
  iced: 3,
  alcohol: 4,
  withMilk: 4,
} as const

export const coffesMock : ProductEntity[] = [
  {
    id: "74c09018-5ecd-4c00-8d4f-5ad98d5fc707",
    description: "O tradicional café feito com água quente e grãos moídos",
    name: "Expresso Tradicional",
    price: 9.90,
    type: [COFFE_TYPES.tradicional],
    photo: traditionalExpressImg
  },
  {
    id: "3e756c6b-71e5-4928-956c-dcdb07c4aee2",
    description: "Expresso diluído, menos intenso que o tradicional",
    name: "Expresso Americano",
    price: 9.90,
    type: [COFFE_TYPES.tradicional],
    photo: americanExpressImg
  },
  {
    id: "b562475f-fe18-43f7-a2f2-5dd108b4ded8",
    description: "Café expresso tradicional com espuma cremosa",
    name: "Expresso Cremoso",
    price: 119.90,
    type: [COFFE_TYPES.tradicional],
    photo: creamyExpressImg
  },
  {
    id: "c2fb584f-de21-4e32-a28a-7e7f46522bfd",
    description: "Bebida preparada com café expresso e cubos de gelo",
    name: "Expresso Gelado",
    price: 9.90,
    type: [COFFE_TYPES.tradicional,COFFE_TYPES.iced],
    photo: icedExpressImg
  },
  {
    id: "4d45acf0-aa07-4318-8521-72c9ac246d57",
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    name: "Café com Leite",
    price: 9.90,
    type: [COFFE_TYPES.tradicional,COFFE_TYPES.withMilk],
    photo: coffeWithMilkImg
  },
  {
    id: "2343d3e4-d6dc-46de-99fe-844e9f4c5061",
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    name: "Latte",
    price: 9.90,
    type: [COFFE_TYPES.tradicional,COFFE_TYPES.withMilk],
    photo: latteImg
  },
  {
    id: "1b90e876-e518-4f0f-8e1f-53298b01a32c",
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    name: "Capuccino",
    price: 9.90,
    type: [COFFE_TYPES.tradicional,COFFE_TYPES.withMilk],
    photo: capuccinoImg
  },
  {
    id: "bf7cfbde-481f-4826-956e-92161eced164",
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    name: "Macchiato",
    price: 9.90,
    type: [COFFE_TYPES.tradicional,COFFE_TYPES.withMilk],
    photo: machiatoImg
  },
  {
    id: "53e07ca3-0362-4166-a297-dc6f0f9ce3db",
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    name: "Mocaccino",
    price: 9.90,
    type: [COFFE_TYPES.tradicional,COFFE_TYPES.withMilk],
    photo: mocaccinoImg
  },
  {
    id: "60e07ca3-0362-4166-a297-dc6f0f9ce3db",
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    name: "Chocolate Quente",
    price: 9.90,
    type: [COFFE_TYPES.special,COFFE_TYPES.withMilk],
    photo: hotChocolateImg
  },
  {
    id: "6d9e28ff-7749-466b-ae26-4c32898958c0",
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    name: "Cubano",
    price: 9.90,
    type: [COFFE_TYPES.special, COFFE_TYPES.alcohol, COFFE_TYPES.withMilk],
    photo: cubanImg
  },
  {
    id: "0538be90-6906-49b7-ab32-c5a281b0b6fc",
    description: "Bebida adocicada preparada com café e leite de coco",
    name: "Havaiano",
    price: 9.90,
    type: [COFFE_TYPES.special],
    photo: hawaiianImg
  },
  {
    id: "5e35ecb7-d97a-442a-ba0d-17d141d3f45a",
    description: "Bebida preparada com grãos de café árabe e especiarias",
    name: "Árabe",
    price: 9.90,
    type: [COFFE_TYPES.special],
    photo: arabicImg
  },
  {
    id: "ca1d14a3-ee92-499b-b42c-394923aab7d9",
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    name: "Irlandês",
    price: 9.90,
    type: [COFFE_TYPES.special, COFFE_TYPES.alcohol],
    photo: irishImg
  },
]
