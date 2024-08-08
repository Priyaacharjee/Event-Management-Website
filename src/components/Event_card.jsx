import React from "react";


export default function Event_card (){
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center">
    <h1 className="text-3xl font-bold mb-6 text-white">The minimalist way to host all your events successfully!!!</h1>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 width-100">
        <div className="bg-purple-800 shadow-pink-600 rounded-xl overflow-hidden bg-gradient-to-br">
      <div className="p-4">
        <h2 className="text-xl font-semibold justify-center">In-Person Meeting</h2>
        <p className="mt-2 text-white-600">Keep it all together at the venue</p>
        </div>
        <div className="p-4">
        <button className="bg-blue-200 text-black px-4 py-2 rounded-2xl align-middle justify-between">Explore More</button>
      </div>
      <div className="h-48 bg-cover bg-center"></div>
      </div>
      <div className="bg-blue-500 shadow-md rounded-xl overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold justify-center">Virtual Meeting</h2>
        <p className="mt-2 text-white">Go beyond webinars and workshops</p>
        <div className="p-4">
        <button className="bg-blue-200 text-black px-4 py-2 rounded-2xl align-middle justify-between">Explore More</button>
      </div>
        </div>
        </div>
      <div className="bg-pink-400 shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold justify-center">Hybrid Meeting</h2>
        <p className="mt-2 text-white">Merge the physical with the virtual</p>
      </div>
      <div className="p-4">
      <button className="bg-blue-200 text-black px-4 py-2 rounded-2xl align-middle justify-between">Explore More</button>
      </div>
    </div>
    </div>
    </div>
   
    

  );

}; 
