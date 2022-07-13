import React, { useRef, forwardRef, useState, useEffect } from "react";
import { tw } from "../tailwind";

export default forwardRef(function Intro(_, ref) {
  console.log(ref.current);
  return (
    <IntroWrapper ref={ref}>
      <Title>Smo minimalisti</Title>
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
p-20`;

const Title = tw.h1`
text-4xl font-bold mt-5 mb-5 text-center`;

const About = tw.p`
text-xl font-thin mt-3 mb-3 text-center`;
