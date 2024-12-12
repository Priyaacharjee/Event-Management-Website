import React, { useState } from "react";

function VenueRegisteringPage() {

  const [error, setError] = useState("");
  const [nameerror, setNameError] = useState("");
  const [cityerror, setCityError] = useState("");

  const [formData, setFormData] = useState({
    venueName: "",
    city: "",
    fullAddress: "",
    maxCapacity: 0,
    bookingPrice: 0,
    canOrganizeMultidayEvent: false,
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 m-12 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-[90%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Part */}
          <div className="w-full lg:w-full">
            <h2 className="font-serif text-3xl sm:text-3xl font-bold mb-6 sm:mb-8 text-indigo-600">
              Register Your Venue
            </h2>
            <form className="space-y-4">
              {/* Venue Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Venue Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="venueName"
                  value={formData.venueName}
                  onChange={(e) => {
                    const value = e.target.value;
                    const maxWords = 20;
                    const regex = /^[A-Za-z][A-Za-z\s]{0,}$/; // Starts with letters, only spaces allowed, no special chars or digits.
                    const wordCount = value.trim().split(/\s+/).length;

                    const errorMessage = !regex.test(value)
                      ? "Venue name must start with a letter and contain only alphabets and spaces."
                      : wordCount > maxWords
                      ? `Venue name should not exceed ${maxWords} words.`
                      : "";
                    setNameError(errorMessage);
                    setFormData({ ...formData, venueName: value });
                  }}
                  className={`mt-1 block w-full p-2 border ${
                    nameerror ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm`}
                  placeholder="Enter venue name"
                  required
                />
                {nameerror && (
                  <p className="text-red-500 text-sm mt-1">{nameerror}</p>
                )}
              </div>

              {/* Venue City */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={(e) => {
                    const value = e.target.value;
                    const maxWords = 2;
                    const regex = /^[A-Za-z][A-Za-z\s]{0,}$/; // Starts with letters, only spaces allowed, no special chars or digits.
                    const wordCount = value.trim().split(/\s+/).length;

                    const errorMessage = !regex.test(value)
                      ? "City name must start with a letter and contain only alphabets and spaces."
                      : wordCount > maxWords
                      ? `City name should not exceed ${maxWords} words.`
                      : "";
                    setCityError(errorMessage);
                    setFormData({ ...formData, city: value });
                  }}
                  className={`mt-1 block w-full p-2 border ${
                    cityerror ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm`}
                  placeholder="Enter main city"
                  required
                />
                {cityerror && (
                  <p className="text-red-500 text-sm mt-1">{cityerror}</p>
                )}
              </div>

              {/* Venue Full Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullAddress"
                  value={formData.fullAddress}
                  onChange={(e) => {
                    const value = e.target.value;
                    setFormData({ ...formData, fullAddress: value });
                  }}
                  className="mt-1 block w-full p-2 border  rounded-md shadow-sm"
                  placeholder="Enter full address of the venue"
                  required
                />
              </div>

              {/* Able to organize Multiday Event or not */}
              <div className="flex">
                <label className="block text-sm font-medium text-gray-700 pr-5">
                  Are you able to organize Multiday Event like "Hackathon"?
                </label>
                <input
                  checked={formData.canOrganizeMultidayEvent}
                  type="checkbox"
                  className="mr-1"
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      canOrganizeMultidayEvent: true,
                    }))
                  }
                />
                Yes
                <input
                  type="checkbox"
                  className="ml-4 mr-1"
                  checked={!formData.canOrganizeMultidayEvent}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      canOrganizeMultidayEvent: false,
                    }))
                  }
                />
                No
              </div>

              {/* Max Capacity */}
              <div>
                <label className="block text-sm mt-8 font-medium text-gray-700">
                  Maximum Capacity of the Hall
                  <span className="text-red-500"> *</span>
                </label>
                <input
                  type="number"
                  name="maxCapacity"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter number of maximum capacity"
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    setError("");
                    setFormData({
                      ...formData,
                      maxCapacity: value,
                    });
                  }}
                  required
                />
                {/* Show error message */}
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>

              {/* Booking Price */}
              <div>
                <label className="block text-sm mt-8 font-medium text-gray-700">
                  Booking Price
                  <span className="text-red-500"> *</span>
                </label>
                <input
                  type="number"
                  name="bookingPrice"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter booking price of the hall"
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    setError("");
                    setFormData({
                      ...formData,
                      bookingPrice: value,
                    });
                  }}
                  required
                />
                {/* Show error message */}
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>
            </form>
          </div>
          {/* Right Part*/}
          <div className="hidden lg:block relative">
            <div
              className="relative overflow-hidden w-full h-full rounded-lg shadow-lg"
              style={{
                clipPath:
                  "polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)",
              }}
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
              >
                <source
                  src="https://videos.pexels.com/video-files/3202042/3202042-hd_1920_1080_25fps.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VenueRegisteringPage;
