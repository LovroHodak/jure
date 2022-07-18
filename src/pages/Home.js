import React, { forwardRef } from "react";
import Intro from "../components/Intro";
import Products from "../components/Products";
import Contact from "../components/Contact";

export default forwardRef(function Home(_, refs) {
  return (
    <div>
      <Intro ref={refs[0]} />
      <Products ref={refs[1]} /> 
      <Contact ref={refs[2]} />
    </div>
  );
})
