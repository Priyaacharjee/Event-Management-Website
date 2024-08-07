import React, { useState } from "react";
import ThemeButton from "./ThemeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import bgVideo from "../assets/bg_video.mp4";

export default function Header() {
  const [hamburgerMenuClicked, setHamburgerMenuClicked] = useState(false);
  const hambergerClick = () => {
    setHamburgerMenuClicked(!hamburgerMenuClicked);
    setdropDownOpen(false);
  };

  const [dropDownOpen, setdropDownOpen] = useState(false);
  const dropDown = () => {
    setdropDownOpen(!dropDownOpen);
    setHamburgerMenuClicked(false);
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
        <div className="w-2/5 2xl:w-1/5 xl:w-1/5 lg:w-1/5 md:w-1/5 sm:w-1/5 flex justify-end px-3 py-1 space-x-3 2xl:pr-5 xl:pr-4 lg:pr-3 md:pr-2 sm:pr-0 items-center">
          <div className="w-1/5 flex justify-center">
            <img
              src="https://cdn-icons-png.freepik.com/512/219/219986.png"
              alt=""
              title="User Image"
              className="rounded-xl h-6 w-6 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-8 xl:w-8 2xl:h-8 2xl:w-8 bg-blue-300 sm:h-6 sm:w-6 hover:cursor-pointer"
            ></img>
          </div>
          <div className="w-1/5 ">
            <span className="text-white font-bold hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline">
              User
            </span>
          </div>
          <div className="w-1/5 ">
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{ color: "#ffffff" }}
              className="hover:cursor-pointer hover:size-5"
              onClick={dropDown}
            />
          </div>

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
      <div className="w-full flex h-[35rem] justify-end bg-cover relative text-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          style={{
            filter: "brightness(0.5)",
          }}
        >
          <source src={bgVideo} type="video/mp4" />
        </video>
        
        {dropDownOpen ? (
          <div className="flex-col flex justify-end bg-blue-950 text-white w-40 items-center h-[5.2rem] mr-[5%]">
            <div className="w-full text-center pt-2 pb-2 border-b-[0.5px] border-white hover:cursor-pointer hover:text-blue-300 hover:underline">
              My Account
            </div>
            <div className="w-full text-center pt-2 pb-2 hover:cursor-pointer hover:text-blue-300 hover:underline">
              Log Out
            </div>
          </div>
        ) : null}

        {hamburgerMenuClicked ? (
          <div className="flex-col flex justify-end bg-blue-950 text-white w-40 items-center h-[12.2rem] animate-slideIn">
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
