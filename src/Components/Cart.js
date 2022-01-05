import React, { useEffect, useRef } from "react";

const Cart = (props) => {
  const ref = useRef(null);
  const { items } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        props.setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [props, ref]);
  const total = items
    .reduce((acc, item) => {
      return acc + parseFloat(item.price * item.quantity);
    }, 0)
    .toFixed(2);
  return (
    <>
      <div
        ref={ref}
        className={`border-l-2 h-screen w-[85vw] sm:w-[30vw] fixed z-10 transition-all ease-in-out duration-[250ms]  border-black bg-white flex flex-col ${
          props.isOpen ? "right-0" : "-right-[100vw] sm:-right-[35vw]"
        } items-center justify-start gap-2 p-4  ${
          props.isOpen ? " ring-[#00000070]" : "ring-[#00000000] "
        } ring-[100vw] `}
      >
        <h1 className="m-4 text-2xl font-extrabold uppercase">your Cart</h1>
        <div className="flex flex-col items-start justify-start w-full gap-4 overflow-scroll">
          {items.map((item) => (
            <div
              className="flex items-center justify-start w-full text-center border border-black "
              key={item.id}
            >
              <img src={item.image} alt={item.name} className="w-32 h-32" />
              <div className="flex flex-col gap-2 grow">
                <p className="text-xl font-semibold text-center">{item.name}</p>
                <p className="text-xl text-center">${item.price}</p>
                <div className="flex items-center justify-center gap-4">
                  <button
                    className="flex items-center justify-center px-2 font-medium text-white bg-black"
                    onClick={() => {
                      if (item.quantity > 0) {
                        item.quantity--;
                        props.setCartItems([...items]);
                      }
                    }}
                  >
                    -
                  </button>
                  <p className="text-xl text-center">{item.quantity}</p>
                  <button
                    className="flex items-center justify-center px-2 font-medium text-white bg-black"
                    onClick={() => {
                      item.quantity++;
                      props.setCartItems([...items]);
                    }}
                  >
                    +
                  </button>
                </div>{" "}
              </div>
            </div>
          ))}
        </div>
        <hr />
        <p className="text-xl font-bold">Total: ${total}</p>
        <button className="p-2 px-12 text-xl font-medium text-white uppercase bg-black">
          Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
