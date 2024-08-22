import React from "react";
import inPerson_video from "../assets/inPerson_video.mp4";
import virtual from "../assets/virtual.mp4";
import hybrid from "../assets/hybrid.mp4";

const Event = ({ event_type, des, video }) => {
  return (
    <>
      <div className="pb-6 bg-gradient-to-r from-indigo-800 via-purple-300 to-blue-600 rounded-xl overflow-hidden">
        <div className="p-4">
          <h2 className="text-2xl font-semibold justify-center font-serif">
            {event_type}
          </h2>
          <p className="mt-4 text-white">{des}</p>
        </div>
        <div className="pt-2 pb-2">
        <button class="px-2 z-10 py-2 bg-rose-400 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-xl">
            Explore More
          </button>
        </div>
        <div className="h-52 w-full bg-cover bg-center flex justify-center mt-2">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover overflow-hidden h-52 w-[80%] rounded-lg p-[10%]"
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-y-10 md:gap-x-5 lg:gap-x-4 xl:gap-x-6 xl:gap-y-6 2xl:gap-x-6">
        {/* In-person Events--------------------------------------------- */}
        
        <Event
          event_type="In-Person Meeting"
          des="Stay on top of it all at the venue!!"
          video={inPerson_video}
        />
        

        {/* Virtual Events--------------------------------------------- */}
        
        <Event
          event_type="Virtual Meeting"
          des="Transcend webinars and workshops!!"
          video={virtual}
        />
        

        {/* Hybrid Event--------------------------------------------- */}
        <div className="w-full h-full hidden lg:block">
          <Event
            event_type="Hybrid Meeting"
            des="Unite the real with digital world!!"
            video={hybrid}
          />
        </div>
      </div>


      {/* Onpy For md & sm Screen--------------------------------------- */}
      <div className="md:w-[48%] h-auto m-autopt-10 block sm:block md:block lg:hidden xl:hidden 2xl:hidden sm:pt-10 md:pt-5">
        <Event
          event_type="Hybrid Meeting"
          des="Unite the real with digital world!!"
          video={hybrid}
        />
      </div>
    </div>
  
  );
}