import React, { forwardRef } from "react";
import { tw } from "../tailwind";
import pubImg from "../pub-quiz-cover.png";

export default forwardRef(function Products(_, ref) {
  return (
    <ProductsWrapper ref={ref}>
      <TitleBig>Prihajajoci dogodki</TitleBig>
      <div className="flex">
        <Card>
          <Image src={pubImg}></Image>
          <Content>
            <Title>PUB QUIZ v Gin & Juice</Title>
            <Info>
              <SmallerTitle>Soteska 8, 1000 Ljubljana</SmallerTitle>
              <Text className="border-b-2">Sreda, 20.7.2022 ob 20h</Text>
              <Text>Zberi ekipo 3-4 igralcev in pokaži svoje znanje!</Text>
              <Text className="pt-0"> Število ekip je omejeno.</Text>
            </Info>
            <Basket>
              <Price>
                20,00 € <span className="font-thin">(na ekipo)</span>
              </Price>
              <Button>V KOSARICO</Button>
              {/* <iframe width="200px" height="200px" src="https://eventsframe.com/embed/m2Razwnio/tickets/" frameBorder="0"></iframe> */}
            </Basket>
          </Content>
        </Card>

        {/* <Card>
        <Image src="https://bratinovgin.com/wp-content/uploads/2020/04/Bratinov_Gin3-SM-1160x760.jpg"></Image>
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
      </Card> */}
      </div>
    </ProductsWrapper>
  );
});
// 1
const ProductsWrapper = tw.section`
px-10 md:px-20 pb-20 bg-white`;
// 2
const Card = tw.div`
w-1/2 bg-yellow-100 m-2`;
// 3
const Image = tw.img``;
// 3
const Content = tw.div`
flex flex-col items-center`;
// 4
const Title = tw.h2`
text-xl font-bold my-2`;
// 4
const Info = tw.div`
flex flex-col items-center`;
// 5
const SmallerTitle = tw.h3`
`;
// 5
const Text = tw.p`
p-4 font-thin`;
// 4
const Basket = tw.div`
flex flex-col items-center`;
// 5
const Price = tw.p`
border-b-2 border-t-2 text-center font-bold p-2`;
// 5
const Button = tw.button`
m-6 px-16 py-2 bg-orange-500 hover:bg-orange-700`;

const TitleBig = tw.h1`
text-4xl font-bold mt-5 mb-5 text-center`;
