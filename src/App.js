import { tw } from "./tailwind";
import Banner from "./components/Banner";
import Intro from "./components/Intro";
import Products from "./components/Products";

function App() {
  return (
    <MainContainer>
      <Banner/>
      <Intro/>
      <Products />
    </MainContainer>
  );
}


const MainContainer = tw.div`
`

export default App;

