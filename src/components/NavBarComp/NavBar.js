import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";

import { motion } from "framer-motion";

const NavBar = () => {
  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const [isMobile, setIsMobile] = useState(false);
  const handleResize = () => {
    if (window.innerWidth < 767) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
      setToggle(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);

  return (
    <nav className="w-screen h-[80px] z-10 bg-[#434459] fixed drop-shadow-lg text-white ">
      <div className="px-2 flex justify-center items-center w-full h-full">
        <div className="flex items-center justify-center w-screen">
          <h1 className="text-3xl font-medium fixed left-0 ml-5 sm:text-4xl">
            <Link to="/">CONNECTM</Link>
          </h1>
          <ul className="hidden md:flex ms:text-[10px] md:text-[15px] fixed right-0 mr-5 uppercase text-[18px] z-10">
            <Link to="/exhibition">
              <li>Exhibition</li>
            </Link>
            <Link to="/profiles">
              <li>Profiles</li>
            </Link>
            <Link to="/about">
              <li>About Us</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!toggle ? (
            <RxHamburgerMenu className="w-[25px] h-[25px] mr-3 " />
          ) : (
            <RxCross2 className="w-[25px] h-[25px] mr-3" />
          )}
        </div>
      </div>

      <motion.nav
        animate={toggle ? "open" : "closed"}
        variants={variants}
        className={
          !toggle
            ? "hidden"
            : "absolute bg-[#434459] w-full px-8 h-[80px] flex items-center justify-center uppercase text-[18px] "
        }
      >
        <ul
          className={
            !toggle
              ? "hidden"
              : "absolute bg-[#434459] w-full px-8 h-[80px] flex items-center justify-center uppercase text-[0.8rem] z-3 "
          }
        >
          <Link to="/exhibition">
            <li>Exhibition</li>
          </Link>
          <Link to="/profiles">
            <li>Profiles</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </motion.nav>
    </nav>
  );
};

export default NavBar;
