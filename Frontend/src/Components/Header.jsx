import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCaretDown,
  faCaretUp,
  faMagnifyingGlass,
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

  function handleEnter(e) {
    if (e.keyCode == 13) {
      //search API
      alert("search clicked!")
    }
  }


  return (
    <>
      <div className="w-full h-[38rem]">
        <nav
          id="header"
          className="h-16 flex items-center px-4 justify-center w-full text-[16px] bg-black text-white"
        >
          {/* Logo */}
          <div className="mt-[1rem] w-[50%] 2xl:w-[20%] xl:w-[20%] lg:w-[20%] md:w-[20%] sm:w-[15%] lg:pl-15 xl:pl-20">
            <img className="w-[70%] h-[30%] rounded-2xl" src="logo.jpeg" />
          </div>

          {/* Navbar Menu */}
          <div className="items-center md:w-3/5 hidden sm:block md:block lg:block xl:block 2xl:block sm:text-sm md:text-sm lg:text-lg sm:w-[45%]">
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
          <div className="w-3/5 2xl:w-1/5 xl:w-[25%] lg:w-2/5 md:w-[35%] sm:w-[35%] flex justify-end py-1 items-center 2xl:pl-[6%] xl:pl-[6%] lg:pl-[5%] md:pl-[5%] sm:pl-[5%] pl-[5%]  sm:ml-12">
            {/* Search Button */}
            <div className="2xl:w-[100%] xl:w-[35%] lg:w-[20%] md:w-[100%] sm:w-[100%] xl:mr-[15px] xl:ml-[-56px] md:mr-[-5%] sm:ml-[2%] sm:pl-[3%] pl-[5%] flex justify-center pr-1 lg:ml-[-28px] lg:block hidden">
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff", }} className="text-xl" onClick={searchClick} />
            </div>

            <div className="2xl:w-[100%] xl:w-[40%] lg:w-[18%] md:w-[30%] sm:w-[28%] flex justify-center pr-1 md:ml-[-9%] xl:ml-[38px] lg:ml-[15%] sm:ml-[-15px] bg-white">
              <img
                src="https://cdn-icons-png.freepik.com/512/219/219986.png"
                alt=""
                title="User Image"
                className="rounded-xl h-7 w-7 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-8 xl:w-8 2xl:h-8 2xl:w-8 sm:h-7 sm:w-7 lg: ml-1.5 md:ml-1 sm:ml-1  hover:cursor-pointer"
              />
            </div>
            <div className="w-auto pr-2">
              <span className="text-white font-bold hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline ml-[10px]">
                User
              </span>
            </div>
            <div className="sm:w-[40%] w-[30%]">
              {dropDownOpen ? (
                <FontAwesomeIcon
                  icon={faCaretUp}
                  className="hover:cursor-pointer hover:size-4 bg-slate-600"
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

            <div className="mt-6 ml-6 mr-5 2xl:mr-2 xl:mr-3 lg:mr-4 md:mr-3 sm:mr-4">
              <ThemeButton />
            </div>

            {/* Hamburger Menu */}
            {hamburgerMenuClicked ? (
              <FontAwesomeIcon
                icon={faXmark}
                style={{ color: "#ffffff" }}
                className="pl-0 block sm:hidden lg:hidden md:hidden xl:hidden 2xl:hidden h-6 w-7 ml-5"
                onClick={hambergerClick}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "#ffffff" }}
                className="pl-0 block sm:hidden lg:hidden md:hidden xl:hidden 2xl:hidden h-6"
                onClick={hambergerClick}
              />
            )}
          </div>
        </nav>

        {/* Search Bar Dropdown */}
        {(searchBarClicked || isSearchDropdown) && (
          <div
            className={`absolute top-13 w-full flex justify-center pt-3 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] pb-4 ${isSearchDropdown ? "animate-slideUp" : "animate-slideBelow"
              }`}
          >
            <input
              className={`bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-2 shadow-md focus:shadow-lg dark:shadow-md w-[30%] 2xl:w-[40%] xl:w-[45%] lg:w-[50%] ${isSearchDropdown ? "animate-slideUp block" : "animate-slideBelow block"
                }`}
              autoComplete="off"
              placeholder="Search here..."
              name="text"
              type="text"
              onKeyDown={handleEnter}
            />

          </div>
        )}

        {/* User Dropdown */}
        {(dropDownOpen || isClosingDropdown) && (
          <div
            className={`absolute top-14 left-[49%] 2xl:left-[87%] xl:left-[83%] lg:left-[75%] md:left-[71%] sm:left-[66%] flex-col flex text-white w-40 items-center h-[5.2rem] mr-[5%] sm:mr-[5%] md:mr-[3%] lg:mr-[5%] bg-slate-300 bg-opacity-[0.3] rounded-lg ${isClosingDropdown ? "animate-slideUp" : "animate-slideBelow"
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


      {/* <div className="bg-slate-500 w-[100%]"></div> */}
      
      {/* search div for md and sm screen------------------------- */}
      <div className="w-[500px] relative m-auto justify-center flex flex-col max-w-md lg:hidden h-[70px] ">
        <div className="relative">
          <input type="text" placeholder="Search Here.." className="w-full p-4 rounded-full bg-zinc-200 text-zinc-600 font-mono h-16" />
          <button className="absolute right-1 top-1/2 p-4 -translate-y-1/2 bg-slate-900 rounded-full w-[12%]">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff", }} className="text-xl" />
          </button>
        </div>

        {/* div  for showing search results functions need to be added*/}
        {/* <div className="absolute top-20 p-4 bg-zinc-200 text-white w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2"></div> */}
      </div>

      {/* </div> */}
      <div className="h-[650px] items-center"></div>
    </>
  );
}
