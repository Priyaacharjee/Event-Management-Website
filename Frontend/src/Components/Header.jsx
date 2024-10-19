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

  const [searchBarClicked, setSearchBarClicked] = useState(false);
  const [isSearchDropdown, setIsSearchDropdown] = useState(false);

  const searchClick = () => {
    if (searchBarClicked) {
      setIsSearchDropdown(true);
      setTimeout(() => {
        setSearchBarClicked(false);
        setIsSearchDropdown(false);
      }, 900);
    } else {
      setSearchBarClicked(true);
    }
    setDropDownOpen(false);
    setHamburgerMenuClicked(false);
  }

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
    setSearchBarClicked(false);
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
    setSearchBarClicked(false);
  };

  return (
    <>
      <div className="w-full h-[38rem]">
        <nav
          id="header"
          className="h-12 flex items-center px-4 justify-center w-full text-[16px] bg-black text-white"
        >
          {/* Logo */}
          <div className="mt-[1rem] w-[50%] 2xl:w-[20%] xl:w-[20%] lg:w-[20%] md:w-[20%] sm:w-[15%] lg:pl-15 xl:pl-20">
            <img className="w-[70%] h-[30%] rounded-2xl" src="logo.jpeg" />
          </div>

          {/* Navbar Menu */}
          <div className="items-center md:w-3/5 hidden sm:block md:block lg:block xl:block 2xl:block sm:text-sm md:text-sm lg:text-lg sm:w-[45%] bg-slate-500">
            <ul className="text-center grid grid-cols-4 gap-1">
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

          {/* User logo */}
          <div className="w-2/5 2xl:w-1/5 xl:w-1/5 lg:w-1/5 md:w-1/5 sm:w-[35%] flex justify-end py-1 items-center 2xl:pl-[6%] xl:pl-[6%] lg:pl-[5%] md:pl-[5%] sm:pl-[5%] pl-[5%]  sm:ml-12 bg-blue-600">
            {/* Search Button */}
            <div className="2xl:w-[100%] xl:w-[35%] lg:w-[40%] md:w-[100%] sm:w-[100%] md:mr-[-5%] sm:ml-[2%] sm:pl-[3%] pl-[5%] flex justify-center pr-1 lg:ml-[-78px] bg-red-500">
              <img
                src="https://img.icons8.com/?size=100&id=KPmthqkeTgDN&format=png&color=000000"
                alt=""
                title="Search-bar"
                className="rounded-xl h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-8 xl:w-8 2xl:h-8 2xl:w-8 sm:h-7 sm:w-8 hover:cursor-pointer md:ml-1 sm:ml-5"
                onClick={searchClick}
              />
            </div>
            {/* <div className="w-auto pr-5">
              {/* <span className="text-white font-bold hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline">
              </span> 
            </div> */}

            {/* User Image */}
            <div className="2xl:w-[100%] xl:w-[35%] lg:w-[40%] md:w-[100%] flex justify-center pr-1 mr-1 ml-6 md:ml-[24%]">
              <img
                src="https://cdn-icons-png.freepik.com/512/219/219986.png"
                alt=""
                title="User Image"
                className="rounded-xl h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-8 xl:w-8 2xl:h-8 2xl:w-8 sm:h-6 sm:w-6 hover:cursor-pointer"
              />
            </div>
            <div className="w-auto pr-2">
              <span className="text-white font-bold hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline">
                User
              </span>
            </div>
            <div className="sm:w-[40%] w-[30%]">
              {dropDownOpen ? (
                <FontAwesomeIcon
                  icon={faCaretUp}
                  className="hover:cursor-pointer hover:size-4"
                  style={{ color: "#ffffff" }}
                  onClick={dropDown}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCaretDown}
                  style={{ color: "#ffffff" }}
                  className="hover:cursor-pointer hover:size-4"
                  onClick={dropDown}
                />
              )}
            </div>

            <div className="mt-6 ml-6">
              <ThemeButton />
            </div>

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

        {/* Search Bar Dropdown */}
        {(searchBarClicked || isSearchDropdown) && (
          <div
            className={`absolute top-14 right-20 flex-col flex text-white w-40 items-center mr-[5%] sm:mr-[5%] md:mr-[5%] lg:mr-[5%] bg-slate-300 bg-opacity-[0.3] rounded-lg ${isSearchDropdown ? "animate-slideUp" : "animate-slideBelow"
              }`}
          >
            <input
              className="bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-blue-800 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg focus:shadow-blue-800 dark:shadow-md dark:shadow-purple-500"
              autoComplete="off"
              placeholder="Search here..."
              name="text"
              type="text"
            />
          </div>
        )}

        {/* User Dropdown */}
        {(dropDownOpen || isClosingDropdown) && (
          <div
            className={`absolute top-14 left-[86%] flex-col flex text-white w-40 items-center h-[5.2rem] mr-[5%] sm:mr-[5%] md:mr-[3%] lg:mr-[5%] bg-slate-300 bg-opacity-[0.3] rounded-lg ${isClosingDropdown ? "animate-slideUp" : "animate-slideBelow"
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

        {/* Hamburger Menu Dropdown */}
        {(hamburgerMenuClicked || isClosing) && (
          <div
            className={`flex-col flex justify-end mr-5 text-white w-40 items-center h-[12.2rem] ${isClosing ? "animate-slideOut" : "animate-slideIn"
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
