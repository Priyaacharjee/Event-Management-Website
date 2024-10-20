import React from 'react';
import VirtualCard from '../Components/VirtualCard';
import { useNavigate } from 'react-router-dom';
import CreateForm from './CreateForm';


const hybridEvents = [
    {
        _id: "1",
        name: "TCS Global Leadership Summit",
        date: "24-09-2024",
        organizer: "TCS",
        platform: "Kolkata/Google meet",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlEo5Tk4qtc8LYOiDmEq5VE1rGJzAd18p1lg&s",
    },
    {
        _id: "2",
        name: "Infosys Tech Vision 2024",
        date: "15-10-2024",
        organizer: "Infosys",
        platform: "Mumbai/Zoom",
        image: "https://mma.prnewswire.com/media/633365/Infosys_Logo.jpg?p=facebook",
    },
    {
        _id: "3",
        name: "Wipro Innovate 2024",
        date: "20-11-2024",
        organizer: "Wipro",
        platform: "Bengaluru/Google meet",
        image: "https://admeducation.com/wp-content/uploads/2024/05/WIPRO-Logo.jpg",
    },
    {
        _id: "4",
        name: "Accenture Women’s Leadership Forum",
        date: "20-11-2024",
        organizer: "Accenture",
        platform: "Kolkata/Google Meet",
        image: "https://www.nidv.eu/wp-content/uploads/2020/12/Accenture.png",
    },
];

function HybridEvent() {
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

            {/* Hybrid Meeting Section */}
            <section className="text-center my-8 p-8">
                <h1 className="text-7xl text-blue-600 font-bold font-serif " style={{ fontFamily: '"quick"' }}>Hybrid Events</h1>
                <div className='flex w-full'>
                    <p className="text-slate-500 lg:text-xl mt-4 lg:mt-6 text-center lg:text-left font-serif w-[88%]">Join us for our hybrid events that combine the best of in-person and virtual experiences. Engage with industry experts and fellow participants from anywhere, whether you're at the venue or joining remotely. Enjoy interactive sessions, valuable discussions, and ample networking opportunities that connect you to insights and innovations across the globe. Embrace the flexibility of hybrid events and be part of the future of gatherings!</p>
                    <div className=" w-[40%] ml-auto flex justify-end">
                        <img className="h-72 w-96" src="https://media.istockphoto.com/id/1306175866/vector/video-conference-theme.jpg?s=612x612&w=0&k=20&c=vtlB4uJdl3Cut5bx9BZRl5bJsBhhxJ9ivTUPgtB49NY=" alt="hybridevent" />
                    </div>
                </div>

                <div className="mt-[-5%]">
                    <p className="text-2xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to- to-blue-950">
                        WANT TO CREATE A HYBRID MEETING?
                    </p>
                    <button className="btn1 justify-center items-center p-4 rounded-md mt-4" onClick={() => navigate("/CreateForm")}>Create Meeting</button>
                </div>
            </section>

            {/* Upcoming Events Section */}
            <section className="text-center mb-8">
                <h2 className="text-3xl font-serif font-semibold">Our upcoming events</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-8">
                    {hybridEvents.map((item) => (
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

export default HybridEvent;
