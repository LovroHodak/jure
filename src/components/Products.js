import React, { forwardRef } from "react";
import { tw } from "../tailwind";
import pubImg from "../pub-quiz-cover.png";

export default forwardRef(function Products(_, ref) {
  return (
    <ProductsWrapper ref={ref}>
      <TitleBig>Prihajajoci dogodki</TitleBig>
      <CardsCont>
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
                20,00 € <span className="font-thin">(ekipa)</span>
              </Price>
              <Button>V KOSARICO</Button>
              {/* <iframe width="200px" height="200px" src="https://eventsframe.com/embed/m2Razwnio/tickets/" frameBorder="0"></iframe> */}
            </Basket>
          </Content>
        </Card>

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
                20,00 € <span className="font-thin">(ekipa)</span>
              </Price>
              <Button>V KOSARICO</Button>
              {/* <iframe width="200px" height="200px" src="https://eventsframe.com/embed/m2Razwnio/tickets/" frameBorder="0"></iframe> */}
            </Basket>
          </Content>
        </Card>

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
                20,00 € <span className="font-thin">(ekipa)</span>
              </Price>
              <Button>V KOSARICO</Button>
              {/* <iframe width="200px" height="200px" src="https://eventsframe.com/embed/m2Razwnio/tickets/" frameBorder="0"></iframe> */}
            </Basket>
          </Content>
        </Card>

      </CardsCont>
    </ProductsWrapper>
  );
});

const ProductsWrapper = tw.section`
p-10 md:p-20 bg-white mt-10`;

const CardsCont = tw.div`
grid md:grid-cols-2 justify-center gap-4
`
const Card = tw.div`
max-w-lg bg-yellow-100 m-2`;

const Image = tw.img``;

const Content = tw.div`
flex flex-col items-center`;

const Title = tw.h2`
text-xl font-bold my-2`;

const Info = tw.div`
flex flex-col items-center`;

const SmallerTitle = tw.h3`
`;

const Text = tw.p`
p-4 font-thin`;

const Basket = tw.div`
flex flex-col items-center`;

const Price = tw.p`
border-b-2 border-t-2 text-center font-bold p-2`;

const Button = tw.button`
m-6 px-16 py-2 bg-orange-500 hover:bg-orange-700`;

const TitleBig = tw.h1`
text-4xl font-bold mb-16 text-center`;
