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
import Navbar from "../Components/Navbar";
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

  const headerMenuItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/" },
    { label: "Contact", href: "contact" },
  ];

  return (
    <>
      <div className="flex flex-col items-center py-10">
         {/* Header Section */}
            
         <Navbar menuItems={headerMenuItems}/>  

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
