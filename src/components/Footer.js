import React from "react";
import { tw } from "../tailwind";

export default function Footer() {
  return (
    <FooterContainer>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <Title>PubQuiz.si</Title>
        <ul>
          <li className="py-1">Pubqiuz s.p.</li>
          <li className="py-1">Juretov naslov 16</li>
          <li className="py-1">5800 Ajdovscina</li>
          <li className="py-1">Slovenija</li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <Title>Bliznjice:</Title>
        <p className="py-2 font-bold hover:text-gray-400 cursor-pointer">- POGOJI POSLOVANJA</p>
        <p className="py-2 font-bold hover:text-gray-400 cursor-pointer">- VARSTVO OSEBNIH PODATKOV</p>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = tw.div`
flex flex-col-reverse md:flex-row p-10 md:p-20 bg-white
`;

const Title = tw.h1`
text-3xl py-2
`;

