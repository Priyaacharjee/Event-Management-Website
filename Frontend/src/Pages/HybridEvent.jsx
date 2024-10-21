import React, { useEffect, useState } from "react";
import VirtualCard from "../Components/VirtualCard";
import { useNavigate } from "react-router-dom";
import { findUser, logoutUser, fetchHybridEvents } from "../utils/utils";

function HybridEvent() {
  const navigate = useNavigate();

  const [hybridEvents, sethybridEvents] = useState([]);

  useEffect(() => {
    fetchHybridEvents().then((events) => {
      sethybridEvents(events);
    });
  }, []);

  return (
    <div className="App">
      {/* Header Section */}
      <header className="bg-black p-4">
        <nav className="flex justify-between items-center">
          <div className="text-white text-xl font-bold">Eventek</div>
          <ul className="flex space-x-8">
            <li className="text-white cursor-pointer">Home</li>
            <li className="text-white cursor-pointer">Services</li>
            <li className="text-white cursor-pointer">Contact</li>
          </ul>
          <button
            className="bg-blue-700 text-white py-2 px-4 rounded-md"
            onClick={() => navigate("/login")}
          >
            Log In
          </button>
        </nav>
      </header>

      {/* Hybrid Meeting Section */}
      <section className="text-center my-8 p-8">
        <h1
          className="text-7xl text-blue-600 font-bold font-serif "
          style={{ fontFamily: '"quick"' }}
        >
          Hybrid Events
        </h1>
        <div className="flex w-full">
          <p className="text-slate-500 lg:text-xl mt-4 lg:mt-6 text-center lg:text-left font-serif w-[88%]">
            Join us for our hybrid events that combine the best of in-person and
            virtual experiences. Engage with industry experts and fellow
            participants from anywhere, whether you're at the venue or joining
            remotely. Enjoy interactive sessions, valuable discussions, and
            ample networking opportunities that connect you to insights and
            innovations across the globe. Embrace the flexibility of hybrid
            events and be part of the future of gatherings!
          </p>
          <div className=" w-[40%] ml-auto flex justify-end">
            <img
              className="h-72 w-96"
              src="https://media.istockphoto.com/id/1306175866/vector/video-conference-theme.jpg?s=612x612&w=0&k=20&c=vtlB4uJdl3Cut5bx9BZRl5bJsBhhxJ9ivTUPgtB49NY="
              alt="hybridevent"
            />
          </div>
        </div>

        <div className="mt-[-5%]">
          <p className="text-2xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to- to-blue-950">
            WANT TO CREATE A HYBRID MEETING?
          </p>
          <button
            className="btn1 justify-center items-center p-4 rounded-md mt-4"
            onClick={() => navigate("/CreateForm")}
          >
            Create Meeting
          </button>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="text-center mb-8">
        <h2 className="text-3xl font-serif font-semibold">
          Our upcoming events
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-8">
          {Array.isArray(hybridEvents) &&
            hybridEvents.map((item) => (
              <VirtualCard
                eventId={item._id}
                name={item.eventName}
                date={item.date}
                organizer={item.ownerId ? item.ownerId.username : null}
                platform={item.platform ? item.platform : null}
                venue={item.venue ? item.venue : null}
                posterImage={item.posterImage ? item.posterImage.url : null}
              />
            ))}
        </div>
      </section>
    </div>
  );
}

export default HybridEvent;
