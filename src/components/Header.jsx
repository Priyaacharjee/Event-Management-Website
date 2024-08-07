import React, { useState } from "react";
import ThemeButton from "./ThemeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import bgImage from "../assets/bg.jpeg";

export default function Header() {
  const [hamburgerMenuClicked, setHamburgerMenuClicked] = useState(false);

  const hambergerClick = () => {
    setHamburgerMenuClicked(!hamburgerMenuClicked);
  };

  return (
    <>
      <nav className="bg-blue-950 h-12 flex items-center px-4 justify-center w-auto">
        {/* <ThemeButton /> */}

        {/* Logo----------------------------------------------------------------------------- */}
        <div className="w-1/5 text-white lg:pl-15 xl:pl-20 ">Logo</div>

        {/* Navbar Manu----------------------------------------------------------------------------- */}
        <div className="items-center w-3/5 ">
          <ul className="invisible sm:visible md:visible lg:visible xl:visible 2xl:visible text-white flex text-center">
            {/* <li></li> */}
            <li className="hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline items-center w-1/5">
              Home
            </li>
            <li className="hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline w-1/5">
              Services
            </li>
            <li className="hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline w-1/5">
              About
            </li>
            <li className="hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline w-1/5">
              Contact
            </li>
            <li className="hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline p w-1/5">
              Gallery
            </li>
          </ul>
        </div>
        {/* Login Button----------------------------------------------------------------------------- */}
        {/* <button className="rounded-md bg-slate-100 px-3 items-center py-1 ml-auto mr-5 xl:mr-16 2xl:mr-20">Login</button> */}

        {/* User logo----------------------------------------------------------------------------- */}
        <div className="w-1/5 flex justify-end px-3 py-1 space-x-3 2xl:pr-20 xl:pr-8 lg:pr-3 md:pr-2 sm:pr-0 items-center pr-5">
          <img
            src="https://cdn-icons-png.freepik.com/512/219/219986.png"
            alt=""
            title="User Image"
            className="rounded-xl h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-8 xl:w-8 2xl:h-8 2xl:w-8 bg-blue-300 sm:h-6 sm:w-6 hover:cursor-pointer"
          ></img>
          <span className="text-white font-bold hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline pr-5">
            User
          </span>
          <FontAwesomeIcon icon={faCaretDown} style={{ color: "#ffffff" }} />

          {/* Hamburger Menu------------------------------------------------------------------------- */}
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

      {/* Menu in phone screen------------------------------------------------------------------------- */}

      <div
        className="w-full flex h-96 justify-end bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {hamburgerMenuClicked ? (
          <div className="flex-col flex justify-end bg-blue-950 text-white w-40 items-center h-[12.2rem] animate-[slideIn_1s_ease-in-out]">
            <div className="w-full text-center pt-2 pb-2 border-b-[0.5px] border-white hover:cursor-pointer hover:text-blue-300 hover:underline">
              Home
            </div>
            <div className="w-full text-center pt-2 pb-2 border-b-[0.5px] border-white hover:cursor-pointer hover:text-blue-300 hover:underline">
              Services
            </div>
            <div className="w-full text-center pt-2 pb-2 border-b-[0.5px] border-white hover:cursor-pointer hover:text-blue-300 hover:underline">
              About
            </div>
            <div className="w-full text-center pt-2 pb-2 border-b-[0.5px] border-white hover:cursor-pointer hover:text-blue-300 hover:underline">
              Contact
            </div>
            <div className="w-full text-center pt-2 pb-2 hover:cursor-pointer hover:text-blue-300 hover:underline">
              Gallery
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}
