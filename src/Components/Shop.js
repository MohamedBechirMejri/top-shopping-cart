const Shop = (props) => {
  return (
    <div className="py-[5em] sm:pb-0 animate-fade-in">
      <h1 className="p-8 text-4xl font-extrabold text-center">Shop</h1>
      <div className="flex flex-col flex-wrap items-center justify-center gap-8 sm:flex-row">
        {props.items.map((item) => (
          <div
            className="flex items-center justify-start gap-2 text-center transition-all bg-white border-2 border-black shadow-lg sm:flex-col sm:items-center sm:justify-center sm:gap-4 sm:hover:scale-105 animate-fade-in"
            key={item.id}
          >
            <img src={item.image} alt={item.name} className="" />
            <div className="flex flex-col w-full gap-2 grow">
              <div className="flex flex-col w-full gap-2 grow">
                <p className="text-xl font-extrabold text-center">
                  {item.name}
                </p>
                <p className="text-xl text-center">
                  $
                  {item.quantity
                    ? (item.price * item.quantity).toFixed(1)
                    : item.price}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <button
                    className="flex items-center justify-center px-2 font-medium text-white bg-black hover:bg-[#353535] active:scale-95"
                    onClick={() => {
                      if (item.quantity > 0) {
                        item.quantity--;
                        props.setCartItems([...props.cartItems]);
                      }
                    }}
                  >
                    -
                  </button>
                  <p className="text-xl text-center">{item.quantity}</p>
                  <button
                    className="flex items-center justify-center px-2 font-medium text-white bg-black hover:bg-[#353535] active:scale-95"
                    onClick={() => {
                      item.quantity++;
                      props.setCartItems([...props.cartItems]);
                    }}
                  >
                    +
                  </button>
                </div>{" "}
              </div>{" "}
              <button
                className="p-2 px-8 font-medium text-white uppercase bg-black hover:bg-[#353535] active:bg-[#505050]"
                onClick={() => {
                  if (!item.quantity) item.quantity++;
                  if (props.cartItems.includes(item)) {
                    props.setCartItems([...props.cartItems]);
                  } else {
                    props.setCartItems([...props.cartItems, item]);
                  }
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Shop;
