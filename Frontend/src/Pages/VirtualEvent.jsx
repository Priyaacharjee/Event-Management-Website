import React, { useEffect, useState } from "react";
import VirtualCard from "../Components/VirtualCard";
import { useNavigate } from "react-router-dom";
import { fetchVirtualEvents } from "../utils/utils";

// const virtualEvents = [
//   {
//     _id: "1",
//     name: "TCS Global Leadership Summit",
//     date: "24-09-2024",
//     organizer: "TCS",
//     platform: "Google meet",
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlEo5Tk4qtc8LYOiDmEq5VE1rGJzAd18p1lg&s",
//   },
//   {
//     _id: "2",
//     name: "Infosys Tech Vision 2024",
//     date: "15-10-2024",
//     organizer: "Infosys",
//     platform: "Zoom",
//     image:
//       "https://mma.prnewswire.com/media/633365/Infosys_Logo.jpg?p=facebook",
//   },
//   {
//     _id: "3",
//     name: "Wipro Innovate 2024",
//     date: "20-11-2024",
//     organizer: "Wipro",
//     platform: "Google meet",
//     image: "https://admeducation.com/wp-content/uploads/2024/05/WIPRO-Logo.jpg",
//   },
//   {
//     _id: "4",
//     name: "Accenture Women’s Leadership Forum",
//     date: "20-11-2024",
//     organizer: "Accenture",
//     platform: "Google Meet",
//     image: "https://www.nidv.eu/wp-content/uploads/2020/12/Accenture.png",
//   },
// ];

function VirtualEvent() {
  const navigate = useNavigate();
  const [virtualEvents, setvirtualEvents] = useState([]);

  useEffect(() => {
    fetchVirtualEvents().then((events) => {
      setvirtualEvents(events);
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
          Virtual Events
        </h1>
        <div className="flex">
          <p className="text-slate-500 lg:text-xl mt-4 lg:mt-6 text-center lg:text-left font-serif w-[69%]">
            Join us for our upcoming virtual events, where you can explore a
            wealth of exciting opportunities from the comfort of your home.
            Engage with industry leaders and like-minded professionals,
            participate in interactive discussions, and gain insights into the
            latest innovations and trends shaping the future. Whether you're
            looking to expand your network or deepen your knowledge, our virtual
            meetings offer a dynamic platform to connect and collaborate. Don't
            miss out on this chance to be part of a thriving online community!
          </p>
          <div className=" w-[30%] ml-auto flex justify-end">
            <img
              className="h-72"
              src="https://img.freepik.com/free-vector/flat-happy-people-celebrate-birthday-online-party-via-internet_88138-908.jpg?w=996&t=st=1729426892~exp=1729427492~hmac=2c95422e579b3eed41d8a1a45f1607770d86d96f634223b841a5e3b6370cd776"
              alt="virtualevent"
            />
          </div>
        </div>

        <div className="mt-[-5%]">
          <p className="text-2xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to- to-blue-950">
            WANT TO CREATE A VIRTUAL MEETING?
          </p>
          <button
            className="btn1 justify-center items-center p-4 rounded-md mt-4"
            onClick={() => navigate("/CreateForm")}
          >
            Create Meeting
          </button>
        </div>
        {/* bg-red-500 text-white py-3 px-6 mt-4 rounded-md text-lg */}
      </section>

      {/* Upcoming Events Section */}
      <section className="text-center mb-8">
        <h2 className="text-3xl font-serif font-semibold">
          Our upcoming events
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-8">
          {Array.isArray(virtualEvents) &&
            virtualEvents.map((item) => (
              <VirtualCard
                eventId={item._id}
                name={item.eventName}
                date={item.date}
                organizer={item.ownerId ? item.ownerId.username : null}
                platform={item.platform ? item.platform : null}
                posterImage={item.posterImage ? item.posterImage.url : null}
              />
            ))}
        </div>
      </section>
    </div>
  );
}

export default VirtualEvent;
