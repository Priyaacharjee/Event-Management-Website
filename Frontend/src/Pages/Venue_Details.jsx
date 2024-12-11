import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { AiFillHome, AiOutlineAppstore, AiFillContacts } from "react-icons/ai";
import Venue_card from "../Components/Venue_card";

const footerMenuItems = [
  { href: "header", label: "Header", icon: AiFillHome },
  { href: "features", label: "Features", icon: AiOutlineAppstore },
  { href: "contact", label: "Contact", icon: AiFillContacts },
];
function Venue_Details() {
  const navigate = useNavigate();
  
  const headerMenuItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/" },
    { label: "Venues", href: "venuecard" },
    { label: "Contact", href: "contact" },
  ];

    return (
        <>
         <div className="App">
        {/* Header Section */}
        <Navbar menuItems={headerMenuItems} />
        
          <div
            className="text-7xl text-orange-950 font-bold font-serif text-center "
          >
            Venue Details!!
          </div>         
            </div>
      
<div className="m-0 p-0" id="contact">
<Footer menuItems1={footerMenuItems} />
</div>
</>
  );
};
  
  export default Venue_Details;