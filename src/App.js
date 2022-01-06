import Nav from "./Components/Nav";
import Cart from "./Components/Cart";
import { useState } from "react";
import Shop from "./Components/Shop";
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import { items } from './serverData';



const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="w-screen h-screen select-none">
      <Nav setIsOpen={setIsOpen} cartItems={cartItems} />{" "}
      <Cart
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        items={cartItems}
        setCartItems={setCartItems}
      />
      <Routes>
        <Route path="contact" element={<Contact />} />
        <Route
          path="shop"
          element={
            <Shop
              items={items}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
