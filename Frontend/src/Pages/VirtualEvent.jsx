import React from 'react';
import VirtualCard from '../Components/VirtualCard';

const virtualEvents = [
  {
    _id: "1",
    date: "24-09-2024",
    organizer: "TCS",
    platform: "Kolkata",
    image: "https://images.pexels.com/photos/4240503/pexels-photo-4240503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: "2",
    date: "15-10-2024",
    organizer: "Infosys",
    platform: "Mumbai",
    image: "https://images.pexels.com/photos/4240503/pexels-photo-4240503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: "3",
    date: "20-11-2024",
    organizer: "Wipro",
    platform: "Bengaluru",
    image: "https://images.pexels.com/photos/6772801/pexels-photo-6772801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    _id: "4",
    date: "20-11-2024",
    organizer: "Deloitte",
    platform: "Kolkata",
    image: "https://images.pexels.com/photos/6772801/pexels-photo-6772801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

function VirtualEvent() {
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
          <button className="bg-red-500 text-white py-2 px-4 rounded-md">Log In</button>
        </nav>
      </header>

      {/* In-Person Meeting Section */}
      <section className="text-center my-8 p-8">
        <h1 className="text-4xl text-blue-600 font-bold font-serif">Virtual Events</h1>
        <p className="text-lg mt-2">Join us for an virtual meeting to discuss the latest updates, features, and improvements to our website.</p>
        <div className="mt-8">
          <p className="text-lg font-serif">WANT TO CREATE A VIRTUAL MEETING?</p>
          <button className="bg-red-500 text-white py-3 px-6 mt-4 rounded-md text-lg">Create Meeting</button>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="text-center mb-8">
        <h2 className="text-2xl font-semibold">Our upcoming events</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-8">
          {virtualEvents.map((item) => (
            <VirtualCard
              key={item._id}
              date={item.date}
              organizer={item.organizer}
              platform={item.platform}
              image={item.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default VirtualEvent;
