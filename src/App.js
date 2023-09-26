
import Herosection from "./components/herosection/Herosection";
import Offer from "./components/offer section/Offer";
import Product from "./components/product/Product";
import Trandin from "./components/trending/Trandin";
import Instgram from "./components/instgram/Instgram";
import { useState } from "react";
import Additions from "./components/Additions/Additions";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Newsletter from "./components/Newsletter/Newsletter";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
        {show && <Offer handelShow={() => setShow((prev) => !prev)} />}
          <Header />
          <Herosection/>
          <Categories />
          <Product/>
          <Additions />
          <Trandin/>
          <Newsletter />
          <Instgram/>
          <Footer />
    </div>
  );
}

export default App;
