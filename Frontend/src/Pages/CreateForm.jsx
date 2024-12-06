import { useState, useEffect } from "react";
import { createEvent, fetchAllVenues } from "../utils/utils";
import { useParams, useNavigate } from "react-router-dom";

const CreateForm = () => {
  const navigate = useNavigate();
  const { eventType } = useParams();

  const [payableAmount, setPayableAmount] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [billPaymentDone, setbillPaymentDone] = useState(false);

  const [venueDropdown, setVenueDropdown] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState("");
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");

  const [selectedVenues, setSelectedVenues] = useState({
    primary: "",
    secondary: "",
    tertiary: "",
  });

  const [selectedTimeSlots, setSelectedTimeSlots] = useState({
    primary: "",
    secondary: "",
    tertiary: "",
  });

  const [venue1, setVenue1] = useState(false);
  const [venue2, setVenue2] = useState(false);
  const [venue3, setVenue3] = useState(false);


  const cities = [
    { value: "kolkata", label: "Kolkata" },
    { value: "bangalore", label: "Bangalore" },
    { value: "pune", label: "Pune" },
    { value: "hyderabad", label: "Hyderabad" },
  ];

  const venues = [
    {
      city: "kolkata",
      value: "venue1",
      label: "ITC Royal Bengal",
      timeSlots: ["10:00 AM", "02:00 PM", "06:00 PM"],
    },
    {
      city: "kolkata",
      value: "venue2",
      label: "The Grand Oberoi",
      timeSlots: ["09:00 AM", "01:00 PM", "05:00 PM"],
    },
    {
      city: "kolkata",
      value: "venue3",
      label: "JW Marriott",
      timeSlots: ["11:00 AM", "03:00 PM", "07:00 PM"],
    },
    {
      city: "bangalore",
      value: "venue4",
      label: "The Leela Palace",
      timeSlots: ["10:00 AM", "02:00 PM", "06:00 PM"],
    },
    {
      city: "bangalore",
      value: "venue5",
      label: "Taj West End",
      timeSlots: ["09:00 AM", "01:00 PM", "05:00 PM"],
    },
    {
      city: "pune",
      value: "venue6",
      label: "Conrad Pune",
      timeSlots: ["11:00 AM", "03:00 PM", "07:00 PM"],
    },
    {
      city: "pune",
      value: "venue7",
      label: "Shantai Hotel",
      timeSlots: ["10:00 AM", "02:00 PM", "06:00 PM"],
    },
    {
      city: "pune",
      value: "venue8",
      label: "Lemon Tree Hotel",
      timeSlots: ["09:00 AM", "01:00 PM", "05:00 PM"],
    },
    {
      city: "hyderabad",
      value: "venue9",
      label: "Novotel Hyderabad",
      timeSlots: ["10:00 AM", "02:00 PM", "06:00 PM"],
    },
    {
      city: "hyderabad",
      value: "venue10",
      label: "Amrutha Castle",
      timeSlots: ["09:00 AM", "01:00 PM", "05:00 PM"],
    },
  ];

  const handleVenueChange = (level, value) => {
    setSelectedVenues((prev) => {
      const updated = { ...prev, [level]: value };
      // Reset the lower levels when a higher level changes
      if (level === "primary") {
        updated.secondary = "";
        updated.tertiary = "";
      } else if (level === "secondary") {
        updated.tertiary = "";
      }
      return updated;
    });
    setSelectedTimeSlot("");
  };

  // Updated Time Slot Change Handler
  const handleTimeSlotChange = (venueLevel, timeSlot) => {
    setSelectedTimeSlots((prev) => ({
      ...prev,
      [venueLevel]: timeSlot,
    }));
  };

  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventTime: "",
    eventType: "",
    speakerName: "",
    city: "",
    platform: "",
    description: "",
    registrationEndDate: "",
    rulesFile: null,
    headcount: 0,
    isPaid: false,
    isPublic: true,
    paidAmountPerPerson: 0,
    bill: 0,
    posterImage: null,
    scannerImage: null,
    venue1: {
      id: null,
      timeslot: null,
    },
    venue2: {
      id: null,
      timeslot: null,
    },
    venue3: {
      id: null,
      timeslot: null,
    },
  });

  // Filter venues based on the selected city
  const filteredVenues = venues.filter((venue) => venue.city === formData.city);

  // Exclude already selected venues
  const getAvailableVenues = (excludeValues) =>
    filteredVenues.filter((venue) => !excludeValues.includes(venue.value));

  const handleScannerImage = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      alert("Please Upload an Scanner Image");
      return;
    }
    const maxSizeInKB = 50;
    if (file.size > maxSizeInKB * 1024) {
      alert(`File size should be less than ${maxSizeInKB} KB.`);
      return;
    }

    const imageData = await setFileToBase(file);
    setFormData({ ...formData, scannerImage: imageData });
  };

  const handlePosterImage = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      alert("Please Upload an Poster Image");
      return;
    }
    const maxSizeInKB = 50;
    if (file.size > maxSizeInKB * 1024) {
      alert(`File size should be less than ${maxSizeInKB} KB.`);
      return;
    }

    const imageData = await setFileToBase(file);
    setFormData({ ...formData, posterImage: imageData });
  };

  const setFileToBase = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value, eventType });
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleEventTypeChange = (event) => {
    const { name, value } = event.target;
    if (value) {
      setFormData({ ...formData, [name]: value });
      calculatePayableAmount(formData.headcount, value);
    } else {
      setFormData({ ...formData, [name]: eventType });
      calculatePayableAmount(formData.headcount, eventType);
    }
  };

  const calculatePayableAmount = (headcount, eventType) => {
    let amount = 0;

    if (eventType === "in_person") {
      if (headcount <= 200) amount = 2000;
      else if (headcount <= 400) amount = 4000;
      else if (headcount <= 500) amount = 5000;
    } else if (eventType === "virtual") {
      if (headcount <= 200) amount = 500;
      else if (headcount <= 400) amount = 700;
      else if (headcount <= 500) amount = 1000;
    } else if (eventType === "hybrid") {
      if (headcount <= 200) amount = 3000;
      else if (headcount <= 400) amount = 5000;
      else if (headcount <= 500) amount = 7000;
    }

    setPayableAmount(amount);
  };

  const handlePayment = () => {
    setFormData({
      ...formData,
      bill: payableAmount,
    });
    if (
      formData.eventDate <= formData.registrationEndDate ||
      formData.eventDate < new Date() ||
      formData.registrationEndDate < new Date()
    ) {
      alert("Please provide a valid Event date & Last date of registration!");
    } else if (formData.isPaid && formData.paidAmountPerPerson <= 0) {
      alert("Please provide an amount to be paid by every participent!");
    } else {
      setbillPaymentDone(true);
      alert(`${payableAmount}/- Payment successfull`);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!billPaymentDone) {
        alert("Please complete your payment to create an event!");
      } else {
        setLoading(true);
        const result = await createEvent(formData);
        setTimeout(async () => {
          setLoading(false);
          alert(result);
          if (formData.eventType === "virtual") {
            navigate("/virtualevent");
          }
          if (formData.eventType === "hybrid") {
            navigate("/hybridevent");
          }
          if (formData.eventType === "in_person") {
            navigate("/inpersonevent");
          }
        }, 3000);
      }
    } catch (error) {
      alert("An error occurred while creating the event. Please try again.");
    }
  };

  const [allVenues, setallVenues] = useState([]);
  const [allCity, setallCity] = useState([]);
  const [venue_1, setvenue_1] = useState();
  const [venue_2, setvenue_2] = useState();
  const [venue_3, setvenue_3] = useState();
  useEffect(() => {
    fetchAllVenues().then((response) => {
      setallVenues(response);

      const uniqueCities = [...new Set(response.map((venue) => venue.city))];
      setallCity(uniqueCities);
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 m-12 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-[90%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Part */}
          <div className="w-full lg:w-full">
            <h2 className="font-serif text-3xl sm:text-3xl font-bold mb-6 sm:mb-8 text-indigo-600">
              Create Your Event
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Event Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Event Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter event name"
                  required
                />
              </div>

              {/* Event Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date of Event <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>

              {/* Event Time */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Time of Event<span className="text-red-500">*</span>
                </label>
                <input
                  type="time"
                  name="eventTime"
                  value={formData.eventTime}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  required
                />
              </div>

              {/* Speaker */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Speaker's Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="speakerName"
                  value={formData.speakerName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter speaker's name"
                  required
                />
              </div>

               {/* Total HeadCount */}
               <div>
                <label className="block text-sm mt-8 font-medium text-gray-700">
                  Total HeadCount (Up to 500 people){" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="headcount"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter number of maximum participent"
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (value > 500) {
                      setError("Headcount cannot exceed 500 people");
                    } else {
                      setError("");
                      setFormData({
                        ...formData,
                        headcount: e.target.value,
                      });
                      if (eventType) {
                        calculatePayableAmount(e.target.value, eventType);
                      } else {
                        calculatePayableAmount(
                          e.target.value,
                          formData.eventType
                        );
                      }
                    }
                  }}
                  required
                />
                {/* Show error message */}
                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>


              {/* Event Type */}
              <div>
                <label className="block text-sm mt-8 font-medium text-gray-700">
                  Event Type <span className="text-red-500">*</span>
                </label>
                <select
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  disabled={
                    eventType === "in_person" ||
                      eventType === "virtual" ||
                      eventType === "hybrid"
                      ? true
                      : false
                  }
                  name="eventType"
                  onChange={handleEventTypeChange}
                  value={eventType ? eventType : null}
                  required
                >
                  <option value="" disabled selected={eventType ? false : true}>
                    Select event type
                  </option>
                  <option value="in_person">In-person</option>
                  <option value="virtual">Virtual</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              {/* Conditional field based on event type */}
              {(formData.eventType === "in_person" ||
                eventType === "in_person") && (
                  <div className="bg-indigo-200 p-6 rounded-xl">
                    {/* City Dropdown */}
                    <label className="block text-sm font-medium text-gray-700">
                      Preferable City Name <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="city"
                      id="city"
                      value={formData.city || ""}
                      onChange={(e) => {
                        setFormData({ ...formData, city: e.target.value });
                        setvenue_1(
                          allVenues
                            .filter((venue) => venue.city === e.target.value)
                            .map((venue) => venue.name)
                        );

                        setVenueDropdown(true);

                        // setSelectedVenues({ primary: "", secondary: "", tertiary: "" });
  
                      }}
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    >
                      <option value="" disabled>
                        Select City
                      </option>
                      {allCity.map((city, index) => (
                        <option key={index}>{city}</option>
                      ))}
                    </select>

                    {/* Venue Dropdowns */}
                    {venueDropdown && formData.city && (
                      <>
                        {/* Primary Venue */}
                        <div className="mt-4">
                          <label
                            htmlFor="primaryVenue"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Venue 1 <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="primaryVenue"
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                venue1: { ...formData.venue1, id: e.target.value },
                              });                             
                              setVenue1(true);
                            }}
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                          >
                            <option value="" disabled selected>
                              Select Venue 1
                            </option>
                            {venue_1.map((venue, index) => (
                              <option key={index} value={venue}>{venue}</option>
                            ))}
                          </select>

                        </div>

                        {venue1 ? <div className="mt-4">
                          <p className="block text-sm font-medium text-gray-700">
                            Select Preferred Time Slot
                          </p>
                          {/* <div className="mt-2 space-y-2">
                            {venues.timeSlots.map((timeSlot, index) => (
                              <label key={index} className="flex items-center space-x-2">
                                <input
                                  type="radio"
                                  name="timeSlotPrimary"
                                  value={timeSlot} // Add value to ensure the correct timeslot is set
                                  checked={formData.venue1.timeslot === timeSlot} // Update checked to match the new structure
                                  onChange={(e) =>
                                    setFormData({
                                      ...formData,
                                      venue1: {
                                        ...formData.venue1,
                                        timeslot: e.target.value, // Set the timeslot for venue1
                                      },
                                    })
                                  }
                                  className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                />
                                <span className="text-gray-700">{timeSlot}</span>
                              </label>
                            ))}
                          </div> */}
                        </div> : null}
                        {/* Time Slot for Primary Venue */}



                        {/* Secondary Venue */}
                        {selectedVenues.primary && (
                          <div className="mt-4">
                            <label
                              htmlFor="secondaryVenue"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Venue 2 <span className="text-red-500">*</span>
                            </label>
                            <select
                              id="secondaryVenue"
                              value={selectedVenues.secondary}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  venue2: { ...formData.venue2, id: e.target.value },
                                });                             
                                setVenue2(true);
                              }}
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            >
                              <option value="" disabled>
                                Select Venue 2
                              </option>
                              {getAvailableVenues([selectedVenues.primary]).map(
                                (venue) => (
                                  <option key={venue.value} value={venue.value}>
                                    {venue.label}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        )}

                        {/* Time Slot for Secondary Venue */}
                        {venue2?
                          <div className="mt-4">
                            <p className="block text-sm font-medium text-gray-700">
                              Select Preferred Time Slot
                            </p>
                            {/* // <div className="mt-2 space-y-2">
                            //   {venues
                            //     .find(
                            //       (venue) =>
                            //         venue.value === selectedVenues.secondary
                            //     )
                            //     ?.timeSlots.map((timeSlot, index) => (
                            //       <label
                            //         key={index}
                            //         className="flex items-center space-x-2"
                            //       >
                            //         <input
                            //           type="radio"
                            //           name="timeSlotSecondary"
                            //           value={timeSlot}
                            //           checked={
                            //             selectedTimeSlots.secondary === timeSlot
                            //           }
                            //           onChange={(e) =>
                            //             handleTimeSlotChange(
                            //               "secondary",
                            //               e.target.value
                            //             )
                            //           }
                            //           className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                            //         />
                            //         <span className="text-gray-700">
                            //           {timeSlot}
                            //         </span>
                            //       </label>
                            //     ))}
                            // </div> */}
                          </div>
                        :null}
                        

                        {/* Tertiary Venue */}
                        {selectedVenues.secondary && (
                          <div className="mt-4">
                            <label
                              htmlFor="tertiaryVenue"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Venue 3
                            </label>
                            <select
                              id="tertiaryVenue"
                              value={selectedVenues.tertiary}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  venue3: { ...formData.venue3, id: e.target.value },
                                });                             
                                setVenue3(true);
                              }}
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            >
                              <option value="" disabled>
                                Select Venue 3
                              </option>
                              {getAvailableVenues([
                                selectedVenues.primary,
                                selectedVenues.secondary,
                              ]).map((venue) => (
                                <option key={venue.value} value={venue.value}>
                                  {venue.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        )}

                        {/* Time Slot for Tertiary Venue */}
                        {venue3?<div className="mt-4">
                            <p className="block text-sm font-medium text-gray-700">
                              Select Preferred Time Slot
                            </p>
                            {/* <div className="mt-2 space-y-2">
                              {venues
                                .find(
                                  (venue) =>
                                    venue.value === selectedVenues.tertiary
                                )
                                ?.timeSlots.map((timeSlot, index) => (
                                  <label
                                    key={index}
                                    className="flex items-center space-x-2"
                                  >
                                    <input
                                      type="radio"
                                      name="timeSlotTertiary"
                                      value={timeSlot}
                                      checked={
                                        selectedTimeSlots.tertiary === timeSlot
                                      }
                                      onChange={(e) =>
                                        handleTimeSlotChange(
                                          "tertiary",
                                          e.target.value
                                        )
                                      }
                                      className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                    />
                                    <span className="text-gray-700">
                                      {timeSlot}
                                    </span>
                                  </label>
                                ))}
                            </div> */}
                          </div>:null}
                      </>
                    )}
                  </div>
                )}

              {(eventType === "virtual" ||
                formData.eventType === "virtual") && (
                  <div className="bg-indigo-200 p-6 rounded-xl">
                    <label className="block text-sm mt-8 font-medium text-gray-700">
                      Preferable Online Meeting Platform{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                      name="platform"
                      value={formData.platform}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled selected>
                        Select preferable platform
                      </option>
                      <option value="zoom">Zoom</option>
                      <option value="gmeet">Google Meet</option>
                      <option value="skype">Skype</option>
                    </select>
                  </div>
                )}

              {(eventType === "virtual" ||
                formData.eventType === "virtual") && (
                  <div className="bg-indigo-200 p-6 rounded-xl">
                    <label className="block text-sm mt-8 font-medium text-gray-700">
                      Preferable Online Meeting Platform{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                      name="platform"
                      value={formData.platform}
                      onChange={handleInputChange}
                    >
                      <option value="" disabled selected>
                        Select preferable platform
                      </option>
                      <option value="zoom">Zoom</option>
                      <option value="gmeet">Google Meet</option>
                      <option value="skype">Skype</option>
                    </select>
                  </div>
                )}

              {(eventType === "hybrid" || formData.eventType === "hybrid") && (
                <>
                  <div className="bg-indigo-200 p-6 rounded-xl">
                    <div>
                      <label className="block text-sm mt-2 font-medium text-gray-700">
                        Preferable Online Meeting Platform{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        name="platform"
                        value={formData.platform}
                        onChange={handleInputChange}
                      >
                        <option value="" disabled selected>
                          Select preferable platform
                        </option>
                        <option value="zoom">Zoom</option>
                        <option value="gmeet">Google Meet</option>
                        <option value="skype">Skype</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm mt-8 font-medium text-gray-700">
                        Preferable City Name{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="city"
                        id="city"
                        value={formData.city || ""}
                        onChange={(e) => {
                          setFormData({ ...formData, city: e.target.value });
                          setVenueDropdown(true);
                        }}
                        className="mt-2 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                      >
                        <option value="" disabled>
                          Select City
                        </option>
                        {cities.map((city, index) => (
                          <option key={index} value={city.value}>
                            {city.label}
                          </option>
                        ))}
                      </select>

                      {/* Venue Dropdown */}
                      {venueDropdown && formData.city && (
                        <>
                          {/* Primary Venue */}
                          <div className="mt-4">
                            <label
                              htmlFor="primaryVenue"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Venue 1 <span className="text-red-500">*</span>
                            </label>
                            <select
                              id="primaryVenue"
                              value={selectedVenues.primary}
                              onChange={(e) =>
                                handleVenueChange("primary", e.target.value)
                              }
                              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                            >
                              <option value="" disabled>
                                Select Venue 1
                              </option>
                              {getAvailableVenues([]).map((venue) => (
                                <option key={venue.value} value={venue.value}>
                                  {venue.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Time Slot for Primary Venue */}
                          {selectedVenues.primary && (
                            <div className="mt-4">
                              <p className="block text-sm font-medium text-gray-700">
                                Select Preferred Time Slot
                              </p>
                              <div className="mt-2 space-y-2">
                                {venues
                                  .find(
                                    (venue) =>
                                      venue.value === selectedVenues.primary
                                  )
                                  ?.timeSlots.map((timeSlot, index) => (
                                    <label
                                      key={index}
                                      className="flex items-center space-x-2"
                                    >
                                      <input
                                        type="radio"
                                        name="timeSlotPrimary"
                                        value={timeSlot}
                                        checked={
                                          selectedTimeSlots.primary === timeSlot
                                        }
                                        onChange={(e) =>
                                          handleTimeSlotChange(
                                            "primary",
                                            e.target.value
                                          )
                                        }
                                        className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                      />
                                      <span className="text-gray-700">
                                        {timeSlot}
                                      </span>
                                    </label>
                                  ))}
                              </div>
                            </div>
                          )}

                          {/* Secondary Venue */}
                          {selectedVenues.primary && (
                            <div className="mt-4">
                              <label
                                htmlFor="secondaryVenue"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Venue 2<span className="text-red-500">*</span>
                              </label>
                              <select
                                id="secondaryVenue"
                                value={selectedVenues.secondary}
                                onChange={(e) =>
                                  handleVenueChange("secondary", e.target.value)
                                }
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                              >
                                <option value="" disabled>
                                  Select Venue 2
                                </option>
                                {getAvailableVenues([
                                  selectedVenues.primary,
                                ]).map((venue) => (
                                  <option key={venue.value} value={venue.value}>
                                    {venue.label}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}

                          {/* Time Slot for Secondary Venue */}
                          {selectedVenues.secondary && (
                            <div className="mt-4">
                              <p className="block text-sm font-medium text-gray-700">
                                Select Preferred Time Slot
                              </p>
                              <div className="mt-2 space-y-2">
                                {venues
                                  .find(
                                    (venue) =>
                                      venue.value === selectedVenues.secondary
                                  )
                                  ?.timeSlots.map((timeSlot, index) => (
                                    <label
                                      key={index}
                                      className="flex items-center space-x-2"
                                    >
                                      <input
                                        type="radio"
                                        name="timeSlotSecondary"
                                        value={timeSlot}
                                        checked={
                                          selectedTimeSlots.secondary ===
                                          timeSlot
                                        }
                                        onChange={(e) =>
                                          handleTimeSlotChange(
                                            "secondary",
                                            e.target.value
                                          )
                                        }
                                        className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                      />
                                      <span className="text-gray-700">
                                        {timeSlot}
                                      </span>
                                    </label>
                                  ))}
                              </div>
                            </div>
                          )}

                          {/* Tertiary Venue */}
                          {selectedVenues.secondary && (
                            <div className="mt-4">
                              <label
                                htmlFor="tertiaryVenue"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Venue 3
                              </label>
                              <select
                                id="tertiaryVenue"
                                value={selectedVenues.tertiary}
                                onChange={(e) =>
                                  handleVenueChange("tertiary", e.target.value)
                                }
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                              >
                                <option value="" disabled>
                                  Select Venue 3
                                </option>
                                {getAvailableVenues([
                                  selectedVenues.primary,
                                  selectedVenues.secondary,
                                ]).map((venue) => (
                                  <option key={venue.value} value={venue.value}>
                                    {venue.label}
                                  </option>
                                ))}
                              </select>
                            </div>
                          )}

                          {/* Time Slot for Tertiary Venue */}
                          {selectedVenues.tertiary && (
                            <div className="mt-4">
                              <p className="block text-sm font-medium text-gray-700">
                                Select Preferred Time Slot
                              </p>
                              <div className="mt-2 space-y-2">
                                {venues
                                  .find(
                                    (venue) =>
                                      venue.value === selectedVenues.tertiary
                                  )
                                  ?.timeSlots.map((timeSlot, index) => (
                                    <label
                                      key={index}
                                      className="flex items-center space-x-2"
                                    >
                                      <input
                                        type="radio"
                                        name="timeSlotTertiary"
                                        value={timeSlot}
                                        checked={
                                          selectedTimeSlots.tertiary ===
                                          timeSlot
                                        }
                                        onChange={(e) =>
                                          handleTimeSlotChange(
                                            "tertiary",
                                            e.target.value
                                          )
                                        }
                                        className="h-4 w-4 text-indigo-600 border-gray-300 focus:ring-indigo-500"
                                      />
                                      <span className="text-gray-700">
                                        {timeSlot}
                                      </span>
                                    </label>
                                  ))}
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* Event's Transparency Type (Private/Public) */}
              <div>
                <label className="block text-sm mt-8 font-medium text-gray-700">
                  Event's Transparency Type{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  value={formData.isPublic}
                  onChange={(e) => {
                    if (e.target.value === "Private")
                      setFormData({
                        ...formData,
                        isPublic: false,
                      });
                  }}
                  required
                >
                  <option value="" disabled selected>
                    Select your preferable transparency type
                  </option>
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>

              {/* Paid/Not Paid */}
              <div>
                <label className="block text-sm mt-8 font-medium text-gray-700">
                  Event payment type for your audience{" "}
                  <span className="text-red-500">*</span>
                </label>
                <select
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  name="isPaid"
                  onChange={(e) => {
                    if (e.target.value == "paid") {
                      setFormData({ ...formData, isPaid: true });
                    } else {
                      setFormData({ ...formData, isPaid: false });
                    }
                  }}
                  required
                >
                  <option value="" disabled selected>
                    Select payment type
                  </option>
                  <option value="not_paid">Free</option>
                  <option value="paid">Paid</option>
                </select>
              </div>

              {/* Paid Amount/Person */}
              {formData.isPaid && (
                <>
                  <div className="bg-indigo-200 p-6 rounded-xl">
                    <div>
                      <label className="block text-sm mt-8 font-medium text-gray-700">
                        Paid Amount/Person{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="paidAmountPerPerson"
                        value={formData.paidAmountPerPerson}
                        onChange={handleInputChange}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                        placeholder="Enter amount per person"
                      />
                    </div>

                    {/* Scanner Image for Payment */}
                    <div>
                      <label className="block text-sm mt-8 font-medium text-gray-700">
                        Company's Scanner Image for Payment
                        <span className="text-red-500">*</span>
                      </label>
                      <h5 className="text-red-500 mt-2">
                        **Image should be in jpeg/jpg/png format
                      </h5>

                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        onChange={handleScannerImage}
                        className="mt-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
                      />
                    </div>
                  </div>
                </>
              )}

             
              {/* Description of the event */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description of the Event{" "}
                  <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows="4"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter event description in 100 words"
                  required
                />
              </div>

              {/* Last Date of Registration*/}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Last Date of Registration{" "}
                  <span className="text-gray-400">(if any)</span>
                </label>
                <input
                  type="date"
                  name="registrationEndDate"
                  value={formData.registrationEndDate}
                  onChange={handleInputChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                />
              </div>

              {/* Rules & Regulations */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Rules & Regulations (in PDF format)
                </label>
                <input
                  type="file"
                  name="rulesFile"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
                />
              </div>

              {/* Poster image */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Poster (in JPG/JPEG/PNG format){" "}
                  <span className="text-red-500">*</span>
                  <h5 className="text-red-500">
                    **Image should be in 3:2 size format
                  </h5>
                </label>
                <input
                  type="file"
                  name="posterImage"
                  accept=".jpg,.jpeg,.png"
                  onChange={handlePosterImage}
                  className="mt-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
                  required
                />
              </div>

              {/* Payment */}
              <div className="w-[90%] flex justify-center items-center flex-col">
                <div className=" mt-8 flex justify-center items-center bg-indigo-200 p-6 rounded-xl shadow-md">
                  <h3 className="text-lg font-bold text-red-500">
                    Total Bill: ₹{payableAmount}
                  </h3>
                  <div
                    className="mt-2 ml-8 bg-indigo-600 text-white p-2 rounded-md hover:bg-green-600 cursor-pointer"
                    onClick={handlePayment}
                  >
                    Pay Now
                  </div>
                </div>
                <div className="flex justify-center items-center text-gray-400">
                  **No hidden cost will be included further
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  Create Event
                </button>
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
                  src="https://media.istockphoto.com/id/1363141305/video/creative-people-brainstorming-about-start-up-project-and-collaboration.mp4?s=mp4-640x640-is&k=20&c=u7oTfPpSR8d91vqjtGNMfNnkwDVbzOtkD8-sNc697sA="
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
      {loading && (
        <>
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="loader"></div>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateForm;
