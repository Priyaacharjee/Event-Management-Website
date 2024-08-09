import React from "react";

export default function Event_card() {
  return (
    <div className="py-5 flex flex-col items-center justify-center pb-24">
      <h1 className="text-3xl font-bold mb-6 text-white py-10">
        The minimalist way to host all your events successfully!!!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-10 md:gap-x-9 lg:gap-x-9 xl:gap-x-20 2xl:gap-x-28">

      {/* In-person Events--------------------------------------------- */}
        <div className="bg-purple-800 shadow-pink-600 rounded-xl overflow-hidden bg-gradient-to-br">
          <div className="p-4">
            <h2 className="text-xl font-semibold justify-center">
              In-Person Meeting
            </h2>
            <p className="mt-2 text-white-600">
              Keep it all together at the venue
            </p>
          </div>
          <div className="p-4">
            <button className="bg-blue-200 text-black px-4 py-2 rounded-2xl align-middle justify-between">
              Explore More
            </button>
          </div>
          <div className="h-48 bg-cover bg-center border-2">{/* img */}</div>
        </div>

        {/* Virtual Events--------------------------------------------- */}
        <div className="bg-blue-500 shadow-md rounded-xl overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl font-semibold justify-center">
              Virtual Meeting
            </h2>
            <p className="mt-2 text-white">Go beyond webinars and workshops</p>
            <div className="p-4">
              <button className="bg-blue-200 text-black px-4 py-2 rounded-2xl align-middle justify-between">
                Explore More
              </button>
            </div>
            <div className="h-48 bg-cover bg-center">{/* img */}</div>
          </div>
        </div>

        {/* Hybrid Event---------------------------------------------------- */}
        <div className="bg-pink-400 shadow-lg rounded-lg overflow-hidden hidden lg:block">
          <div className="p-4">
            <h2 className="text-xl font-semibold justify-center">
              Hybrid Meeting
            </h2>
            <p className="mt-2 text-white">
              Merge the physical with the virtual
            </p>
          </div>
          <div className="p-4">
            <button className="bg-blue-200 text-black px-4 py-2 rounded-2xl align-middle justify-between">
              Explore More
            </button>
          </div>
          <div className="h-48 bg-cover bg-center">
            {/* img  */}
          </div>
        </div>
      </div>
      
      <div className="md:w-[19rem] h-auto m-autopt-10 block sm:block md:block lg:hidden xl:hidden 2xl:hidden pt-10">
          <div className="bg-pink-400 shadow-lg rounded-lg overflow-hidden w-full">
            <div className="p-4">
              <h2 className="text-xl font-semibold justify-center">
                Hybrid Meeting
              </h2>
              <p className="mt-2 text-white">
                Merge the physical with the virtual
              </p>
            </div>
            <div className="p-4">
              <button className="bg-blue-200 text-black px-4 py-2 rounded-2xl align-middle justify-between">
                Explore More
              </button>
            </div>
            <div className="h-48 bg-cover bg-center">{/* img */}</div>
          </div>
        </div>
    </div>
  );
}
