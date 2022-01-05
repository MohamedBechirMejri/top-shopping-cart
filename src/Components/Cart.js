import React, { useEffect, useRef } from "react";

const Cart = (props) => {
  const ref = useRef(null);
  const { items, total } = props.data;

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

  return (
    <>
      <div
        ref={ref}
        className={`border-l-2 h-screen w-[30vw] fixed z-10 transition-all ease-in-out duration-[250ms]  border-black bg-white flex flex-col ${
          props.isOpen ? "right-0" : "-right-[30vw]"
        } items-center justify-start gap-2 p-4  ${
          props.isOpen ? " ring-[#000000a2]" : "ring-[#00000000] "
        } ring-[100vw] `}
      >
        <h1 className="uppercase font-extrabold text-2xl m-4">your Cart</h1>
        <div className="w-full flex flex-col items-start justify-start gap-4  ">
          {items.map((item) => (
            <div
              className="flex border border-black  items-center justify-start w-full text-center "
              key={item.id}
            >
              <img src={item.image} alt={item.name} className="w-32 h-32" />
              <div className="grow gap-2 flex flex-col">
                <p className="text-center text-xl font-semibold">{item.name}</p>
                <p className="text-center text-xl">${item.price}</p>
                <div className="flex items-center justify-center gap-4">
                  <button className="bg-black text-white font-medium   justify-center items-center flex  px-2">
                    -
                  </button>
                  <p className="text-center text-xl">{item.quantity}</p>
                  <button className="bg-black text-white font-medium   justify-center items-center flex px-2">
                    +
                  </button>
                </div>{" "}
              </div>
            </div>
          ))}
        </div>
        <hr />
        <p className="text-xl font-bold">Total: ${total}</p>
        <button className="bg-black text-white p-2 px-12 font-medium uppercase text-xl">
          Checkout
        </button>
      </div>
    </>
  );
};

export default Cart;
