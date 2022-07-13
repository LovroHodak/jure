import React from "react";
import { tw } from "../tailwind";
import Navv from "./Navv";

export default function Banner({introRef, productsRef}) {
  
  
  return (
    <ImageWrapper>
      <Navv introRef={introRef} productsRef={productsRef} />
      <p><a
        href="https://www.facebook.com/events/1231350014071549?acontext=%7B%22source%22%3A%2229%22%2C%22ref_notif_type%22%3A%22plan_user_invited%22%2C%22action_history%22%3A%22null%22%7D&notif_id=1657718876120754&notif_t=plan_user_invited&ref=notif"
        target="blank"
      >
        <i className="bi bi-facebook text-white text-4xl absolute bottom-3 right-3 hover:text-gray-400"></i>
      </a></p>
    </ImageWrapper>
  );
}

const ImageWrapper = tw.section`
bg-[url('https://bratinovgin.com/wp-content/uploads/2019/12/brina-venera.jpg')] h-96 relative`;

const Image = tw.img`
`;
