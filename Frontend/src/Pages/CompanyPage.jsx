import React, { useState, useEffect } from "react";
import Navabar from "../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faEdit,
  faUser,
  faTimes,
  faEllipsisV,
  faCalendarAlt,
  faClock,
  faMapMarkerAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const headerMenuItems = [
  { label: "Home", to: "/" },
  // { label: 'Features', href: 'features' }, // (for scrolling elements with id in same page)
];

const events = [
  {
    name: "Tech Expo 2024",
    date: "Oct 10, 2024",
    time: "10:00 AM - 4:00 PM",
    type: "In-person",
    transparency: "public",
    imageUrl:
      "https://img.freepik.com/free-vector/gradient-car-rental-design-template_23-2149264700.jpg",
    createdDate: "Oct 1, 2024",
    slotConfirmedDate: "Oct 2, 2024",
  },
  {
    name: "Robotics 2024",
    date: "Nov 10, 2024",
    time: "10:00 AM - 4:00 PM",
    type: "Hybrid",
    transparency: "public",
    imageUrl:
      "https://img.freepik.com/free-vector/artificial-intelligence-concept-facebook-post_23-2150394426.jpg",
    createdDate: "Oct 5, 2024",
    slotConfirmedDate: "Oct 6, 2024",
  },
  {
    name: "Virtual Product Launch",
    date: "Dec 15, 2024",
    time: "2:00 PM - 3:30 PM",
    type: "Virtual",
    transparency: "private",
    imageUrl:
      "https://img.freepik.com/free-vector/gradient-texture-technology-webinar_23-2149094510.jpg",
    createdDate: "Oct 5, 2024",
    slotConfirmedDate: "Oct 10, 2024",
  },
  {
    name: "Photography Workshop",
    date: "April 15, 2025",
    time: "5:00 PM - 6:00 PM",
    type: "Hybrid",
    transparency: "private",
    imageUrl:
      "https://img.freepik.com/free-vector/webinar-template-photographer-career-hobby_23-2150302583.jpg",
    createdDate: "April 5, 2024",
    slotConfirmedDate: null,
  },
];

