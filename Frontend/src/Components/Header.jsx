import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
<<<<<<< HEAD
import {
  faBars,
  faXmark,
  faCaretDown,
  faCaretUp,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import bgVideo from "../assets/bg_video.mp4";
=======
import {faBars,faXmark,faCaretDown,faCaretUp,faMagnifyingGlass,faUser,} from "@fortawesome/free-solid-svg-icons";
>>>>>>> 8568ba249f7fe4a3e9b177dc622f6c4b38863d0d
import ThemeButton from "./ThemeButton";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const navigate = useNavigate();
  const [hamburgerMenuClicked, setHamburgerMenuClicked] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [isClosingDropdown, setIsClosingDropdown] = useState(false);

  const [searchBarClicked, setSearchBarClicked] = useState(false);
  const [isSearchDropdown, setIsSearchDropdown] = useState(false);
<<<<<<< HEAD
=======
  const [scrollDirection, setScrollDirection] = useState(null);

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleLogInClick = () => {
    navigate("/login");
  };
>>>>>>> 8568ba249f7fe4a3e9b177dc622f6c4b38863d0d

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
<<<<<<< HEAD
      //search API
=======
>>>>>>> 8568ba249f7fe4a3e9b177dc622f6c4b38863d0d
      alert("search clicked!")
    }
  }


