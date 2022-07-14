import React, { useRef } from "react";
import { tw } from "./tailwind";
import Banner from "./components/Banner";
import Intro from "./components/Intro";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from './components/Footer'

function App() {
  const introRef = useRef();
  const productsRef = useRef();
  const contactRef = useRef();

  return (
    <MainContainer>
      {/* to NAVBAR refrences are sent as Props */}
      <Banner introRef={introRef} productsRef={productsRef} contactRef={contactRef} />
      {/* to Components refrences are sent as Refs */}
      <Intro ref={introRef} />
      <Products ref={productsRef} />
      <Contact ref={contactRef} />
      <Footer />
    </MainContainer>
  );
}

const MainContainer = tw.div`
`;

export default App;
