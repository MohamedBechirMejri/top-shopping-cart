import Nav from "./Components/Nav";
import Cart from "./Components/Cart";
import { useState } from "react";
const items = [
  {
    id: 1,
    name: "Product 1",
    quantity: 1,
    price: "599.9",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Product 2",
    quantity: 1,
    price: "599.9",
    image: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Product 3",
    quantity: 1,
    price: "599.9",
    image: "https://picsum.photos/200/300",
  },
];
const total = items
  .reduce((acc, item) => {
    return acc + parseFloat(item.price * item.quantity);
  }, 0)
  .toFixed(2);
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-screen h-screen ">
      <Nav setIsOpen={setIsOpen} />
      <Cart
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        data={{
          items,
          total,
        }}
      />
    </div>
  );
};

export default App;
