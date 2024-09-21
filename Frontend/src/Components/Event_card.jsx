import React from "react";
import inPerson_video from "../assets/inPerson_video.mp4";
import virtual from "../assets/virtual.mp4";
import hybrid from "../assets/hybrid.mp4";

const Event = ({ event_type, des, video }) => {
  return (
    <>
      <div className="pb-7 bg-gradient-to-r from-indigo-800 via-purple-300 to-blue-600 rounded-xl overflow-hidden">
        <div className="p-4">
          <h2 className="text-2xl font-semibold justify-center font-serif">
            {event_type}
          </h2>
          <p className="mt-4 text-white">{des}</p>
        </div>
        <div className="pt-2 pb-2">
          <button className="bg-blue-200 text-black px-4 py-2 rounded-2xl align-middle justify-between">
            Explore More
          </button>
        </div>
        <div className="h-52 w-full bg-cover bg-center flex justify-center mt-2 border-2 border-red-500 items-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover overflow-hidden h-48 w-[70%] rounded-lg border-2 border-red-500"
          >
            <source src={video} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default function Event_card() {
  return (
    <div className="py-5 flex flex-col items-center justify-center pb-24">
      <h1 className="text-3xl font-bold mb-6 text-white py-10 pb-12">
        The minimalist way to host all your events successfully!!!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 sm:gap-y-10 md:gap-x-9 lg:gap-x-9 xl:gap-x-20 2xl:gap-x-28">
        {/* In-person Events--------------------------------------------- */}
        <Event
          event_type="In-Person"
          des="Keep it all together at the venue"
          video={inPerson_video}
        />

        {/* Virtual Events--------------------------------------------- */}
        <Event
          event_type="Virtual Meeting"
          des="Go beyond webinars and workshops"
          video={virtual}
        />

        {/* Hybrid Event--------------------------------------------- */}
        <div className="w-full h-full hidden lg:block">
          <Event
            event_type="Hybrid Meeting"
            des="Merge the physical with the virtual"
            video={hybrid}
          />
        </div>
      </div>

      {/* Onpy For md & sm Screen--------------------------------------- */}
      <div className="md:w-[48%] h-auto m-autopt-10 block sm:block md:block lg:hidden xl:hidden 2xl:hidden pt-10">
        <Event
          event_type="Hybrid Meeting"
          des="Merge the physical with the virtual"
          video={hybrid}
        />
      </div>
    </div>
  );
}