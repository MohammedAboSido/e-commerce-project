import Herosection from "./components/herosection/Herosection";
import Offer from "./components/offer section/Offer";
import {useState} from "react"
import Product from "./components/product/Product";
import Trandin from "./components/trending/Trandin";
import Instgram from "./components/instgram/Instgram";

function App() {
    const [show, setShow] = useState(true)
  return (
    <div className="App">
        {show && <Offer handelShow={() => setShow((prev) => !prev)} />}
          <Herosection/>
          <Product/>
          <Trandin/>
          <Instgram/>
    </div>
  );
}

export default App;
