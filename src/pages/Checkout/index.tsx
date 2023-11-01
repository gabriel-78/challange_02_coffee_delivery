import { CurrencyDollar, MapPinLine } from 'phosphor-react'
import { useTheme } from 'styled-components'
import * as S from './styles'
import { Card } from '../../components/Card'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { BuyInfo } from './components/BuyInfo'
import { CoffeBought } from './components/CoffeeBought'
import { useContext, useEffect, useState } from 'react'
import { ShoppingListContext } from '../../context/ShoppingListContext'
import { coffesMock } from '../../mock/coffes'
import { ProductEntity } from '../Home/Components/Product/types'
import { useNavigate } from 'react-router-dom'
import { PaymentOptions } from './components/PaymentOptions'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

const newPurchaseFormSchema = z.object({
  cep: z.string(),
  street: z.string(),
  number: z.string(),
  district: z.string(),
  city: z.string(),
  uf: z.string(),
  paymentType: z.enum(['creditCard', 'debitCard', 'money']),
  complement: z.string().optional(),
})

export type NewPurchaseFormInputs = z.infer<typeof newPurchaseFormSchema>

export const Checkout = () => {
  const { colors } = useTheme()

  const { control, handleSubmit } = useForm<NewPurchaseFormInputs>({
    resolver: zodResolver(newPurchaseFormSchema),
  })

  const navigate = useNavigate()

  const [selectedProducts, setSelectedProducts] = useState<ProductEntity[]>([])

  const { shoppingList, handleProductQuantity, cleanProductsList } =
    useContext(ShoppingListContext)

  const onRemoveShoppingItem = (productId: string) => {
    setSelectedProducts((state) => state.filter(({ id }) => id !== productId))
    handleProductQuantity(productId, 0)
  }

  const onSubmitNewPurchase = (formData: NewPurchaseFormInputs) => {
    cleanProductsList()
    navigate('/success', { state: { ...formData } as NewPurchaseFormInputs })
  }

  useEffect(() => {
    const selectedItemsIds = shoppingList
      .filter(({ quantity }) => quantity > 0)
      .map(({ id }) => {
        return id
      })

    setSelectedProducts(
      coffesMock.filter(({ id }) => selectedItemsIds.includes(id)),
    )
  }, [])

  return (
    <S.Container
      onSubmit={handleSubmit(onSubmitNewPurchase, (w) => console.log(w))}
    >
      <S.Box>
        <S.BoxTitle>Complete seu pedido</S.BoxTitle>

        <Card size="medium" variant="default" width="100%">
          <>
            <S.TextContainer>
              <MapPinLine weight="regular" size={22} />

              <S.TextBox>
                <h3>Endereço de Entrega</h3>

                <span>Informe o endereço onde deseja receber seu pedido</span>
              </S.TextBox>
            </S.TextContainer>

            <S.AddresFormContainer>
              <Controller
                control={control}
                name="cep"
                render={({ field }) => {
                  return (
                    <Input
                      type="text"
                      placeholder="CEP"
                      width="30%"
                      {...field}
                    />
                  )
                }}
              />

              <Controller
                control={control}
                name="street"
                render={({ field }) => {
                  return <Input {...field} placeholder="Rua" />
                }}
              />

              <S.AddresFormBox>
                <Controller
                  control={control}
                  name="number"
                  render={({ field }) => {
                    return <Input {...field} placeholder="Número" />
                  }}
                />

                <Controller
                  control={control}
                  name="complement"
                  render={({ field }) => {
                    return (
                      <Input
                        {...field}
                        placeholder="Complemento"
                        width="100%"
                        isMandatory
                      />
                    )
                  }}
                />
              </S.AddresFormBox>

              <S.AddresFormBox>
                <Controller
                  control={control}
                  name="district"
                  render={({ field }) => {
                    return <Input {...field} placeholder="Bairro" width="20%" />
                  }}
                />

                <Controller
                  control={control}
                  name="city"
                  render={({ field }) => {
                    return (
                      <Input {...field} placeholder="Cidade" width="100%" />
                    )
                  }}
                />

                <Controller
                  control={control}
                  name="uf"
                  render={({ field }) => {
                    return <Input {...field} placeholder="UF" width="15%" />
                  }}
                />
              </S.AddresFormBox>
            </S.AddresFormContainer>
          </>
        </Card>

        <Card size="medium" variant="default" width="100%">
          <>
            <S.TextContainer>
              <CurrencyDollar
                weight="regular"
                size={22}
                color={colors.product.purple.default}
              />

              <S.TextBox>
                <h3>Pagamento</h3>

                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </S.TextBox>
            </S.TextContainer>

            <Controller
              control={control}
              name="paymentType"
              render={({ field: { value, onChange } }) => (
                <PaymentOptions value={value} onChange={onChange} />
              )}
            />
          </>
        </Card>
      </S.Box>

      <S.Box>
        <S.BoxTitle>Cafés selecionados</S.BoxTitle>

        <Card size="medium" variant="curve" width="100%">
          <>
            {selectedProducts.length > 0 ? (
              <S.ProductList>
                {selectedProducts.map((coffe) => {
                  const shoppingItem = shoppingList.find(
                    (shopping) => coffe.id === shopping.id,
                  )

                  return (
                    <CoffeBought
                      key={coffe.id}
                      quantity={shoppingItem?.quantity || 0}
                      imageUrl={coffe.photo}
                      name={coffe.name}
                      price={coffe.price}
                      handleQuantity={(event) =>
                        handleProductQuantity(coffe.id, event)
                      }
                      onRemove={() => onRemoveShoppingItem(coffe.id)}
                    />
                  )
                })}
              </S.ProductList>
            ) : (
              <span onClick={() => navigate(-1)}>
                Deseja escolher algum outro produto?
              </span>
            )}

            <BuyInfo
              rateDelivery={3.5}
              totalProductPrice={selectedProducts.reduce(
                (accumulator, product) => {
                  const shoppingItem = shoppingList.find(
                    (shopping) => product.id === shopping.id,
                  )

                  return (
                    accumulator + (shoppingItem?.quantity || 0) * product.price
                  )
                },
                0,
              )}
            />

            <Button
              label="CONFIRMAR PEDIDO"
              type="submit"
              disabled={
                shoppingList.reduce(
                  (accumulator, currentValue) =>
                    accumulator + currentValue.quantity,
                  0,
                ) === 0
              }
            />
          </>
        </Card>
      </S.Box>
    </S.Container>
  )
}