<<<<<<< HEAD
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
=======
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const direction = scrollTop > 100 ? 'down' : 'up';
    if (scrollDirection !== direction) {
      setScrollDirection(direction);
      if (direction === 'down') { 
        setIsSearchDropdown(true);
        setTimeout(() => {
          setSearchBarClicked(false);
          setIsSearchDropdown(false);
        }, 900);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollDirection]);
  

  return (
    <>
      <div className="w-full h-16">

            {/* Search-Bar Dropdown */}
            {(searchBarClicked || isSearchDropdown) && (
              <div
                className={`pt-[7rem] pb-[3rem] bg-zinc-200 relative top-13 w-full h-24 flex justify-center items-center shadow-xl ${isSearchDropdown ? "animate-slideUp" : "animate-slideBelow"} lg:flex hidden`}
              >
                <input
                  className={`outline-none text-xl h-16 text-zinc-600 font-serif ring-1 ring-zinc-400 focus:ring-2 duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-xl px-4 py-2 shadow-md focus:shadow-lg dark:shadow-md w-[70%] 2xl:w-[80%] xl:w-[60%] lg:w-[80%] ${isSearchDropdown ? "animate-slideUp block" : "animate-slideBelow block"}`}
                  autoComplete="off"
                  placeholder="Search here for product reviews, FAQs and More..."
                  name="text"
                  type="text"
                  onKeyDown={handleEnter}
                />
              </div>
            )}

            {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------  NAVBAR */}
            <nav id="header" className="h-16 flex items-center px-4 justify-between w-full text-[16px] bg-black text-white fixed top-0">

                {/* Logo */}
                <div className="font-serif text-2xl w-[50%] sm:w-[15%] md:w-[20%] lg:w-[20%] xl:w-[20%] 2xl:w-[20%] lg:pl-5 xl:pl-8">
                  Eventek
                </div>

                {/* Navbar Menu */}
                <div className="hidden sm:flex md:w-3/5 lg:w-[45%] xl:w-[40%] 2xl:w-[35%] items-center">
                        <ul className="w-full flex justify-around text-center sm:space-x-4 md:space-x-6 lg:space-x-8">
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


                {/* User Section */}
                <div className="w-[50%] sm:w-[35%] md:w-[35%] lg:w-2/5 xl:w-[25%] 2xl:w-[20%] flex justify-end items-center space-x-4">

                          {/* Search Button */}
                          <div className="hidden lg:flex xl:w-[35%] lg:w-[20%] md:w-full justify-center">
                            <FontAwesomeIcon
                              icon={faMagnifyingGlass}
                              style={{ color: "#ffffff" }}
                              className="text-xl cursor-pointer"
                              onClick={searchClick}
                            />
                          </div>

                          {/* LOGIN Button */}
                          <div className=" flex items-center justify-center px-1 sm:px-8 md:pr-16 lg:pr-24 xl:px-2 2xl:px-2">
                                <div className=" w-full flex justify-center items-center">
                                  <button
                                    onClick={handleLogInClick}
                                    className="bg-indigo-400  hover:bg-slate-500 flex justify-center items-center h-12 sm:h-10 md:h-12 lg:h-12 xl:h-12 w-full px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 rounded-lg font-bold text-sm sm:text-base md:text-lg lg:text-xl "
                                  >
                                    Log In
                                  </button>
                                </div>
                          </div> 
 
                          {/* Hamburger Menu */}
                          <div className="block sm:hidden">
                            {hamburgerMenuClicked ? (
                              <FontAwesomeIcon
                                icon={faXmark}
                                style={{ color: "#ffffff" }}
                                className="cursor-pointer h-6 w-7"
                                onClick={hambergerClick}
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faBars}
                                style={{ color: "#ffffff" }}
                                className="cursor-pointer h-6"
                                onClick={hambergerClick}
                              />
                            )}
                          </div>
                </div>
            </nav>

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

     {/* ----------------------------------------------------------------------------------------------------------------------------------------------------------------------  HERO  PANEL */}
     <div className="hero flex flex-col lg:flex-row lg:items-center lg:justify-between lg:h-[42rem] p-4 bg-gradient-to-r from-cyan-500 to-blue-500  lg:bg-none">
  {/* hero-left */}
  <div className="hero-left lg:w-2/3 lg:mt-0 mt-[5rem] pl-4 lg:pl-6 flex flex-col items-center lg:items-start lg:text-left">
    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-6 text-center lg:text-left">
      Crafting your experience
    </h1>
    <h1 className="font-bold font-serif text-center lg:text-left">
      <p className="text-gradient1 text-4xl xs:text-4xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-8xl font-bold h-32 pt-2" style={{ fontFamily: '"quick"' }}>
        Ready to get started?
      </p>
    </h1>
    <br />
    <h1 className="text-sm sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center lg:text-left mt-[-5rem] md:mt-[-3rem] lg:mt-[1px]">
      We make&nbsp;
      <TypeAnimation
        sequence={[
          "In-person meeting",
          3000,
          "Virtual meeting",
          3000,
          "Hybrid meeting",
          3000,
        ]}
        wrapper="span"
        speed={150}
        style={{
          fontSize: "1.5em",
          color: "#8EA8FF",
          display: "inline-block",
        }}
        repeat={Infinity}
      />
      &nbsp;for you
    </h1>
    <div className="text-slate-500 lg:text-xl mt-4 lg:mt-6 text-center lg:text-left">
      We specialize in organizing exquisite and memorable events. From elegant weddings to corporate gatherings, we bring your vision to life with precision and style.
    </div>
    <div className="flex flex-col lg:flex-row w-full lg:w-[70%] mt-6 lg:mt-8 space-y-4 lg:space-y-0 lg:space-x-4 items-center lg:items-start">
      {/* LOGIN Button */}
      <div className="flex items-center justify-center w-[12rem] lg:w-[12rem] h-[3rem]">
        <button
          onClick={handleSignUpClick}
          className="flex justify-center items-center h-full w-full bg-indigo-400 p-4 rounded-full font-bold text-xl hover:bg-slate-500"
        >
          Create Events
        </button>
      </div>
      <div className="flex items-center justify-center w-[12rem] lg:w-[12rem] h-[3rem]">
        <button
          onClick={handleLogInClick}
          className="flex justify-center items-center h-full w-full bg-indigo-400 p-4 rounded-full font-bold text-xl hover:bg-slate-500"
        >
          Show Events
        </button>
      </div>
    </div>
  </div>

  {/* hero-right */}
  <div className=" hero-right lg:w-1/3 hidden lg:block ">
    <img src="hero.png" alt="Hero" className="w-[400px] h-[400px] 2xl:w-[500px] xl:w-[400px] lg:w-[300px] 2xl:h-[500px] xl:h-[400px] lg:h-[300px] object-cover" />
  </div>

        {/* search div for md and sm screen------------------------- */}
        <div className="w-full max-w-lg relative m-auto mt-[2rem] flex flex-col lg:hidden h-16 md:h-16 sm:h-16 xs:h-16">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Here..."
              className="w-full h-full p-4 rounded-full bg-zinc-200 text-zinc-600 font-mono focus:outline-none md:p-3 sm:p-3 xs:p-3 shadow-2xl border-2 border-black "
            />
            <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-slate-900 rounded-full w-10 h-10">
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#ffffff" }} className="text-xl  md:text-lg sm:text-base xs:text-sm" />
            </button>
          </div>
      </div>
    </div>
>>>>>>> 8568ba249f7fe4a3e9b177dc622f6c4b38863d0d
    </>
  );
}
