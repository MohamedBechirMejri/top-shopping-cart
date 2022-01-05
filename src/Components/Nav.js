import React from "react";

const Nav = (props) => {
  return (
    <nav className="fixed top-0 flex items-center justify-between w-screen p-3 text-3xl font-extrabold text-black bg-white border-b border-black">
      <div className="flex items-center gap-4 ">
        <a href="#responsive-header" className="block text-center ">
          <div
            className="flex items-center justify-center leading-[.8em] text-[.8em] text-[#ec40fc]"
            style={{
              color: "transparent",
              WebkitTextStroke: "1px #ec40fc",
            }}
          >
            <div>
              <p>M</p>
              <p>B</p>
              <p>M</p>
            </div>
            <div className=" text-[.8rem] leading-[.9em]">
              <p>S</p>
              <p>H</p>
              <p>O</p>
              <p>P</p>
              <p>!</p>
            </div>
          </div>
        </a>

        <a href="#responsive-header" className="">
          Home
        </a>
        <a href="#responsive-header" className="">
          Shop
        </a>
        <a href="#responsive-header" className="">
          About
        </a>
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 16 16"
        onClick={() => {
          props.setIsOpen(true);
        }}
      >
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      </svg>
    </nav>
  );
};

export default Nav;
