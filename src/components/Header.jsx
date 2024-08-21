import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import bgVideo from "../assets/bg_video.mp4";
import ThemeButton from "./ThemeButton";

export default function Header() {
  const [hamburgerMenuClicked, setHamburgerMenuClicked] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [isClosingDropdown, setIsClosingDropdown] = useState(false);

  const hambergerClick = () => {
    if (hamburgerMenuClicked) {
      setIsClosing(true);
      setTimeout(() => {
        setHamburgerMenuClicked(false);
        setIsClosing(false);
      }, 900);
    } else {
      setHamburgerMenuClicked(true);
    }
    setDropDownOpen(false);
  };

  const dropDown = () => {
    if (dropDownOpen) {
      setIsClosingDropdown(true);
      setTimeout(() => {
        setDropDownOpen(false);
        setIsClosingDropdown(false);
      }, 900);
    } else {
      setDropDownOpen(true);
    }
    setHamburgerMenuClicked(false);
  };

  return (
    <>
      <div className="w-full h-[38rem]">
        <nav
          id="header"
          className="h-12 flex items-center px-4 justify-center w-full text-[16px]"
        >
          {/* Logo----------------------------------------------------------------------------- */}
          <div className="mt-[1rem] w-[50%] 2xl:w-[20%] xl:w-[20%] lg:w-[20%] md:w-[20%] sm:w-[15%] lg:pl-15 xl:pl-20">
            <img className="w-[70%] h-[30%] rounded-2xl" src="logo.jpeg" />
          </div>

          {/* Navbar Menu----------------------------------------------------------------------------- */}
          <div className="items-center md:w-3/5 hidden sm:block md:block lg:block xl:block 2xl:block sm:text-sm md:text-sm lg:text-lg sm:w-[65%]">
            <ul className="text-center grid grid-cols-5">
              <li className="hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline items-center">
                Home
              </li>
              <li className="hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline">
                Services
              </li>
              <li className="hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline">
                About
              </li>
              <li className="hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline">
                Contact
              </li>
              <li className="hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline">
                Gallery
              </li>
            </ul>
          </div>

          {/* User logo----------------------------------------------------------------------------- */}
          <div className="w-2/5 2xl:w-1/5 xl:w-1/5 lg:w-1/5 md:w-1/5 sm:w-[25%] flex justify-end py-1  items-center 2xl:pl-[6%] xl:pl-[6%] lg:pl-[5%] md:pl-[5%] sm:pl-[5%] pl-[5%]">
            {/* Login Button----------------------------------------------------------------------------- */}
            {/* <button className="text-center rounded-md text-white bg-white bg-opacity-[0.3] hover:bg-opacity-[0.2] items-center pt-[5px] pb-[5px] ml-auto mr-5 xl:mr-16 2xl:mr-20 w-[60%] hover:w-[61%] h-10 hover:h-11 lg:text-xl hover:text-blue-200">
                Login
              </button> */}

            {/* Content After Login----------------------------------------------------------------------------- */}
            <div className="2xl:w-[30%] xl:w-[35%] lg:w-[40%] md:w-[100%] flex justify-center pr-1">
              <img
                src="https://cdn-icons-png.freepik.com/512/219/219986.png"
                alt=""
                title="User Image"
                className="rounded-xl h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-8 xl:w-8 2xl:h-8 2xl:w-8 sm:h-6 sm:w-6 hover:cursor-pointer"
              />
            </div>
            <div className="w-auto pr-5">
              <span className="text-white font-bold hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline">
                User
              </span>
            </div>
            <div className="sm:w-[40%] w-[30%]">
              {dropDownOpen ? (
                <FontAwesomeIcon
                  icon={faCaretUp}
                  className="hover:cursor-pointer hover:size-5"
                  style={{ color: "#ffffff" }}
                  onClick={dropDown}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCaretDown}
                  style={{ color: "#ffffff" }}
                  className="hover:cursor-pointer hover:size-5"
                  onClick={dropDown}
                />
              )}
            </div>

            <ThemeButton />
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
        {/* Hero Section------------------------------------------------------------------------------ */}
        <div className=""></div>
        {(dropDownOpen || isClosingDropdown) && (
          <div
            className={`absolute top-14 right-20 flex-col flex text-white w-40 items-center h-[5.2rem] mr-[5%] sm:mr-[5%] md:mr-[3%] lg:mr-[5%] bg-slate-300 bg-opacity-[0.3] rounded-lg ${
              isClosingDropdown ? "animate-slideUp" : "animate-slideBelow"
            }`}
          >
            <div className="w-full text-center pt-2 pb-2 hover:cursor-pointer hover:text-blue-300 hover:underline hover:font-bold">
              My Account
            </div>
            <div className="w-full text-center pt-2 pb-2 hover:cursor-pointer hover:text-blue-300 hover:underline hover:font-bold">
              Log Out
            </div>
          </div>
        )}
        {(hamburgerMenuClicked || isClosing) && (
          <div
            className={`flex-col flex justify-end mr-5 text-white w-40 items-center h-[12.2rem] ${
              isClosing ? "animate-slideOut" : "animate-slideIn"
            } absolute top-14 right-5 bg-slate-300 bg-opacity-[0.3] rounded-lg`}
          >
            <div className="w-full text-center pt-2 pb-2 border-b-[0.5px] border-white hover:cursor-pointer hover:text-blue-300 hover:underline hover:font-bold">
              Home
            </div>
            <div className="w-full text-center pt-2 pb-2 border-b-[0.5px] border-white hover:cursor-pointer hover:text-blue-300 hover:underline hover:font-bold">
              Services
            </div>
            <div className="w-full text-center pt-2 pb-2 border-b-[0.5px] border-white hover:cursor-pointer hover:text-blue-300 hover:underline hover:font-bold">
              About
            </div>
            <div className="w-full text-center pt-2 pb-2 border-b-[0.5px] border-white hover:cursor-pointer hover:text-blue-300 hover:underline hover:font-bold">
              Contact
            </div>
            <div className="w-full text-center pt-2 pb-2 hover:cursor-pointer hover:text-blue-300 hover:underline hover:font-bold">
              Gallery
            </div>
          </div>
        )}
      </div>
    </>
  );
}