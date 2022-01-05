const Shop = (props) => {
  return (
    <div className="pt-[5em]">
      <h1>Shop</h1>
      <div className="flex items-center justify-center gap-8">
        {props.items.map((item) => (
          <div
            className="flex flex-col border border-black  items-center justify-start  text-center "
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
            </div>{" "}
            <button>Add to cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Shop;
