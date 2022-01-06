import Nav from "./Components/Nav";
import Cart from "./Components/Cart";
import { useState } from "react";
import Shop from "./Components/Shop";
import { Route, Routes } from "react-router-dom";
const items = [
  {
    id: 1,
    name: "Product 1",
    quantity: 0,
    price: "599.9",
    image: "https://picsum.photos/200/200",
  },
  {
    id: 2,
    name: "Product 2",
    quantity: 0,
    price: "599.9",
    image: "https://picsum.photos/200/200",
  },
  {
    id: 3,
    name: "Product 3",
    quantity: 0,
    price: "599.9",
    image: "https://picsum.photos/200/200",
  },
  {
    id: 4,
    name: "Product 4",
    quantity: 0,
    price: "599.9",
    image: "https://picsum.photos/200/200",
  },
  {
    id: 5,
    name: "Product 5",
    quantity: 0,
    price: "599.9",
    image: "https://picsum.photos/200/200",
  },
  {
    id: 6,
    name: "Product 6",
    quantity: 0,
    price: "599.9",
    image: "https://picsum.photos/200/200",
  },
  {
    id: 7,
    name: "Product 7",
    quantity: 0,
    price: "599.9",
    image: "https://picsum.photos/200/200",
  },
  {
    id: 8,
    name: "Product 8",
    quantity: 0,
    price: "599.9",
    image: "https://picsum.photos/200/200",
  },
  {
    id: 9,
    name: "Product 9",
    quantity: 0,
    price: "599.9",
    image: "https://picsum.photos/200/200",
  },
];

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  return (
    <div className="w-screen h-screen ">
      <Nav setIsOpen={setIsOpen} cartItems={cartItems} />
      <Routes>
       {/* <Route path="/" element={<Shop items={items} />} /> */}
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
      <Cart
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        items={cartItems}
        setCartItems={setCartItems}
      />
    </div>
  );
};

export default App;
