import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  findUser,
  logoutUser,
  fetchSingleEvent,
  checkUserIsRegisteredInEventOrNot,
} from "../utils/utils";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../Components/Footer";
import {
  faBars,
  faXmark,
  faUser,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import { AiFillHome, AiOutlineAppstore, AiFillContacts } from "react-icons/ai";

const footerMenuItems = [
  { href: "header", label: "Header", icon: AiFillHome },
  { href: "features", label: "Features", icon: AiOutlineAppstore },
  { href: "contact", label: "Contact", icon: AiFillContacts },
];
import ImageLoader from "../Components/ImageLoader1";

function EventPage() {
  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "about" },
    { label: "Contact", href: "contact" },
  ];

  const navigate = useNavigate();
  const { eventId } = useParams();

  const [event, setevent] = useState({});

  useEffect(() => {
    fetchSingleEvent(eventId).then((response) => {
      setevent(response);
    });
  }, []);

  const eventTags = [
    { label: "Event Name", value: event.eventName },
    {
      label: "Organized by",
      value: event.ownerId ? event.ownerId.username : null,
    },
    {
      label: "Date & Time",
      value: `${new Date(event.date).toLocaleDateString("en-GB")}, ${
        event.time
      }`,
    },
    { label: "Speaker", value: event.speaker },
    {
      label: "Paid Amount",
      value: event.payableAmount ? event.payableAmount : "Free",
    },
    { label: "Total Seats", value: event.headcount },
  ];

  const descriptionTags = [
    { label: "Platform", value: event.platform },
    { label: "Venue", value: event.city },
    { label: "Description", value: event.description },
    {
      label: "Remaining Seats",
      value: event.headcount - event.tillNowTotalRegistration,
    },
    {
      label: "Last Date of Registration",
      value: new Date(event.lastDateOfRegistration).toLocaleDateString("en-GB"),
    },
    { label: "Rules & Regulations", value: event.rules },
  ];

  const [hamburgerMenuClicked, setHamburgerMenuClicked] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [isClosingDropdown, setIsClosingDropdown] = useState(false);
  const [scrollDirection, setScrollDirection] = useState(null);

  const handleLogInClick = () => {
    navigate("/login");
  };

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
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const direction = scrollTop > 100 ? "down" : "up";
    if (scrollDirection !== direction) {
      setScrollDirection(direction);
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

  const handleCommentSubmit = () => {
    alert("Comment submitted!");
  };

  const handleReplyClick = () => {
    alert("Reply clicked!");
  };

  const [user, setUser] = useState(null);
  const [registered, setregistered] = useState(false);

  useEffect(() => {
    findUser().then((response) => {
      setUser(response.username.split(" ")[0]);
      if (response.username) {
        checkUserIsRegisteredInEventOrNot(eventId).then((result) => {
          setregistered(result);
        });
      }
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
      <div className="flex flex-col items-center py-10">
        <div className="w-full h-16">
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
                  item.label !== "Home" ? (
                    <Link
                      key={index}
                      to={item.href}
                      smooth={true}
                      duration={500}
                      className="hover:cursor-pointer hover:text-red-300 hover:font-bold"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <NavLink
                      key={index}
                      to={item.href}
                      className="hover:cursor-pointer hover:text-red-300 hover:font-bold"
                    >
                      {item.label}
                    </NavLink>
                  )
                )}
              </ul>
            </div>

            {/* User Section */}
            <div className="w-[50%] sm:w-[35%] md:w-[35%] lg:w-2/5 xl:w-[25%] 2xl:w-[20%] flex justify-end items-center space-x-4 pr-9">
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
              className={`flex-col flex justify-end mt-4 mr-2 text-white w-40 items-center h-auto ${
                isClosing ? "animate-slideOut" : "animate-slideIn"
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
              className={`absolute top-[4.5rem] left-[49%] 2xl:left-[87%] xl:left-[83%] lg:left-[75%] md:left-[71%] sm:left-[66%] flex-col flex text-white w-40 items-center h-[5.2rem] mr-[5%] sm:mr-[5%] md:mr-[3%] lg:mr-[5%] bg-opacity-[0.3] rounded-lg ${
                isClosingDropdown ? "animate-slideUp" : "animate-slideBelow"
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

        {/* Event Header with Image */}
        <div className="flex justify-between w-full max-w-4xl items-center">
          {event.posterImage ? (
            <img
              src={event.posterImage ? event.posterImage.url : null}
              alt={event.eventName}
              className="w-96 h-48 object-cover rounded-lg"
            />
          ) : (
            <ImageLoader />
          )}
          <div className="ml-8">
            {eventTags.map((item, index) => (
              <p key={index} className="text-lg font-medium">
                {item.label} : <span className="font-light">{item.value}</span>
              </p>
            ))}

            {registered ? (
              <button
                className="mt-6 bg-yellow-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-500"
              >
                Registered
              </button>
            ) : (
              <button
                className="mt-6 bg-yellow-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-500"
                onClick={() => navigate(`/registrationform/${eventId}`)}
              >
                Register Now
              </button>
            )}
          </div>
        </div>

        {/* Description Section */}
        <div className="w-full max-w-4xl mt-8">
          {descriptionTags.map((item, index) =>
            (event.eventType === "virtual" && item.label === "Venue") ||
            (event.eventType === "in_person" &&
              item.label === "Platform") ? null : (
              <p key={index} className="text-lg font-medium">
                {item.label} : <span className="font-light">{item.value}</span>
              </p>
            )
          )}
        </div>

        {/* Comment Section */}
        <div className="mt-12 w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Comment Section</h2>
          <textarea
            className="w-full p-4 rounded-lg border border-gray-300"
            rows="4"
            placeholder="Drop your doubts or comments"
          />

          {/* Submit and Reply Buttons */}
          <div className="mt-4 flex justify-end">
            <button
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={handleCommentSubmit}
            >
              Submit
            </button>
            {/* <button
              className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300"
              onClick={handleReplyClick}
            >
              Reply
            </button> */}
          </div>
        </div>
      </div>

      <div className="m-0 p-0" id="contact">
        <Footer menuItems1={footerMenuItems} />
      </div>
    </>
  );
}

export default EventPage;
