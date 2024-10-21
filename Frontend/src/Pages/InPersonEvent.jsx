import React, { useEffect, useState } from "react";
import VirtualCard from "../Components/VirtualCard";
import { useNavigate } from "react-router-dom";
import { findUser, logoutUser, fetchVirtualEvents, fetchIn_PersonEvents } from "../utils/utils";

function InPersonEvent() {
  const navigate = useNavigate();
  const [in_personEvents, setin_personEvents] = useState([]);

  useEffect(() => {
    fetchIn_PersonEvents().then((events) => {
      setin_personEvents(events);
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

      {/* Virtual Meeting Section */}
      <section className="text-center my-8 p-8">
        <h1
          className="text-7xl text-blue-600 font-bold font-serif "
          style={{ fontFamily: '"quick"' }}
        >
          In-Person Events
        </h1>
        <div className="flex">
          <p className="text-slate-500 lg:text-xl mt-4 lg:mt-6 text-center lg:text-left font-serif w-[70%]">
            Join us for our upcoming in-person meetings, where you will have the
            opportunity to connect with industry professionals and like-minded
            individuals. These gatherings are designed to foster collaboration
            and inspire innovation. You'll gain valuable insights into the
            latest trends and developments in the industry, while also exploring
            exciting opportunities for networking and partnership. Whether you
            are looking to enhance your skills, share knowledge, or simply
            engage with peers, our events offer a dynamic environment to
            exchange ideas and make meaningful connections. Don't miss out on
            the chance to be a part of these impactful meetings!
          </p>
          <div className=" w-[30%] ml-auto flex justify-end">
            <img
              className="h-72"
              src="https://media.istockphoto.com/id/1385509455/vector/business-communication-concept.jpg?s=612x612&w=0&k=20&c=BqAT-opyxl84x3IKO4JMi6E8YB8AJIPU_7q49c8FojY="
              alt="inpersonevent"
            />
          </div>
        </div>

        <div className="mt-[-5%]">
          <p className="text-2xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to- to-blue-950">
            WANT TO CREATE A IN-PERSON MEETING?
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
          {Array.isArray(in_personEvents) &&
            in_personEvents.map((item) => (
              <VirtualCard
                eventId={item._id}
                name={item.eventName}
                date={item.date}
                organizer={item.ownerId ? item.ownerId.username : null}
                venue={item.venue}
                posterImage={item.posterImage ? item.posterImage.url : null}
              />
            ))}
        </div>
      </section>
    </div>
  );
}

export default InPersonEvent;
