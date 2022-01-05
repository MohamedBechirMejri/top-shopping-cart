import Nav from "./Components/Nav";
import Cart from "./Components/Cart";
import { useState } from "react";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-screen h-screen ">
      <Nav setIsOpen={setIsOpen} />
      <Cart setIsOpen={setIsOpen} isOpen={isOpen} />
    </div>
  );
};

export default App;
