import { useState } from "react";
import Header from "./components/Header/Header";
import Offer from "./components/offer section/Offer";

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {show && <Offer handelShow={() => setShow((prev) => !prev)} />}
      <Header />
    </div>
  );
}

export default App;
