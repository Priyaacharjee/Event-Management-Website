import React, { useState, useEffect } from "react";
import { findUser, fetchSingleEvent, eventRegistration } from "../utils/utils";
import { useParams } from "react-router-dom";

const Registrationform = () => {
  const { eventId } = useParams();

  const [paymentDone, setpaymentDone] = useState(false);

  const [formdata, setformdata] = useState({
    Name: "",
    PhoneNo: "",
    Emailid: "",
    EventName: "TCS",
    EventDate: "23/10/2024",
    Pay: false,
    paidAmount: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formdata.Pay && !paymentDone) {
      alert("Please complete your payment first to register in the event!");
    } else {
      eventRegistration(eventId).then((response) => {
        alert(response);
      });
    }
  };

  useEffect(() => {
    findUser().then((user) => {
      fetchSingleEvent(eventId).then((event) => {
        setformdata({
          ...formdata,
          Emailid: user.email,
          PhoneNo: user.contact,
          Name: user.username,
          EventName: event.eventName,
          EventDate: new Date(event.date).toLocaleDateString("en-GB"),
          Pay: event.isPaid,
          paidAmount: event.payableAmount ? event.payableAmount : 0,
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 m-12 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-[90%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="w-full lg:w-full">
            <h2 className="font-serif text-3xl sm:text-3xl font-bold mb-6 sm:mb-8 text-indigo-600">
              Register Yourself!!
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              {/*Name*/}
              <div>
                <label
                  htmlFor="Name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="Name"
                  id="Name"
                  placeholder={formdata.Name}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  disabled
                />
              </div>

              {/*Phone Number*/}
              <div>
                <label
                  htmlFor="PhoneNo"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="numeric"
                  name="PhoneNo"
                  id="PhoneNo"
                  placeholder={formdata.PhoneNo}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  disabled
                />
              </div>

              {/* Email ID */}
              <div>
                <label
                  htmlFor="Emailid"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email ID <span className="text-red-500">*</span>
                </label>
                <input
                  name="Emailid"
                  id="Emailid"
                  placeholder={formdata.Emailid}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  disabled
                />
              </div>

              {/* Event Name */}
              <div>
                <label
                  htmlFor="EventName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Event Name
                </label>
                <input
                  name="EventName"
                  id="eventName"
                  placeholder={formdata.EventName}
                  className="mt-1 block w-full p-2 "
                  disabled
                />
              </div>

              {/* Event Date */}
              <div>
                <label
                  htmlFor="EventDate"
                  className="block text-sm font-medium text-gray-700"
                >
                  Event Date
                </label>
                <input
                  name="EventDate"
                  id="EventDate"
                  placeholder={formdata.EventDate}
                  className="mt-1 block w-full p-2 "
                  disabled
                />
              </div>

              {/*Payment */}
              {formdata.Pay && (
                <div className="w-[90%] flex justify-center items-center flex-col">
                  <button
                    className="mt-2 ml-8 bg-red-500 text-white p-2 rounded-md hover:bg-red-600"
                    onClick={() => {
                      setpaymentDone(true);
                    }}
                  >
                    Pay Now &emsp; {formdata.paidAmount}/-
                  </button>
                </div>
              )}

              {/* Submit Button */}
              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  Register
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
                  src="https://media.istockphoto.com/id/1458453396/video/businesswoman-discussing-during-online-meeting.mp4?s=mp4-640x640-is&k=20&c=mrlsdshP3PEHUuD01efcqUwgmnVWaA8nIiz3mgFZcnA="
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registrationform;
