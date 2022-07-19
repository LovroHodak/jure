import React, { forwardRef } from "react";
import { tw } from "../tailwind";
import pubImg from "../pub-quiz-cover.png";

let events = [
  {
    image: "https://activecollab.com/upload/blog/301/cover.png",
    title: "PUB QUIZ v Gin & Juice",
    place: "Soteska 8, 1000 Ljubljana",
    when: "Sreda, 20.7.2022 ob 20h",
    players: "Zberi ekipo 3-4 igralcev in pokaži svoje znanje!",
    ekipe: "Število ekip je omejeno.",
    price: 20,
    link: "https://eventsframe.com/e/qIYKIswi4/pub-quiz-gin-juice/tickets",
  },
  {
    image: "https://activecollab.com/upload/blog/301/cover.png",
    title: "PUB QUIZ v Gin & Juice",
    place: "Soteska 8, 1000 Ljubljana",
    when: "Sreda, 20.7.2022 ob 20h",
    players: "Zberi ekipo 3-4 igralcev in pokaži svoje znanje!",
    ekipe: "Število ekip je omejeno.",
    price: 20,
    link: "https://eventsframe.com/e/qIYKIswi4/pub-quiz-gin-juice/tickets",
  },
  {
    image: "https://activecollab.com/upload/blog/301/cover.png",
    title: "PUB QUIZ v Gin & Juice",
    place: "Soteska 8, 1000 Ljubljana",
    when: "Sreda, 20.7.2022 ob 20h",
    players: "Zberi ekipo 3-4 igralcev in pokaži svoje znanje!",
    ekipe: "Število ekip je omejeno.",
    price: 20,
    link: "https://eventsframe.com/e/qIYKIswi4/pub-quiz-gin-juice/tickets",
  },
];

export default forwardRef(function Products(_, ref) {
  return (
    <ProductsWrapper ref={ref}>
      <TitleBig>Prihajajoci dogodki</TitleBig>
      <div className="flex flex-wrap justify-evenly">
        <div>
          <iframe
            className="h-[500px] border-2 rounded-md border-black mx-auto m-2"
            src="https://eventsframe.com/embed/oaWtFlGY8/tickets/"
            frameborder="0"
          ></iframe>
        </div>
        <div>
          <iframe
            scrolling="no"
            className="h-[500px] border-2 rounded-md border-black mx-auto m-2"
            src="https://eventsframe.com/embed/oaWtFlGY8/tickets/"
            frameborder="0"
          ></iframe>
        </div>
        <div>
          <iframe
            scrolling="no"
            className="h-[500px] border-2 rounded-md border-black mx-auto m-2"
            src="https://eventsframe.com/embed/oaWtFlGY8/tickets/"
            frameborder="0"
          ></iframe>
        </div>
        <div>
          <iframe
            scrolling="no"
            className="h-[500px] border-2 rounded-md border-black mx-auto m-2"
            src="https://eventsframe.com/embed/oaWtFlGY8/tickets/"
            frameborder="0"
          ></iframe>
        </div>
        <div>
          <iframe
            scrolling="no"
            className="h-[500px] border-2 rounded-md border-black mx-auto m-2"
            src="https://eventsframe.com/embed/oaWtFlGY8/tickets/"
            frameborder="0"
          ></iframe>
        </div>
      </div>

      {/* <iframe width="100%" height='1200px' src="https://eventsframe.com/embed/oaWtFlGY8/tickets/" frameborder="0"></iframe>
      <CardsCont>
        {events.map((party, i) => {
          return (
            <Card key={i}>
              <Image src={party.image}></Image>
              <Content>
                <Title>{party.title}</Title>
                <Info>
                  <SmallerTitle>{party.place}</SmallerTitle>
                  <Text className="border-b-2">{party.when}</Text>
                  <Text>{party.players}</Text>
                  <Text className="pt-0">{party.ekipe}</Text>
                </Info>
                <Basket>
                  <Price>
                  {party.price} € <span className="font-thin">(ekipa)</span>
                  </Price>
                  <Button>
                    <a
                      target="blank"
                      href={party.link}
                    >
                      V KOSARICO
                    </a>
                  </Button>
                  <iframe width="100%" height='1200px' src="https://eventsframe.com/embed/oaWtFlGY8/tickets/" frameborder="0"></iframe>
                </Basket>
              </Content>
            </Card>
          );
        })}
      </CardsCont> */}
    </ProductsWrapper>
  );
});

const ProductsWrapper = tw.section`
p-10 md:p-20 bg-white mt-10`;

const CardsCont = tw.div`
grid md:grid-cols-2 justify-center gap-4
`;
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
