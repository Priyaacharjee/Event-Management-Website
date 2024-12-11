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
            style={{
              backgroundImage:
                "url(https://media.istockphoto.com/id/910193030/photo/modern-minimalist-villa.jpg?s=612x612&w=0&k=20&c=xDSV332OhNpQaBGRTSExfjSgJJ5Lmdgh9p479mQ4fkw=)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "40vh",
              width: "100%",
            }}
          > 
          <div
            className="text-7xl text-orange-950 font-bold font-serif text-center "
          >
            Venue Details!!
          </div>         
            </div>
    </div>
      <div className="p-6 bg-gray-100 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-4">{venue.name}</h1>
          <p className="text-gray-700">City: {venue.city}</p>
          <p className="text-gray-700">Max Headcount: {venue.maxHead}</p>
          <p className="text-gray-700">Email: {venue.email}</p>
          <p className="text-gray-700">Contact: {venue.contact}</p>
          <p className="text-gray-700 mt-4">Description: {venue.description}</p>
          <div className="mt-6 grid grid-cols-2 gap-4">
            {venue.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </div>

<div className="m-0 p-0" id="contact">
<Footer menuItems1={footerMenuItems} />
</div>
</>
  );
};
  
  export default Venue_Details;