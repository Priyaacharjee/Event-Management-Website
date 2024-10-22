import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { fetchSingleEvent } from "../utils/utils";
import ImageLoader from "../Components/ImageLoader1";

function EventPage() {
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
    { label: "Interested", value: event.interestedButton },
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

  return (
    <>
      <div className="flex flex-col items-center py-10">
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

            <button
              className="mt-6 bg-yellow-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-500"
              onClick={() => navigate(`/registrationform/${eventId}`)}
            >
              Register Now
            </button>
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
        </div>
      </div>
    </>
  );
}

export default EventPage;
