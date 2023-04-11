"use client";
import { useState } from "react";
import { TfiMenu, TfiClose, TfiAngleDown } from "react-icons/tfi";

const Menu = () => (
  <>
    <li className="text-[1.2rem] font-bold hover:text-blue-500 transition-all">
      <a href="#home">Home</a>
    </li>
    <li className="text-[1.2rem] font-bold hover:text-blue-500 transition-all">
      <a href="#about">About</a>
    </li>
    <li className="text-[1.2rem] font-bold hover:text-blue-500 transition-all">
      <a href="#portfolio">Portfolio</a>
    </li>
    <li className="text-[1.2rem] font-bold hover:text-blue-500 transition-all">
      <a href="#services">Services</a>
    </li>
    <li className="text-[1.2rem] font-bold hover:text-blue-500 transition-all">
      <a href="#team">Team</a>
    </li>
    <li className="text-[1.2rem] font-bold hover:text-blue-500 transition-all">
      <a href="#blog">Blog</a>
    </li>
    <li className="text-[1.2rem] font-bold hover:text-blue-500 transition-all">
      <a href="#contact">Contact</a>
    </li>
  </>
);

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="flex flex-col items-center mb-32 px-7 header">
      {/* navbar */}
      <div className="z-10 text-white">
        <nav className="flex flex-row justify-between items-center mt-10">
          {/* logo */}
          <h1 className="text-[1.6rem] tracking-wider font-bold">Krunch</h1>

          {/* navbar links */}
          <ul className="gap-10 hidden lg:flex">
            <Menu />
          </ul>

          {/* navbar menu */}
          <div className="flex lg:hidden relative">
            {toggle ? (
              <TfiClose
                size={"2rem"}
                onClick={() => setToggle(false)}
                className="bg-neutral-800 p-1"
              />
            ) : (
              <TfiMenu size={"2rem"} onClick={() => setToggle(true)} />
            )}
            {toggle && (
              <div className="absolute top-10 right-0 p-10 bg-neutral-800">
                <ul className="gap-10 flex flex-col items-start w-72">
                  <Menu />
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* showcase */}
        <div className="flex flex-col mt-44">
          <h1 className="text-[2rem] sm:text-[2.45rem] lg:text-[3rem] text-center">
            CLEAN AND FLEXIBLE TEMPLATE
          </h1>

          <p className="text-[1.1rem] text-center mt-5 mb-10 max-w-4xl">
            Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
            ut sem vitae risus tristique posuere. Duis cursus, mi quis viverra
            ornare, eros dolor interdum nulla, ut commodo diam libero vitae
            erat.{" "}
          </p>

          <div className="flex justify-center gap-10">
            <button className="bg-blue-500 border-blue-500 hover:border-gray-800 hover:bg-gray-800">
              DOWNLOAD NOW
            </button>
            <button className="border-blue-500 hover:bg-blue-500">
              VIEW FEATURES
            </button>
          </div>

          <div className="flex justify-center mt-40 pb-5">
            <a href="#about">
              <TfiAngleDown size={"2rem"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