const CompanyPage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [menuVisible, setMenuVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [user, setUser] = useState({
    image:
      localStorage.getItem("userImage") || "https://via.placeholder.com/150",
    username: "Shreya",
    email: "shreya@example.com",
    phone: "9748054821",
  });

  const handleCreateEventClick = () => {
    navigate("/createform");
  };

  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
      setUser((prevUser) => {
        const updatedUser = { ...prevUser, image: imageURL };
        localStorage.setItem("userImage", imageURL);
        return updatedUser;
      });
    }
  };

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  useEffect(() => {
    if (menuVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuVisible]);

  const checkSlotConfirmation = (eventCreatedDate, slotConfirmedDate) => {
    const createdDate = new Date(eventCreatedDate);
    const confirmedDate = new Date(slotConfirmedDate);
    const timeDiff = confirmedDate - createdDate;
    const hoursDiff = timeDiff / (1000 * 60 * 60);
    return hoursDiff <= 24;
  };

  const isSlotConfirmed = selectedEvent
    ? checkSlotConfirmation(
        selectedEvent.createdDate,
        selectedEvent.slotConfirmedDate
      )
    : false;

  const checkEventCompletion = (eventDate, slotConfirmedDate, createdDate) => {
    const currentDate = new Date();
    const eventDateObj = new Date(eventDate);

    if (!slotConfirmedDate) {
      return false;
    }

    const isSlotConfirmed = checkSlotConfirmation(
      createdDate,
      slotConfirmedDate
    );

    return isSlotConfirmed && currentDate > eventDateObj;
  };

  return (
    <>
      <Navabar menuItems={headerMenuItems} />

      <div className="flex">
        {/* COMPANY DETAILS */}
        <div className="fixed top-[4.5rem] left-4 z-50  lg:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 h-8 w-8 bg-indigo-200 flex justify-center items-center rounded-full text-red-500  "
          >
            <FontAwesomeIcon
              icon={menuVisible ? faTimes : faEllipsisV}
              style={{ fontSize: "1.3rem" }}
              className="font-bold"
            />
          </button>
        </div>

        <div
          className={`fixed lg:z-10 z-40 top-16 left-0 bg-[#081647] text-white rounded-tr-2xl rounded-br-2xl shadow-2xl p-4 flex flex-col items-center transition-transform duration-300 transform ${
            menuVisible ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
          style={{ height: "calc(100vh - 60px)" }}
        >
          <img
            src={selectedImage || user.image}
            alt="User Profile"
            className="rounded-full w-24 bg-gray-900 text-sm h-24 mb-4 shadow-lg border-[.4rem] border-indigo-400 sm:w-32 sm:h-32"
          />

          <label className="absolute top-[5.5rem] sm:top-[7.5rem] w-8 h-8 cursor-pointer flex justify-center items-center  bg-gray-600 rounded-full p-2">
            <FontAwesomeIcon icon={faEdit} className="text-white" />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>

          <h2 className="text-md font-bold sm:text-lg">{user.username}</h2>
          <div className="w-32 h-1 border-b-4 border-yellow-400 m-2 rounded-2xl md:mt-4 mb-12"></div>

          <div className="flex flex-col text-left space-y-4">
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-indigo-300" />
              <p className="text-xs sm:text-sm">{user.email}</p>
            </div>

            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhone} className="text-indigo-300" />
              <p className="text-xs sm:text-sm">{user.phone}</p>
            </div>
          </div>

          <div className="mt-auto w-[100%] flex flex-col text-xs items-center">
            <div className="w-[95%] border-b-2 border-gray-200 m-2 rounded-2xl mt-10 mb-4"></div>
            &copy;Eventek2024.
          </div>
        </div>

        {/* EVENT DETAILS */}
        <div
          className={` ${
            menuVisible ? "blur-sm lg:blur-none" : ""
          } mt-8 mb-8 w-full  lg:w-5/6 ml-8 lg:ml-[14rem] mr-8 lgoverflow-y-auto space-y-4`}
          style={{ height: "calc(100vh - 60px)" }}
        >
          <div className="mt-4 flex flex-row justify-between items-center">
            <h2
              className="text-gradient2 text-3xl xds:text-3xl sm:text-5xl font-bold w-[60%]  "
              style={{ fontFamily: '"quick"' }}
            >
              Events &nbsp;Ground
            </h2>
            <button
              onClick={handleCreateEventClick}
              className=" text-sm xds:text-lg  sm:text-xl h-6 xds:h-8 sm:h-12  px-1 xds:px-2 sm:px-4 bg-indigo-600 hover:bg-indigo-500 text-white flex justify-center items-center font-bold rounded-md"
            >
              <FontAwesomeIcon
                icon={faPlus}
                className="text-white mr-2 font-bold"
              />
              Create Event
            </button>
          </div>

          <hr className="border-0 h-[2px] bg-gray-500 my-6"></hr>
          {events.map((event, index) => (
            <div
              key={index}
              className="border-2 border-black mt-4 lg:ml-32 w-[100%] lg:w-[80%] h-auto bg-gray-200 shadow-lg rounded-lg p-4 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            >
              {/* Event Image */}
              <img
                src={event.imageUrl}
                alt={event.name}
                className="w-full md:w-60 h-auto rounded-md"
                style={{ aspectRatio: "3 / 2" }}
              />

              {/* Event Info */}
              <div className="flex flex-col justify-center items-center w-full">
                <h3 className="text-lg text-gradient1 xds:text-2xl mb-4 text-indigo-800 font-bold font-serif">
                  {event.name}
                </h3>
                <div className="flex justify-center items-center space-x-2 xds:space-x-8 sm:space-x-12 md:space-x-6 lg:space-x-8">
                  {/* Event Date */}
                  <div className="flex items-center text-xs xds:text-md sm:text-lg md:text-sm lg:text-sm font-bold text-white">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="mr-2 text-indigo-800"
                    />
                    <span>{event.date}</span>
                  </div>

                  {/* Event Time */}
                  <div className="flex items-center text-xs xds:text-md sm:text-lg md:text-xs lg:text-sm font-bold text-white">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="mr-2 text-indigo-800"
                    />
                    <span>{event.time}</span>
                  </div>
                </div>
                <div className="mt-3 flex justify-center items-center space-x-2 xds:space-x-8 sm:space-x-12 md:space-x-6 lg:space-x-8">
                  {/* Event Type */}
                  <div className="flex items-center text-xs xds:text-md sm:text-lg md:text-xs lg:text-sm font-bold text-white">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="mr-2 text-indigo-800"
                    />
                    <span>{event.type}</span>
                  </div>

                  {/* Event transparency Type */}
                  <div className="flex items-center text-xs xds:text-md sm:text-lg md:text-xs lg:text-sm font-bold text-white">
                    <FontAwesomeIcon
                      icon={faUser}
                      className="mr-2 text-indigo-800"
                    />
                    <span>{event.transparency}</span>
                  </div>
                </div>
                <button
                  className="btn1 mt-4 h-12 px-4 bg-indigo-600 text-white font-bold rounded-md"
                  onClick={() => openModal(event)}
                >
                  Track Event
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {isModalVisible && selectedEvent && (
          <div
            id="modal-overlay"
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            onClick={handleOutsideClick}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] sm:w-[50%]">
              <h2
                className="text-gradient1 text-4xl font-bold text-center mb-6"
                style={{ fontFamily: '"quick"' }}
              >
                Event Tracker
              </h2>
              <div className="relative">
                <div className="relative flex flex-col">
                  {/* Event Created */}
                  <div className="flex items-center">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        selectedEvent.createdDate
                          ? "bg-blue-600"
                          : "bg-gray-400"
                      } mr-2`}
                    ></div>
                    <span className="text-sm xds:text-lg font-bold">
                      Event Creation
                    </span>
                  </div>
                  <p className="text-green-500 text-sm ml-6">
                    Event created successfully
                  </p>
                  <div className="flex items-center ml-6">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="mr-2 text-gray-500"
                    />
                    <span className="text-gray-500 text-sm">
                      {selectedEvent.createdDate}
                    </span>
                  </div>
                  <div
                    className={`w-1 ${
                      selectedEvent.slotConfirmedDate
                        ? isSlotConfirmed || selectedEvent.completed
                          ? "bg-blue-600"
                          : "bg-gray-400"
                        : "bg-gray-400"
                    } h-16`}
                    style={{
                      marginLeft: "0.35rem",
                      marginRight: "1.5rem",
                      marginTop: "-2.8rem",
                    }}
                  ></div>

                  {/* Slot Confirmation */}
                  <div className="flex items-center">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        selectedEvent.slotConfirmedDate
                          ? isSlotConfirmed
                            ? "bg-blue-600"
                            : "bg-gray-400"
                          : "bg-gray-400"
                      } mr-2`}
                    ></div>
                    <span className="text-xs xds:text-lg font-bold">
                      Slot Confirmation (Within 24 hours)
                    </span>
                  </div>
                  {!selectedEvent.slotConfirmedDate ? (
                    <p className="text-yellow-500 text-sm ml-6">
                      Slot not yet decided
                    </p>
                  ) : !isSlotConfirmed && selectedEvent.createdDate ? (
                    <p className="text-red-500 text-sm ml-6">
                      Sorry! We failed to schedule a slot for you, and further
                      processing is not possible.
                    </p>
                  ) : (
                    <p className="text-green-500 text-sm ml-6">
                      Your slot has been successfully scheduled!
                    </p>
                  )}
                  <div className="flex items-center ml-6">
                    <FontAwesomeIcon
                      icon={faCalendarAlt}
                      className="mr-2 text-gray-500"
                    />
                    <span className="text-gray-500 text-sm">
                      {selectedEvent.slotConfirmedDate || "N/A"}
                    </span>
                  </div>
                  <div
                    className={`w-1 ${
                      checkEventCompletion(
                        selectedEvent.date,
                        selectedEvent.slotConfirmedDate,
                        selectedEvent.createdDate
                      )
                        ? "bg-blue-600"
                        : "bg-gray-400"
                    } h-16`}
                    style={{
                      marginLeft: "0.35rem",
                      marginRight: "1.5rem",
                      marginTop: "-2.8rem",
                    }}
                  ></div>

                  {/* Event Done */}
                  <div className="flex items-center">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        checkEventCompletion(
                          selectedEvent.date,
                          selectedEvent.slotConfirmedDate,
                          selectedEvent.createdDate
                        )
                          ? "bg-blue-600"
                          : "bg-gray-400"
                      } mr-2`}
                    ></div>
                    <span className="text-xs xds:text-lg font-bold">
                      Event Completion
                    </span>
                  </div>
                  {checkEventCompletion(
                    selectedEvent.date,
                    selectedEvent.slotConfirmedDate,
                    selectedEvent.createdDate
                  ) ? (
                    <p className="text-green-500 text-sm ml-6">
                      Event completed successfully
                    </p>
                  ) : (
                    <p className="text-red-500 text-sm ml-6">
                      Event is not yet complete
                    </p>
                  )}
                </div>
              </div>

              <button
                className="mt-8 px-4 py-2 bg-red-600 text-white font-bold rounded-md w-full"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CompanyPage;
