import React from 'react';
import VirtualCard from '../Components/VirtualCard';
import { useNavigate } from 'react-router-dom';
import CreateForm from './CreateForm';


const inpersonEvents = [
    {
        _id: "1",
        name:"TCS Global Leadership Summit",
        date: "24-09-2024",
        organizer: "TCS",
        platform: "Kolkata",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlEo5Tk4qtc8LYOiDmEq5VE1rGJzAd18p1lg&s",
      },
      {
        _id: "2",
        name:"Infosys Tech Vision 2024",
        date: "15-10-2024",
        organizer: "Infosys",
        platform: "Mumbai",
        image: "https://mma.prnewswire.com/media/633365/Infosys_Logo.jpg?p=facebook",
      },
      {
        _id: "3",
        name:"Wipro Innovate 2024",
        date: "19-11-2024",
        organizer: "Wipro",
        platform: "Bengaluru",
        image: "https://admeducation.com/wp-content/uploads/2024/05/WIPRO-Logo.jpg",
      },
      {
        _id: "4",
        name:"Accenture Women’s Leadership Forum",
        date: "20-11-2024",
        organizer: "Accenture",
        platform: "Kolkata",
        image: "https://www.nidv.eu/wp-content/uploads/2020/12/Accenture.png",
      },
];

function InPersonEvent() {
  const navigate = useNavigate();

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
          <button className="bg-blue-700 text-white py-2 px-4 rounded-md" onClick={() => navigate("/login")}>Log In</button>
        </nav>
      </header>

      {/* Virtual Meeting Section */}
      <section className="text-center my-8 p-8">
        <h1 className="text-7xl text-blue-600 font-bold font-serif " style={{ fontFamily: '"quick"' }}>In-Person Events</h1>
        <div className='flex'>
          <p className="text-slate-500 lg:text-xl mt-4 lg:mt-6 text-center lg:text-left font-serif w-[70%]">Join us for our upcoming in-person meetings, where you will have the opportunity to connect with industry professionals and like-minded individuals. These gatherings are designed to foster collaboration and inspire innovation. You'll gain valuable insights into the latest trends and developments in the industry, while also exploring exciting opportunities for networking and partnership. Whether you are looking to enhance your skills, share knowledge, or simply engage with peers, our events offer a dynamic environment to exchange ideas and make meaningful connections. Don't miss out on the chance to be a part of these impactful meetings!</p>
          <div className=" w-[30%] ml-auto flex justify-end">
            <img className="h-72" src="https://media.istockphoto.com/id/1385509455/vector/business-communication-concept.jpg?s=612x612&w=0&k=20&c=BqAT-opyxl84x3IKO4JMi6E8YB8AJIPU_7q49c8FojY=" alt="inpersonevent" />
          </div>
        </div>

        <div className="mt-[-5%]">
          <p className="text-2xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to- to-blue-950">
            WANT TO CREATE A IN-PERSON MEETING?
          </p>
          <button className="btn1 justify-center items-center p-4 rounded-md mt-4" onClick={() => navigate("/CreateForm")}>Create Meeting</button>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="text-center mb-8">
        <h2 className="text-3xl font-serif font-semibold">Our upcoming events</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-8">
          {inpersonEvents.map((item) => (
            <VirtualCard
              key={item._id}
              name={item.name}
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

export default InPersonEvent;
