import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  findUser,
  fetchSingleEvent,
  checkUserIsRegisteredInEventOrNot,
} from "../utils/utils";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { AiFillHome, AiOutlineAppstore, AiFillContacts } from "react-icons/ai";
import ImageLoader from "../Components/ImageLoader1";
import CommentSection from "../Components/CommentSection";  // Separate component for the comment section

const footerMenuItems = [
  { href: "header", label: "Header", icon: AiFillHome },
  { href: "features", label: "Features", icon: AiOutlineAppstore },
  { href: "contact", label: "Contact", icon: AiFillContacts },
];

function EventPage() {
  const navigate = useNavigate();
  const { eventId } = useParams();

  const [event, setEvent] = useState({});
  const [user, setUser] = useState(null);
  const [registered, setRegistered] = useState(false);

  const eventTags = [
    { label: "Event Name", value: event.eventName },
    { label: "Organized by", value: event.ownerId ? event.ownerId.username : null },
    { label: "Date & Time", value: `${new Date(event.date).toLocaleDateString("en-GB")}, ${event.time}` },
    { label: "Speaker", value: event.speaker },
    { label: "Paid Amount", value: event.payableAmount ? event.payableAmount : "Free" },
    { label: "Total Seats", value: event.headcount },
  ];

  useEffect(() => {
    fetchSingleEvent(eventId).then((response) => {
      setEvent(response);
    });

    findUser().then((response) => {
      setUser(response.username.split(" ")[0]);
      if (response.username) {
        checkUserIsRegisteredInEventOrNot(eventId).then((result) => {
          setRegistered(result);
        });
      }
    });
  }, [eventId]);

  return (
    <div className="flex flex-col items-center py-10">
      <Navbar menuItems={[{ label: "Home", to: "/" }, { label: "About", to: "/" }, { label: "Contact", href: "contact" }]} />

      {/* Event Header with Image */}
      <div className="flex justify-between w-full max-w-4xl items-center">
        {event.posterImage ? (
          <img
            src={event.posterImage.url}
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
            <button className="mt-6 bg-yellow-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-500">
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
        {/* Filtered description based on event type */}
        {event.eventType === "virtual" ? (
          <p className="text-lg font-medium">Platform: <span className="font-light">{event.platform}</span></p>
        ) : (
          <p className="text-lg font-medium">Venue: <span className="font-light">{event.city}</span></p>
        )}
        {event.description && (
          <p className="text-lg font-medium">Description: <span className="font-light">{event.description}</span></p>
        )}
      </div>

      {/* Comment Section */}
      <CommentSection eventId={eventId} />

      {/* Footer Section */}
      <div className="m-0 p-0" id="contact">
        <Footer menuItems1={footerMenuItems} />
      </div>
    </div>
  );
}

export default EventPage;
