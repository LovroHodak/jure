import React, { useMemo, forwardRef, useEffect, useRef, useState } from "react";
import { tw } from "../tailwind";
import eventsFile from "../content/events.json";

export default forwardRef(function Products(_, ref) {
  /* console.log(Date.parse(eventsFile.events[0].date));
  console.log(new Date().setHours(0, 0, 0, 0))
  console.log(Date.parse(new Date()))
  
  
  console.log(new Date())
  console.log(eventsFile.events.sort((a, b) => {
    return  Date.parse(a.date) - Date.parse(b.date);
  })); */

  let todaysDate = new Date().setHours(0, 0, 0, 0);

  const sortedArr = useMemo(() => {
    eventsFile.events.sort((a, b) => {
      return Date.parse(a.date) - Date.parse(b.date);
    });
  }, []);

  /*   console.log(sortedArr)
  console.log(sortedArr) */

  let sorted = eventsFile.events.sort((a, b) => {
    return Date.parse(a.date) - Date.parse(b.date);
  });

  /*  console.log(Date.parse(sorted[0].date)) */

  return (
    <ProductsWrapper ref={ref}>
      <TitleBig>Prihajajoci dogodki</TitleBig>
      <div className="flex flex-wrap justify-evenly" id="dogodki">
        {sorted.map((event, i) => {
          if (Date.parse(event.date) > todaysDate) {
            return (
              <div key={i}>
                <iframe
                  /* scrolling="no" */
                  className="h-[500px] border-2 rounded-md border-black mx-auto m-2"
                  src={event.iframeUrl}
                  frameBorder="0"
                ></iframe>
              </div>
            );
          }
        })}
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
