import React from 'react'
import { tw } from "../tailwind";

export default function Products() {
  return (
    <ProductsWrapper>
      <Card>
        <Image src='https://bratinovgin.com/wp-content/uploads/2020/04/Bratinov_Gin3-SM-1160x760.jpg'></Image>
        <Content>
          <Title>Bratinov Gin #3</Title>
          <Info>
            <SmallerTitle>London Dry</SmallerTitle>
            <Text className="border-b-2">Destilirani gin</Text>
            <Text>Stopnja alkohola: 44% vol, vsebina: 0.5L</Text>
          </Info>
          <Basket>
            <Price>25,00 €</Price>
            <Button>V KOSARICO</Button>
          </Basket>
        </Content>
      </Card>

      <Card>
        <Image src='https://bratinovgin.com/wp-content/uploads/2020/04/Bratinov_Gin3-SM-1160x760.jpg'></Image>
        <Content>
          <Title>Bratinov Gin #3</Title>
          <Info>
            <SmallerTitle>London Dry</SmallerTitle>
            <Text className="border-b-2">Destilirani gin</Text>
            <Text>Stopnja alkohola: 44% vol, vsebina: 0.5L</Text>
          </Info>
          <Basket>
            <Price>25,00 €</Price>
            <Button>V KOSARICO</Button>
          </Basket>
        </Content>
      </Card>
    </ProductsWrapper>
  )
}
// 1
const ProductsWrapper = tw.section`
p-20 flex`;
// 2
const Card = tw.div`
w-1/2 bg-yellow-100 m-2`
// 3
const Image = tw.img``
// 3
const Content = tw.div`
flex flex-col items-center`
// 4
const Title = tw.h2`
text-xl font-bold mt-2`
// 4
const Info = tw.div`
flex flex-col items-center`
// 5
const SmallerTitle = tw.h3`
`
// 5
const Text = tw.p`
p-4 font-thin`
// 4
const Basket = tw.div`
flex flex-col items-center`
// 5
const Price = tw.p`
border-b-2 border-t-2 text-center font-bold p-2`
// 5
const Button = tw.button`
m-2 px-16 py-2 bg-orange-500 hover:bg-orange-700`
