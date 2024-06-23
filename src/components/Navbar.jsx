import React, { useState } from "react";
import { Link } from "react-scroll";
import { IoBook } from "react-icons/io5";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full z-10">
      <div>
        <div className=" flex flex-row justify-between p-5 lg:px-32 px-5 backdrop-blur-md bg-white/50 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className=" flex flex-row items-center cursor-pointer gap-2">
            <span>
              <IoBook size={25} className="text-brightColor" />
            </span>
            <h1 className=" text-xl font-semibold">Myth Weaver</h1>
          </div>

          <nav className="hidden md:flex flex-row items-center text-lg gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor text-textColor "
            >
              Home
            </Link>

            <Link
              to="devs"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor text-textColor "
            >
              Dev's
            </Link>

            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor text-textColor"
            >
              About Us
            </Link>
          </nav>

          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>
        <div
          className={` ${
            menu ? "translate-x-0" : "-translate-x-full"
          } lg:hidden flex flex-col absolute bg-white h-screen text-white left-0 top-16 text-2xl text-center pt-8 pb-4 gap-8 w-full transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer text-textColor"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="devs"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer text-textColor"
            onClick={closeMenu}
          >
            Dev's
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-brightColor transition-all cursor-pointer text-textColor"
            onClick={closeMenu}
          >
            About Us
          </Link>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
