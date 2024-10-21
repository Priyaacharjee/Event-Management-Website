import React, { useEffect, useState } from 'react';
import VirtualCard from '../Components/VirtualCard';
import { NavLink, useNavigate } from 'react-router-dom';
import { fetchVirtualEvents } from '../utils/utils';
import { findUser, logoutUser } from "../utils/utils";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from '../Components/Footer';
import {
  faBars,
  faXmark,
  faMagnifyingGlass,
  faUser,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  AiFillHome,
  AiOutlineAppstore,
  AiFillContacts,
} from "react-icons/ai";


const footerMenuItems = [
  { href: "header", label: "Header", icon: AiFillHome },
  { href: "features", label: "Features", icon: AiOutlineAppstore },
  { href: "contact", label: "Contact", icon: AiFillContacts },
];


const virtualEvents = [
  {
    _id: "1",
    name: "TCS Global Leadership Summit",
    date: "24-09-2024",
    organizer: "TCS",
    platform: "Google meet",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlEo5Tk4qtc8LYOiDmEq5VE1rGJzAd18p1lg&s",
  },
  {
    _id: "2",
    name: "Infosys Tech Vision 2024",
    date: "15-10-2024",
    organizer: "Infosys",
    platform: "Zoom",
    image: "https://mma.prnewswire.com/media/633365/Infosys_Logo.jpg?p=facebook",
  },
  {
    _id: "3",
    name: "Wipro Innovate 2024",
    date: "20-11-2024",
    organizer: "Wipro",
    platform: "Google meet",
    image: "https://admeducation.com/wp-content/uploads/2024/05/WIPRO-Logo.jpg",
  },
  {
    _id: "4",
    name: "Accenture Women’s Leadership Forum",
    date: "20-11-2024",
    organizer: "Accenture",
    platform: "Google Meet",
    image: "https://www.nidv.eu/wp-content/uploads/2020/12/Accenture.png",
  },
];


