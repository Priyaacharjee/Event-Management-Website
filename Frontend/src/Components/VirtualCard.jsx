import React from "react";
import { useNavigate } from "react-router-dom";

const VirtualCard = ({ eventId, name, date, organizer, platform, posterImage }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl shadow-lg p-6 w-80 mt-7 ml-9 text-center">
      {/* Event Image */}
      <div className="overflow-hidden rounded-xl">
        <img
          src={posterImage}
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
        <h2 className="text-xl font-semibold text-white">
          Date :{" "}
          {new Date(date).getDate().toString().padStart(2, "0") +
            "-" +
            (new Date(date).getMonth() + 1).toString().padStart(2, "0") +
            "-" +
            new Date(date).getFullYear()}
        </h2>
      </div>

      {/* Organizer */}
      <div className="mt-2">
        <p className="text-lg font-medium text-white">
          Organized By : {organizer}
        </p>
      </div>

      {/* Platform */}
      <div className="mt-2">
        <p className="text-lg font-medium text-white">Platform : {platform}</p>
      </div>

      {/* Register Button */}
      <button
        className="btn2 mt-4"
        onClick={() => navigate(`/eventpage/${eventId}`)}
      >
        Register Now
      </button>
    </div>
  );
};

export default VirtualCard;
