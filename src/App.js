import { tw } from "./tailwind";

function App() {
  return (
    <div className="font-bold">
      <h1 className="underline">Jure</h1>
      <Lovro className="text-red-500">Gantar</Lovro>
    </div>
  );
}

const Lovro = tw.div`
text-8xl
`

export default App;

