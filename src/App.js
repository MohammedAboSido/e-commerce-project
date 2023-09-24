import { useState } from "react";
import Additions from "./components/Additions/Additions";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Newsletter from "./components/Newsletter/Newsletter";
import Offer from "./components/offer section/Offer";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show && <Offer handelShow={() => setShow((prev) => !prev)} />}
      <Header />
      <Categories />
      <Additions />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
