import React, { useState } from "react";

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
        return <div>Upcoming Bookings</div>;
      case "Past Bookings":
        return <div>Past Bookings</div>;
    }
  };

  return (
    <>
      <div className="h-full w-full flex">
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
                style={{ width: `${20}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className=" w-4/6">
          <div className="flex gap-5 cursor-pointer ml-5 mt-6">
            {/* Basic Details */}
            <div
              className={`cursor-pointer relative ${
                activeMenu === "BasicDetails"
                  ? "text-blue-600"
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
              className={`cursor-pointer relative ${
                activeMenu === "Gallery" ? "text-blue-600" : "text-gray-600"
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
              className={`cursor-pointer relative ${
                activeMenu === "Booking Requests"
                  ? "text-blue-600"
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
              className={`cursor-pointer relative ${
                activeMenu === "Upcoming Bookings"
                  ? "text-blue-600"
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
              className={`cursor-pointer relative ${
                activeMenu === "Past Bookings"
                  ? "text-blue-600"
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
