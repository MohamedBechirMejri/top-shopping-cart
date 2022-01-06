import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="py-[5em] flex items-center justify-center flex-col h-screen text-2xl font-extrabold w-screen ">
      <p>BEST ONLINE STORE OF THE YEAR</p>
      <Link to="shop">
        <button className="p-4 text-2xl font-extrabold text-white uppercase transition bg-black hover:scale-105">
          start shopping!
        </button>
      </Link>
    </div>
  );
};
export default Home;
