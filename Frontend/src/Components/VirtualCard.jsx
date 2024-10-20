import React from "react";
import { useNavigate } from "react-router-dom";
import EventPage from "../Pages/EventPage";

const VirtualCard = ({key,name, date, organizer, platform, image}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl shadow-lg p-6 w-80 mt-7 ml-9 text-center">
      {/* Event Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={image}
          alt="Event"
          className="w-full h-52 object-cover rounded-md "
        />
      </div>

      {/* Event Name */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-white">{name}</h2>
      </div>

      {/* Event Date */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-white">Date : {date}</h2>
      </div>

      {/* Organizer */}
      <div className="mt-2">
        <p className="text-lg font-medium text-white">
          Organized By : {organizer}
        </p>
      </div>

      {/* Venue */}
      <div className="mt-2">
        <p className="text-lg font-medium text-white">
           Platform : {platform}
        </p>
      </div>

      {/* Register Button */}
      <button
        className="btn2 mt-4"
        onClick={() => navigate("/eventpage")}
        //mt-6 bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold py-2 px-4 rounded-lg hover:from-purple-900 hover:to-blue-900 focus:outline-none
      >
        Register Now
      </button>
    </div>
  );
};

export default VirtualCard;
