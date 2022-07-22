import React, { forwardRef } from "react";
import { tw } from "../tailwind";

export default forwardRef(function Intro(_, ref) {
  //console.log(ref.current);
  return (
    <IntroWrapper id='intro'>
      <Title ref={ref}>Smo minimalisti</Title>
      <About>Radi imamo kratke besede. Na primer čin. In gin.</About>
      <About>
        Za svoje delo ne potrebujemo veliko prostora. Naša destilarna je ravno
        dovolj velika, da je v njej poleg za Brino (naš unikaten destilacijski
        kotel) prostora še za dva destilarja. Tako in drugače je minimalističen
        tudi naš gin, ki nastaja v mini serijah.
      </About>
    </IntroWrapper>
  );
})

const IntroWrapper = tw.section`
p-10 md:p-20 bg-white`;

const Title = tw.h1`
text-4xl font-bold mb-16 text-center`;

const About = tw.p`
text-xl font-thin my-5 text-center`;
