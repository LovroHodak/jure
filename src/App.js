import React, { useRef } from "react";
import { tw } from "./tailwind";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./pages/Home";
import PogojiPoslovanja from "./pages/PogojiPoslovanja";
import Admin from "./unused/Admin";

function App() {
  const introRef = useRef();
  const productsRef = useRef();
  const contactRef = useRef();
  
  const pogojiRef = useRef()

  let refs = [introRef, productsRef, contactRef];

  return (
    <MainContainer>
      {/* to NAVBAR refrences are sent as Props */}
      <Banner
        introRef={introRef}
        productsRef={productsRef}
        contactRef={contactRef}
      />
      {/* to Components refrences are sent as Refs */}
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home ref={refs} />;
          }}
        />
        <Route
          exact
          path="/pogoji"
          render={() => {
            return <PogojiPoslovanja ref={pogojiRef} />;
          }}
        />
        {/* <Route
          exact
          path="/admin"
          render={() => {
            return <Admin />;
          }}
        /> */}
      </Switch>
      <Footer pogojiRef={pogojiRef} />
    </MainContainer>
  );
}

const MainContainer = tw.div`
max-w-screen-xl m-auto border-2 border-white
`;

export default withRouter(App);
