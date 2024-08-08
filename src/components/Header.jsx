
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import bgImage from "../assets/bg.jpeg";

export default function Header() {
  const [hamburgerMenuClicked, setHamburgerMenuClicked] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const hambergerClick = () => {
    if (hamburgerMenuClicked) {
      setIsClosing(true);
      setTimeout(() => {
        setHamburgerMenuClicked(false);
        setIsClosing(false);
      }, 1000); 
    } else {
      setHamburgerMenuClicked(true);
    }
  };

  return (
    <>
      <nav id="header" className="bg-blue-950 h-12 flex items-center px-4 justify-center w-auto">
        {/* Logo */}
        <div className="w-1/5 text-white lg:pl-15 xl:pl-20">Logo</div>

        {/* Navbar Menu */}
        <div className="items-center w-3/5">
          <ul className="invisible sm:visible md:visible lg:visible xl:visible 2xl:visible text-white flex text-center">
            <li className="hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline items-center w-1/5">Home</li>
            <li className="hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline w-1/5">Services</li>
            <li className="hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline w-1/5">About</li>
            <li className="hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline w-1/5">Contact</li>
            <li className="hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline w-1/5">Gallery</li>
          </ul>
        </div>

        {/* User Logo */}
        <div className="w-1/5 flex justify-end px-3 py-1 space-x-3 2xl:pr-20 xl:pr-8 lg:pr-3 md:pr-2 sm:pr-0 items-center pr-5">
          <img
            src="https://cdn-icons-png.freepik.com/512/219/219986.png"
            alt="User"
            className="rounded-xl h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-8 xl:w-8 2xl:h-8 2xl:w-8 bg-blue-300 sm:h-6 sm:w-6 hover:cursor-pointer"
          />
          <span className="text-white font-bold hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline pr-5">User</span>
          <FontAwesomeIcon icon={faCaretDown} style={{ color: "#ffffff" }} />

          {/* Hamburger Menu */}
          {hamburgerMenuClicked ? (
            <FontAwesomeIcon
              icon={faXmark}
              style={{ color: "#ffffff" }}
              className="pl-0 block sm:hidden lg:hidden md:hidden xl:hidden 2xl:hidden"
              onClick={hambergerClick}
            />
          ) : (
            <FontAwesomeIcon
              icon={faBars}
              style={{ color: "#ffffff" }}
              className="pl-0 block sm:hidden lg:hidden md:hidden xl:hidden 2xl:hidden"
              onClick={hambergerClick}
            />
          )}
        </div>
      </nav>

      {/* Menu in Phone Screen */}
      <div
        className={`w-full flex h-96 justify-end bg-cover`}
        style={{ backgroundImage: `url(${bgImage})` }}
        ><div
        className={`w-full flex  justify-end bg-cover ${hamburgerMenuClicked ? 'animate-slideIn' : isClosing ? 'animate-slideOut' : 'hidden'}`}
      ></div>
     
        {(hamburgerMenuClicked || isClosing) && (
          <div className={`flex-col flex justify-end bg-gradient-to-r from-blue-600 to-cyan-900 mt-4 text-white w-40 items-center h-[12.2rem] ${isClosing ? 'animate-slideOut' : 'animate-slideIn'}`}>
                <div className="w-full text-center pt-2 pb-2 border-b-[0.5px] border-white hover:cursor-pointer hover:text-blue-300 hover:underline">Home</div>
                <div className="w-full text-center pt-2 pb-2 border-b-[0.5px] border-white hover:cursor-pointer hover:text-blue-300 hover:underline">Services</div>
                <div className="w-full text-center pt-2 pb-2 border-b-[0.5px] border-white hover:cursor-pointer hover:text-blue-300 hover:underline">About</div>
                <div className="w-full text-center pt-2 pb-2 border-b-[0.5px] border-white hover:cursor-pointer hover:text-blue-300 hover:underline">Contact</div>
                <div className="w-full text-center pt-2 pb-2 hover:cursor-pointer hover:text-blue-300 hover:underline">Gallery</div>
          </div>
        )}
      </div>
    </>
  );
}

