import React from "react";
import ThemeButton from "./ThemeButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <nav className="bg-blue-950 h-12 flex items-center px-4 justify-center w-auto">
        {/* <ThemeButton /> */}
        
        {/* Logo----------------------------------------------------------------------------- */}
        <div className="w-1/5 text-white lg:pl-15 xl:pl-20">Logo</div>

        {/* Navbar Manu----------------------------------------------------------------------------- */}
        <div className="items-center w-3/5">
          <ul className="invisible sm:visible md:visible lg:visible xl:visible 2xl:visible text-white flex sm:space-x-7 md:space-x-12 lg:space-x-20 xl:space-x-28 2xl:space-x-36">
            <li className="hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline">
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
        {/* Login Button----------------------------------------------------------------------------- */}
        {/* <button className="rounded-md bg-slate-100 px-3 items-center py-1 ml-auto mr-5 xl:mr-16 2xl:mr-20">Login</button> */}

        {/* User logo----------------------------------------------------------------------------- */}
        <div className="w-1/5 flex justify-center px-3 items-center py-1 ml-auto space-x-2 hover:cursor-pointer hover:text-blue-100 hover:font-bold hover:underline">
          <img
            src="https://cdn-icons-png.freepik.com/512/219/219986.png"
            alt=""
            title="User Image"
            className="rounded-xl h-8 w-8 bg-blue-300"
          ></img>
          <span className="text-white font-bold">User</span>

          {/* Hamburger Menu------------------------------------------------------------------------- */}
          <FontAwesomeIcon
            icon={faBars}
            style={{ color: "#ffffff" }}
            className="pl-5 block sm:hidden lg:hidden md:hidden xl:hidden 2xl:hidden"
          />
        </div>
      </nav>
    </>
  );
}
