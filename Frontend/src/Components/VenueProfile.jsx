import React, { useState, useEffect } from "react";
import { findVenue } from "../utils/utils";

function VenueProfile() {
  const [activeMenu, setActiveMenu] = useState("BasicDetails");

  const renderComponent = () => {
    switch (activeMenu) {
      case "BasicDetails":
        return <div>Basic Details</div>;
      case "Gallery":
        return <div>Gallery</div>;
      case "Booking Requests":
        return <div>Booking Requests</div>;
      case "Upcoming Bookings":
        return (
          <>
            <div className="upcoming-bookings mr-5">
              <div className="bookings-container grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {bookings.map((booking) => (
                  <div key={booking.id} className="booking-card">
                    <BookingCard
                      eventName={booking.eventName}
                      eventDate={booking.eventDate}
                      eventTime={booking.eventTime}
                      eventImage={booking.eventImage}
                      headcount={booking.headcount}
                      additionalInfo={booking.additionalInfo}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        );
      case "Past Bookings":
        return (
          <>
            <div className="upcoming-bookings mr-5">
              <div className="bookings-container grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {bookings.map((booking) => (
                  <div key={booking.id} className="booking-card">
                    <BookingCard
                      eventName={booking.eventName}
                      eventDate={booking.eventDate}
                      eventTime={booking.eventTime}
                      eventImage={booking.eventImage}
                      headcount={booking.headcount}
                      additionalInfo={booking.additionalInfo}
                    />
                  </div>
                ))}
              </div>
            </div>
          </>
        );
    }
  };

  const [venue, setvenue] = useState(null);

  useEffect(() => {
    findVenue().then((response) => {
      setvenue(response);
    });
  }, []);

  return (
    <>
      <div className="h-full w-full flex ">
        <div className="border-r-[1px] border-gray-500 w-2/6 mt-3 pt-5 mb-3">
          <div className="h-52 w-52 m-auto">
            <img
              className="h-full w-full"
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            ></img>
          </div>
          <div className="pt-5 flex-col text-center">
            <div className="font-bold text-2xl">Name</div>
            <div className="text-sm">City</div>
          </div>
          <div className="flex pt-2 gap-2 justify-center">
            <div>count</div>
            <div className="ml-2 flex text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <svg
                    key={index}
                    className="h-5 w-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <polygon points="10 15.27 16.18 19 14.54 12.81 19 8.63 12.81 8.63 10 2.5 7.19 8.63 1 8.63 5.46 12.81 3.82 19" />
                  </svg>
                ))}
            </div>
          </div>
          <div className="flex h-10 mt-3 pl-5">
            <div>Completed</div>
            <div className="ml-5 mr-5 mt-[2%] flex w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full"
                style={{ width: `${venue ? venue.completePercentage : 0}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className=" w-4/6">
          <div className="flex gap-5 cursor-pointer ml-5 mt-6">
            {/* Basic Details */}
            <div
              className={`cursor-pointer relative font-bold font-serif text-lg ${
                activeMenu === "BasicDetails"
                  ? "text-blue-700"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveMenu("BasicDetails")}
            >
              Basic Details
              {activeMenu === "BasicDetails" && (
                <span
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-600 
                       transition-all duration-300"
                ></span>
              )}
            </div>
            {/* Gallery */}
            <div
              className={`cursor-pointer relative font-bold font-serif text-lg ${
                activeMenu === "Gallery" ? "text-blue-700" : "text-gray-600"
              }`}
              onClick={() => setActiveMenu("Gallery")}
            >
              Gallery
              {activeMenu === "Gallery" && (
                <span
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-600 
                       transition-all duration-300"
                ></span>
              )}
            </div>
            {/* Booking Requests */}
            <div
              className={`cursor-pointer relative font-bold font-serif text-lg ${
                activeMenu === "Booking Requests"
                  ? "text-blue-700"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveMenu("Booking Requests")}
            >
              Booking Requests
              {activeMenu === "Booking Requests" && (
                <span
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-600 
                       transition-all duration-300"
                ></span>
              )}
            </div>
            {/* Upcoming Bookings */}
            <div
              className={`cursor-pointer relative font-bold font-serif text-lg ${
                activeMenu === "Upcoming Bookings"
                  ? "text-blue-700"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveMenu("Upcoming Bookings")}
            >
              Upcoming Bookings
              {activeMenu === "Upcoming Bookings" && (
                <span
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-600 
                       transition-all duration-300"
                ></span>
              )}
            </div>
            {/* Past Bookings */}
            <div
              className={`cursor-pointer relative font-bold font-serif text-lg ${
                activeMenu === "Past Bookings"
                  ? "text-blue-700"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveMenu("Past Bookings")}
            >
              Past Bookings
              {activeMenu === "Past Bookings" && (
                <span
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-600 
                       transition-all duration-300"
                ></span>
              )}
            </div>
          </div>
          <div className="pl-10 pt-10">{renderComponent()}</div>
        </div>
      </div>
    </>
  );
}

export default VenueProfile;

const bookings = [
  {
    id: 1,
    eventName: "Tech Conference",
    eventDate: "20/12/24",
    eventTime: "10:00 AM",
    eventImage:
      "https://images.pexels.com/photos/1709003/pexels-photo-1709003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headcount: "200",
    additionalInfo: "Cognizant",
  },
  {
    id: 2,
    eventName: "Health Summit",
    eventDate: "22/12/24",
    eventTime: "2:00 PM",
    eventImage:
      "https://images.pexels.com/photos/935949/pexels-photo-935949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headcount: "500",
    additionalInfo: "Siemens",
  },
  {
    id: 3,
    eventName: "Art Expo",
    eventDate: "24/12/24",
    eventTime: "5:00 PM",
    eventImage:
      "https://images.pexels.com/photos/17669053/pexels-photo-17669053/free-photo-of-decorative-skulls-in-display.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headcount: "150",
    additionalInfo: "Accenture",
  },
];

const BookingCard = ({
  eventName,
  eventDate,
  eventTime,
  eventImage,
  headcount,
  additionalInfo,
}) => {
  return (
    <div className="product-card w-full max-w-[260px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[360px] rounded-md shadow-xl overflow-hidden z-[100] relative cursor-pointer snap-start shrink-0 py-8 px-4 bg-blue-200 flex flex-col items-center justify-center gap-3 transition-all duration-300 group">
      <div className="para uppercase text-center leading-none z-40">
        <p
          style={{
            WebkitTextStroke: "1px #1e90ff",
            WebkitTextFillColor: "transparent",
            textShadow: "1px 1px rgba(0, 0, 0, 0.8)",
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            padding: "0 4px",
            borderRadius: "4px",
          }}
          className="z-10 font-bold text-lg -mb-5 tracking-wider text-blue-800"
        >
          {eventName}
        </p>

        <p className="font-bold text-xl font-serif tracking-wider mt-5 text-[#181868] z-30">
          {eventDate}
        </p>
      </div>
      <div className="w-[150px] aspect-square relative z-20 after:absolute after:h-1 after:w-full after:opacity-0 after:bg-[#24187b] after:top-9 after:left-0 after:group-hover:opacity-100 after:translate-x-1/2 after:translate-y-1/2 after:-z-20 after:group-hover:w-full after:transition-all after:duration-300 after:group-hover:origin-right after:group-hover:-translate-x-1/2 group-hover:translate-x-1/2 transition-all duration-300">
        <img
          src={eventImage}
          alt={eventName}
          className="w-full h-full object-cover rounded-md group-hover:opacity-90 transition-all duration-300"
        />

        <div className="tooltips absolute top-0 left-0.5 right-7 -translate-x-[150%] p-2 flex flex-col items-start gap-6 transition-all duration-300 group-hover:-translate-x-full">
          <p className="text-[#24187b] font-semibold font-serif text-xl uppercase group-hover:delay-900 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
            {eventTime}
          </p>
          <ul className="flex flex-col items-start gap-3">
            <li className="inline-flex gap-2 items-center justify-center group-hover:delay-200 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0a036c"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                height={12}
                width={12}
                className="stroke-[#0a036c]"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>

              <p className="text-s font-semibold font-serif text-[#0a036c]">
                {headcount}
              </p>
            </li>
            <li className="inline-flex gap-2 items-center justify-center group-hover:delay-300 transition-all opacity-0 group-hover:opacity-100 group-hover:transition-all group-hover:duration-500">
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth={3}
                className="stroke-[#0a036c]"
                stroke="#000000"
                fill="none"
                viewBox="0 0 24 24"
                height={10}
                width={10}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <p className="text-s font-semibold font-serif text-[#0a036c]">
                {additionalInfo}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
