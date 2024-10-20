import React, { useState} from "react";

const Registrationform = () => {
    const [formdata, setformdata] = useState({
        Name : '',
        PhoneNo : '',
        Emailid : '',
        EventName: '',//Disabled
        EventDate: '',//Disabled
        Venue: '',//Disabled
        Pay: false,//Disabled
    });
   // const [Paid, setPaid] = useState(true);

    const handleChange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value });
    };

    const handlePayment = (e) => {
        setPaid(e.target.value === 'paid');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submited:', formdata);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 m-12 rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-[90%]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="w-full lg:w-full">
                <h2 className="font-serif text-3xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Register Yourself!!</h2>

                <form onSubmit={handleSubmit}>
                    {/*Name*/}
                    <div>
                        <label htmlFor="Name" className="block text-sm font-medium text-gray-700">
                           Your Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="Name"
                          id="Name"
                          value={formdata.Name}
                          onChange={handleChange}
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                          placeholder="Enter Your name"
                          required
                        />
                    </div>

                    {/*Phone Number*/}  
                    <div>
                        <label htmlFor="PhoneNo"  className="block text-sm font-medium text-gray-700">
                           Your Phone Number <span className="text-red-500">*</span>
                           </label>
                           <input
                             type="numeric"
                             name="PhoneNo"
                             id="PhoneNo"
                             value={formdata.PhoneNo}
                             onChange={handleChange}
                             className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                             placeholder="Enter Your Phone Number"
                             required
                            />
                    </div> 

                    {/* Email ID */}
                    <div>
                        <label htmlFor="Emailid" className="block text-sm font-medium text-gray-700">
                        Your Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="Emailid"
                          name="Emailid"
                          id="Emailid"
                          value={formdata.Emailid}
                          onChange={handleChange}
                          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm"
                          placeholder="Enter Your Email Id"
                          required
                        />
                    </div> 

                    {/* Event Name (Disabled)*/}
                    <div>
                        <label htmlFor="EventName" className="block text-sm font-medium text-gray-700">
                        Event Name 
                        </label>
                        <input
                           type="text"
                           name="EventName"
                           id="eventName"
                           value={formdata.EventName}
                           className="mt-1 block w-full p-2 "
                           disabled
                        />
                    </div>

                    {/* Event Date (Disabled) */}
                    <div>
                        <label htmlFor="EventDate" className="block text-sm font-medium text-gray-700">
                        Event Date
                        </label>
                        <input
                          type="text"
                          name="EventDate"
                          id="EventDate"
                          value={formdata.EventDate}
                          className="mt-1 block w-full p-2 "
                           disabled
                        />
                    </div>

                    {/* Venue (Disabled) */}
                    <div>
                       <label htmlFor="Venue" className="block text-sm font-medium text-gray-700">
                        Event Venue
                        </label>
                        <input
                          type="text"
                          name="Venue"
                          id="Venue"
                          value={formdata.Venue}
                          className="mt-1 block w-full p-2 "
                           disabled
                         />  
                    </div>

                    {/*Payment */}
                    {formdata.Pay && (
                          <div className='w-[90%] flex justify-center items-center flex-col'>
                                <button className="mt-2 ml-8 bg-red-500 text-white p-2 rounded-md hover:bg-red-600">
                                 Pay Now
                                </button>
                            </div>
                          
                        )
                    }

                    {/* Submit Button */}
                     <div className="mt-8 text-center">
                         <button
                           type="submit"
                           className="w-full bg-indigo-600 text-white p-2 rounded-md hover:bg-indigo-700 transition duration-300">
                           Register
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
                    src= "https://media.istockphoto.com/id/1458453396/video/businesswoman-discussing-during-online-meeting.mp4?s=mp4-640x640-is&k=20&c=mrlsdshP3PEHUuD01efcqUwgmnVWaA8nIiz3mgFZcnA="
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