function VirtualEvent() {

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "about" },
    { label: "Upcoming  Events", href: "upcoming" },
    { label: "Contact", href: "contact" },
  ];

  const navigate = useNavigate();
  const [virtualEvents, setvirtualEvents] = useState([]);

  useEffect(() => {
    fetchVirtualEvents().then((events) => {
      setvirtualEvents(events);
    });
  }, []);

  const [hamburgerMenuClicked, setHamburgerMenuClicked] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [isClosingDropdown, setIsClosingDropdown] = useState(false);

  //const [searchBarClicked, setSearchBarClicked] = useState(false);
  //const [isSearchDropdown, setIsSearchDropdown] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);


  const handleLogInClick = () => {
    navigate("/login");
  };

  // const searchClick = () => {
  //   if (searchBarClicked) {
  //     setIsSearchDropdown(true);
  //     setTimeout(() => {
  //       setSearchBarClicked(false);
  //       setIsSearchDropdown(false);
  //     }, 900);
  //   } else {
  //     setSearchBarClicked(true);
  //   }
  //   setDropDownOpen(false);
  //   setHamburgerMenuClicked(false);
  // };

  const hambergerClick = () => {
    if (hamburgerMenuClicked) {
      setIsClosing(true);
      setTimeout(() => {
        setHamburgerMenuClicked(false);
        setIsClosing(false);
      }, 900);
    } else {
      setHamburgerMenuClicked(true);
    }
    setDropDownOpen(false);
    //setSearchBarClicked(false);
  };

  const dropDown = () => {
    if (dropDownOpen) {
      setIsClosingDropdown(true);
      setTimeout(() => {
        setDropDownOpen(false);
        setIsClosingDropdown(false);
      }, 900);
    } else {
      setDropDownOpen(true);
    }
    setHamburgerMenuClicked(false);
    //setSearchBarClicked(false);
  };

  // function handleEnter(e) {
  //   if (e.keyCode == 13) {
  //     alert("search clicked!");
  //   }
  // }

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const direction = scrollTop > 100 ? "down" : "up";
    if (scrollDirection !== direction) {
      setScrollDirection(direction);
      if (direction === "down") {
        // setIsSearchDropdown(true);
        setTimeout(() => {
          // setSearchBarClicked(false);
          //setIsSearchDropdown(false);
        }, 900);
      }
    }
  };

  const handelLogout = () => {
    logoutUser().then((response) => {
      if (response !== "Logout successfully") {
        alert(response);
      }
      findUser().then((response) => {
        response ? setUser(response.username.split(" ")[0]) : setUser(null);
      });
    });
  };

  const [user, setUser] = useState(null);

  useEffect(() => {
    findUser().then((response) => {
      setUser(response.username.split(" ")[0]);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection]);

  return (
    <>
      <div className="App">
        <div className="w-full h-16">
          {/* ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------  NAVBAR */}
          <nav
            id="header"
            className="h-16 flex items-center px-4 justify-between w-full text-[16px] bg-black text-white fixed top-0 z-50"
          >
            {/* Logo */}
            <div
              className="text-gradient2 font-serif text-5xl w-[50%] sm:w-[20%] md:w-[20%] lg:w-[20%] xl:w-[20%] 2xl:w-[20%] lg:pl-5 xl:pl-8"
              style={{ fontFamily: '"quick"' }}
            >
              Eventek
            </div>

            {/* Navbar Menu */}
            <div className="hidden md:flex md:w-3/5 lg:w-[45%] xl:w-[40%] 2xl:w-[35%] items-center">
              <ul className="w-full flex justify-around text-center sm:space-x-2 md:space-x-4 lg:space-x-8">
                {menuItems.map((item, index) =>
                  item.label !== 'Home' ? (
                    <Link
                      key={index}
                      to={item.href}
                      smooth={true}
                      duration={500}
                      className="hover:cursor-pointer hover:text-red-300 hover:font-bold"
                    >
                      {item.label}
                    </Link>
                  ) : <NavLink
                  key={index}
                  to={item.href}
                  className="hover:cursor-pointer hover:text-red-300 hover:font-bold"
                >
                  {item.label}
                </NavLink>
                )}

              </ul>
            </div>

            {/* User Section */}
            <div className="w-[50%] sm:w-[35%] md:w-[35%] lg:w-2/5 xl:w-[25%] 2xl:w-[20%] flex justify-end items-center space-x-4">

              {/* USER SECTION IN NAVBAR */}
              {user ? (
                <>
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-lg cursor-pointer"
                  />
                  <span className="text-white font-bold hover:text-blue-100 hover:underline">
                    {user}
                  </span>
                  {dropDownOpen ? (
                    <FontAwesomeIcon
                      icon={faCaretUp}
                      className="cursor-pointer"
                      style={{ color: "#ffffff" }}
                      onClick={dropDown}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      style={{ color: "#ffffff" }}
                      className="cursor-pointer"
                      onClick={dropDown}
                    />
                  )}
                </>
              ) : (
                <>
                  {/* LOGIN Button */}
                  <div className=" flex mr-6 items-center justify-center px-[3px] sm:px-8 pr-16 md:pr-16 lg:pr-24 xl:px-2 2xl:px-2">
                    <div className=" w-full flex justify-center items-center">
                      <button
                        onClick={handleLogInClick}
                        className="flex btn1 justify-center items-center h-12 sm:h-10 md:h-12 lg:h-12 xl:h-12 w-full px-2 sm:px-5 md:px-6 lg:px-8 xl:px-10 rounded-lg font-bold text-sm sm:text-base md:text-lg lg:text-xl "
                      >
                        Log In
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Hamburger Icon */}
              <div className="block md:hidden fixed ">
                <FontAwesomeIcon
                  icon={hamburgerMenuClicked ? faXmark : faBars}
                  style={{ color: "#ffffff" }}
                  className={`cursor-pointer h-6 w-7 animate-none`}
                  onClick={hambergerClick}
                />
              </div>
            </div>
          </nav>

          {/* Hamburger Menu */}
          {(hamburgerMenuClicked || isClosing) && (
            <div
              className={`flex-col flex justify-end mt-4 mr-2 text-white w-40 items-center h-auto ${isClosing ? "animate-slideOut" : "animate-slideIn"
                } fixed top-14 right-5 bg-opacity-[0.3] rounded-lg`}
              style={{ backgroundColor: "rgba(0, 0, 255, 0.6)" }}
            >
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="w-full text-center pt-2 pb-2 border-b-[0.5px] border-white hover:cursor-pointer hover:text-red-300 hover:font-bold"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}

          {/* User Dropdown */}
          {(dropDownOpen || isClosingDropdown) && user && (
            <div
              className={`absolute top-[4.5rem] left-[49%] 2xl:left-[87%] xl:left-[83%] lg:left-[75%] md:left-[71%] sm:left-[66%] flex-col flex text-white w-40 items-center h-[5.2rem] mr-[5%] sm:mr-[5%] md:mr-[3%] lg:mr-[5%] bg-opacity-[0.3] rounded-lg ${isClosingDropdown ? "animate-slideUp" : "animate-slideBelow"
                }`}
              style={{ backgroundColor: "rgba(0, 0, 255, 0.6)" }}
            >
              <div className="w-full text-center pt-2 pb-2 hover:cursor-pointer hover:text-red-300 hover:underline hover:font-bold">
                My Account
              </div>
              <div
                onClick={handelLogout}
                className="w-full text-center pt-2 pb-2 hover:cursor-pointer hover:text-red-300 hover:underline hover:font-bold"
              >
                Log Out
              </div>
            </div>
          )}
        </div>

        {/* Virtual Meeting Section */}
        <section className="text-center my-8 p-8">
          <h1 className="text-7xl text-blue-600 font-bold font-serif " style={{ fontFamily: '"quick"' }}>Virtual Events</h1>
          <div className='flex'>
            <p className="text-slate-500 lg:text-xl mt-4 lg:mt-6 text-center lg:text-left font-serif w-[69%]">Join our virtual events to connect with industry experts, explore exciting opportunities, and expand your network—all from the comfort of home. Engage in insightful discussions, discover the latest trends, and collaborate with professionals in a thriving online community! Don’t miss out on these dynamic, interactive experiences!</p>
            <div className=" w-[30%] ml-auto flex justify-end">
              <img className="h-72" src="https://img.freepik.com/free-vector/flat-happy-people-celebrate-birthday-online-party-via-internet_88138-908.jpg?w=996&t=st=1729426892~exp=1729427492~hmac=2c95422e579b3eed41d8a1a45f1607770d86d96f634223b841a5e3b6370cd776" alt="virtualevent" />
            </div>
          </div>

          <div className="mt-[-5%]">
            <p className="text-2xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to- to-blue-950">
              WANT TO CREATE A VIRTUAL MEETING?
            </p>
            <button className="btn1 justify-center items-center p-4 rounded-md mt-4" onClick={() => navigate("/CreateForm")}>Create Meeting</button>
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section className="text-center mb-8" id="upcoming">
          <h2 className="text-3xl font-serif font-semibold">Our upcoming events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mt-8">
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

      <div className='m-0 p-0' id="contact">
        <Footer menuItems1={footerMenuItems} />
      </div>
    </>
  );
}

export default VirtualEvent;
