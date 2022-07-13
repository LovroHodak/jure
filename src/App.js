import React, { useRef } from "react";
import { tw } from "./tailwind";
import Banner from "./components/Banner";
import Intro from "./components/Intro";
import Products from "./components/Products";

function App() {
  const introRef = useRef();
  const productsRef = useRef();

  return (
    <MainContainer>
      {/* to NAVBAR refrences are sent as Props */}
      <Banner introRef={introRef} productsRef={productsRef} />
      {/* to Components refrences are sent as Refs */}
      <Intro ref={introRef} />
      <Products ref={productsRef} />
    </MainContainer>
  );
}

const MainContainer = tw.div`
`;

export default App;
