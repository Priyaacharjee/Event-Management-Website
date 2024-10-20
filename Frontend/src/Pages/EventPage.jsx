import React from "react";
import { useNavigate } from "react-router-dom";

const EventDetails = ({ eventid }) => {

    const navigate=useNavigate();
  // This array contains the event details as key-value pairs
  const eventTags = [
    { label: "Event Name", value: eventid.name },
    { label: "Organized by", value: eventid.organizer },
    { label: "Date & Time", value: eventid.dateTime },
    { label: "Speaker", value: eventid.speaker },
    { label: "Paid Amount", value: eventid.paidAmount },
    { label: "Interested", value: eventid.interestedButton },
    { label: "Total Seats", value: eventid.totalVisitors },
  ];

  const descriptionTags = [
    { label: "Platform", value: eventid.platform },
    { label: "Venue", value: eventid.venue },
    { label: "Description", value: eventid.description },
    { label: "Remaining Seats", value: eventid.remainingSeats },
    { label: "Last Date of Registration", value: eventid.registrationDeadline },
    { label: "Rules & Regulations", value: eventid.rules },
  ];

  return (
    <div className="flex flex-col items-center py-10">
      {/* Event Header with Image */}
      <div className="flex justify-between w-full max-w-4xl items-center">
        <img
          src={eventid.image}
          alt={eventid.name}
          className="w-96 h-48 object-cover rounded-lg"
        />
        <div className="ml-8">
          {/* Dynamically render event details */}
          {eventTags.map((item, index) => (
            <p key={index} className="text-lg font-medium">
              {item.label} : <span className="font-light">{item.value}</span>
            </p>
          ))}
          <button className="mt-6 bg-yellow-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-500" onClick={()=>navigate("/registrationform")}>
            Register Now
          </button>
        </div>
      </div>

      {/* Description Section */}
      <div className="w-full max-w-4xl mt-8">
        {descriptionTags.map((item, index) => (
          <p key={index} className="text-lg font-medium">
            {item.label} : <span className="font-light">{item.value}</span>
          </p>
        ))}
      </div>

      {/* Comment Section */}
      <div className="mt-12 w-full max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4">Comment Section</h2>
        <textarea
          className="w-full p-4 rounded-lg border border-gray-300"
          rows="4"
          placeholder="Drop your doubts or comments"
        />
      </div>
    </div>
  );
};

const EventPage = () => {
  // Example event data
  const eventData = {
    name: "TCS Global Leadership Summit",
    organizer: "TCS",
    dateTime: "30th - September - 2024",
    speaker: "John Doe",
    paidAmount: "$30",
    interestedButton: "Interested",
    totalVisitors: "250",
    platform:"Google Meet",
    venue:"Kolkata",
    description: "Join us for an amazing dance event.",
    remainingSeats: "25",
    registrationDeadline: "25th September 2024",
    rules: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Xuc5hDXl6WWuLOCcRZG4ei5zsC7hmldPwQ&s",
  };

  return <EventDetails eventid={eventData} />;
};


export default EventPage;
