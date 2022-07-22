import React from "react";
import { Link } from "react-router-dom";
import { tw } from "../tailwind";

export default function Footer({ pogojiRef }) {
  return (
    <FooterContainer>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <Title>PubQuiz.si</Title>
        <ul>
          <li className="py-1">jure s.p.</li>
          <li className="py-1">Juretov naslov 32</li>
          <li className="py-1">5270 Ajdovscina</li>
          <li className="py-1">Slovenija</li>
          <li className="py-1 underline">jurega@gmail.com</li>
          <li className="mt-2">
            <a
              href="https://www.facebook.com/events/1231350014071549?acontext=%7B%22source%22%3A%2229%22%2C%22ref_notif_type%22%3A%22plan_user_invited%22%2C%22action_history%22%3A%22null%22%7D&notif_id=1657718876120754&notif_t=plan_user_invited&ref=notif"
              target="blank"
            >
              <i className="bi bi-facebook text-4xl md:bottom-6 md:right-24 hover:text-gray-400"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="md:w-1/2">
        <Title>Bliznjice:</Title>
        <p
          className="py-2 font-bold hover:text-gray-400 cursor-pointer"
          onClick={() => {
            setTimeout(() => {
              pogojiRef.current.scrollIntoView({ behavior: "smooth" });
            }, 100);
          }}
        >
          <Link to="/pogoji#pogoji">- POGOJI POSLOVANJA</Link>
        </p>
        <p className="py-2 font-bold hover:text-gray-400 cursor-pointer">
          - VARSTVO OSEBNIH PODATKOV
        </p>
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
