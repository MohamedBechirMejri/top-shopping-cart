import Nav from "./Components/Nav";
import Cart from "./Components/Cart";
import { useState } from "react";
import Shop from "./Components/Shop";
import { Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";
import { items } from "./serverData";
import Home from "./Components/Home";
import coolBackground from "./assets/images/cool-background.png";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="w-screen h-screen select-none " style={{
      backgroundImage: `url(${coolBackground})`,
    }}>
      <Nav setIsOpen={setIsOpen} cartItems={cartItems} />{" "}
      <Cart
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        items={cartItems}
        setCartItems={setCartItems}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="shop"
          element={
            <Shop
              items={items}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />{" "}
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
