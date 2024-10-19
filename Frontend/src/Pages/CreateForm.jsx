import React, { useState } from 'react';

const CreateForm = () => {
  const [isPaid, setIsPaid] = useState(false);
  const [isPublic, setIsPublic] = useState(false);
  const [eventType, setEventType] = useState(''); 
  const [headcount, setHeadcount] = useState(0); 
  const [payableAmount, setPayableAmount] = useState(0); 
  const [error, setError] = useState(''); 


  const handlePaymentChange = (event) => {
    setIsPaid(event.target.value === 'paid');
  };

  const handleTransparencyChange = (event) => {
    setIsPublic(event.target.value === 'public');
  };

  const handleEventTypeChange = (event) => {
        const selectedType = event.target.value;
        setEventType(selectedType);
        calculatePayableAmount(headcount, selectedType); 
  };

  

  const calculatePayableAmount = (headcount, eventType) => {
    let amount = 0;
  
    if (eventType === 'in_person') {
      if (headcount <= 200) amount = 2000;
      else if (headcount <= 400) amount = 4000;
      else if (headcount <= 500) amount = 5000;
    } else if (eventType === 'virtual') {
      if (headcount <= 200) amount = 500;
      else if (headcount <= 400) amount = 700;
      else if (headcount <= 500) amount = 1000;
    } else if (eventType === 'hybrid') {
      if (headcount <= 200) amount = 3000;
      else if (headcount <= 400) amount = 5000;
      else if (headcount <= 500) amount = 7000;
    }
  
    setPayableAmount(amount);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 m-12 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-[90%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Part */}
          <div className="w-full lg:w-full">
            <h2 className="font-serif text-3xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8 text-indigo-600">Create Your Event</h2>
            
            <form className="space-y-4">
              {/* Event Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Event Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter event name"
                  required
                />
              </div>

              {/* Organized By */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Organized By <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter organizer's name/Company Name"
                  required
                />
              </div>

              {/* Organization Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Organization Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter organization email"
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
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  placeholder="Enter speaker's name"
                  required
                />
              </div>

              {/* Event Type */}
                <div>
                <label className="block text-sm mt-8 font-medium text-gray-700">
                    Event Type <span className="text-red-500">*</span>
                </label>
                <select
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    onChange={handleEventTypeChange}
                    required
                >
                    <option value="" disabled selected>Select event type</option>
                    <option value="in_person">In-person</option>
                    <option value="virtual">Virtual</option>
                    <option value="hybrid">Hybrid</option>
                </select>
                </div>


              {/* Conditional Field Based on Event Type */}
              {eventType === 'in_person' && (
                <div>
                  <label className="block text-sm mt-8 font-medium text-gray-700">
                    Preferable City Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    placeholder="Enter preferable city"
                    required
                  />
                </div>
              )}

              {eventType === 'virtual' && (
                <div>
                  <label className="block text-sm mt-8 font-medium text-gray-700">
                    Preferable Online Meeting Platform <span className="text-red-500">*</span>
                  </label>
                  <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" required>
                    <option value="" disabled selected>Select preferable platform</option>
                    <option value="zoom">Zoom</option>
                    <option value="gmeet">Google Meet</option>
                    <option value="skype">Skype</option>
                  </select>
                </div>
              )}

              {eventType === 'hybrid' && (
                <>
                  <div>
                    <label className="block text-sm mt-8 font-medium text-gray-700">
                      Preferable City Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                      placeholder="Enter preferable city"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm mt-8 font-medium text-gray-700">
                      Preferable Online Meeting Platform <span className="text-red-500">*</span>
                    </label>
                    <select className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" required>
                      <option value="" disabled selected>Select preferable platform</option>
                      <option value="zoom">Zoom</option>
                      <option value="gmeet">Google Meet</option>
                      <option value="skype">Skype</option>
                    </select>
                  </div>
                </>
              )}

               {/* Event's Transparency Type (Private/Public) */}
               <div>
                <label className="block text-sm mt-8 font-medium text-gray-700">
                  Event's Transparency Type <span className="text-red-500">*</span>
                </label>
                <select 
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm" 
                  onChange={handleTransparencyChange} 
                  required
                >
                  <option value="" disabled selected>Select your preferable transparency type</option>
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>

              {/* Paid/Not Paid */}
              <div>
                <label className="block text-sm mt-8 font-medium text-gray-700">
                  Event payment type for your audience <span className="text-red-500">*</span>
                </label>
                <select
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                  onChange={handlePaymentChange}
                  required
                >
                  <option value="" disabled selected>Select payment type</option>
                  <option value="paid">Paid</option>
                  <option value="not_paid">Not Paid</option>
                </select>
              </div>

              {/* Paid Amount/Person */}
              {isPaid && (
                <>
                  <div>
                    <label className="block text-sm mt-8 font-medium text-gray-700">
                      Paid Amount/Person <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                      placeholder="Enter amount per person"
                      required
                    />
                  </div>

                  {/* Scanner Image for Payment */}
                  <div>
                    <label className="block text-sm mt-8 font-medium text-gray-700">
                      Company's Scanner Image for Payment<span className="text-red-500">*</span>
                    </label>
                    <h5 className="text-red-500 mt-2">**Image should be in jpeg/jpg/png format</h5>

                    <input
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      className="mt-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
                      required
                    />
                  </div>
                </>
              )}

                {/* Total HeadCount */}
                <div>
                <label className="block text-sm mt-8 font-medium text-gray-700">
                    Total HeadCount (Up to 500 people) <span className="text-red-500">*</span>
                </label>
                <input
                    type="number"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    placeholder="Enter number of visitors"
                    value={headcount}
                    onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (value > 500) {
                        setError('Headcount cannot exceed 500 people'); 
                    } else {
                        setError(''); 
                        setHeadcount(value);
                        calculatePayableAmount(value, eventType); 
                    }
                    }}
                    required
                />

                {/* Show error message */}
                {error && (
                    <p className="text-red-500 text-sm mt-1">
                    {error}
                    </p>
                )}
                </div>

              {/* Description of the event */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description of the Event <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  rows="4"
                  placeholder="Enter event description in 100 words"
                  required
                />
              </div>

              {/* Last Date of Registration*/}
              {isPublic && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Date of Registration <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    required
                  />
                </div>
              )}

              {/* Rules & Regulations */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Rules & Regulations (in PDF format)
                </label>
                <input
                  type="file"
                  accept=".pdf"
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
                />
              </div>

              {/* Poster image */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Poster (in JPG/JPEG/PNG format) <span className="text-red-500">*</span>
                  <h5 className='text-red-500'>**Image should be in 3:2 size format</h5>
                </label>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png"
                  className="mt-4 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-600 hover:file:bg-indigo-100"
                  required
                />
              </div>


              {/* Payment */}
              <div className='w-[90%] flex justify-center items-center flex-col'>
                <div className=" mt-8 flex justify-center items-center bg-yellow-200 p-6 rounded-xl shadow-md">
                    <h3 className="text-lg font-bold text-red-500">Total Bill: ₹{payableAmount}</h3>
                    <button className="mt-2 ml-8 bg-green-500 text-white p-2 rounded-md hover:bg-green-600">
                    Pay Now
                    </button>
                </div>
                <div className="flex justify-center items-center text-gray-400">**No hidden cost will be included further</div>
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
            <div className="relative overflow-hidden w-full h-full rounded-lg shadow-lg" style={{clipPath:'polygon(25% 0%, 100% 0%, 100% 100%, 25% 100%, 0% 50%)'}}>
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
    </div>
  );
};

export default CreateForm;
