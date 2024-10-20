// import React from "react";
// import inPerson_video from "../assets/inPerson_video.mp4";
// import virtual from "../assets/virtual.mp4";
// import hybrid from "../assets/hybrid.mp4";

// const Event = ({ event_type, des, video }) => {
//   return (
//     <>
//       <div className="pb-6 bg-gradient-to-r from-indigo-800 via-purple-300 to-blue-600 rounded-xl overflow-hidden">
//         <div className="p-4">
//           <h2 className="text-2xl font-semibold justify-center font-serif">
//             {event_type}
//           </h2>
//           <p className="mt-4 text-white">{des}</p>
//         </div>
//         <div className="pt-2 pb-2">
//         <button class="px-2 z-10 py-2 bg-rose-400 rounded-md text-white relative font-semibold font-sans after:-z-20 after:absolute after:h-1 after:w-1 after:bg-rose-800 after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 [text-shadow:3px_5px_2px_#be123c;] hover:[text-shadow:2px_2px_2px_#fda4af] text-xl">
//             Explore More
//           </button>
//         </div>
//         <div className="h-52 w-full bg-cover bg-center flex justify-center mt-2  items-center">
//           <video
//             autoPlay
//             loop
//             muted
//             playsInline
//             className="object-cover overflow-hidden h-48 w-[75%] rounded-lg "
//           >
//             <source src={video} type="video/mp4" />
//           </video>
//         </div>
//       </div>

//     </>
//   );
// };

// export default function Event_card() {
//   return (
//     <div className="py-5 flex flex-col items-center justify-center pb-24">
//       <h1 className="text-3xl font-bold mb-6 text-white py-10 pb-12">
//         The minimalist way to host all your events successfully!!!
//       </h1>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-y-10 md:gap-x-5 lg:gap-x-4 xl:gap-x-6 xl:gap-y-6 2xl:gap-x-6 gap-y-3">
//         {/* In-person Events--------------------------------------------- */}
        
//         <Event
//           event_type="In-Person Meeting"
//           des="Stay on top of it all at the venue!!"
//           video={inPerson_video}
//         />
        

//         {/* Virtual Events--------------------------------------------- */}
        
//         <Event
//           event_type="Virtual Meeting"
//           des="Transcend webinars and workshops!!"
//           video={virtual}
//         />
        

//         {/* Hybrid Event--------------------------------------------- */}
//         <div className="w-full h-full hidden lg:block">
//           <Event
//             event_type="Hybrid Meeting"
//             des="Unite the real with digital world!!"
//             video={hybrid}
//           />
//         </div>
//       </div>


//       {/* Only For md & sm Screen--------------------------------------- */}
//       <div className="md:w-[48%] h-auto m-autopt-10 block sm:block md:block lg:hidden xl:hidden 2xl:hidden sm:pt-10 md:pt-5 mt-3">
//         <Event
//           event_type="Hybrid Meeting"
//           des="Unite the real with digital world!!"
//           video={hybrid}
//         />
//       </div>
//     </div>
  
//   );
// }


import React from "react";
import inPerson_video from "../assets/inPerson_video.mp4";
import virtual from "../assets/virtual.mp4";
import hybrid from "../assets/hybrid.mp4";
import { useNavigate } from "react-router-dom";

const Event = ({ event_type, des, video, navigateTo }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="pb-6 bg-gradient-to-br from-indigo-600 to-blue-300 rounded-xl overflow-hidden">
        <div className="p-4">
          <h2 className="text-2xl font-semibold justify-center font-serif">
            {event_type}
          </h2>
          <p className="mt-4 text-white">{des}</p>
        </div>
        <div className="pt-2 pb-2 -z-50">
          <button type="submit" class="btn2" onClick={() => navigate(navigateTo)}>
          <button type="submit" className="btn2">
            Explore More
            <svg viewBox="0 0 16 19" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"/>
            </svg>
          </button>

        </div>
        <div className="h-52 w-full bg-cover bg-center flex justify-center mt-2 items-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="object-cover overflow-hidden h-48 w-[75%] rounded-lg "
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
      <h1 className="text-lg md:text-2xl lg:text-3xl font-bold mb-6 text-indigo-400 pt-8 pb-8">
        <p>"The minimalist way to host all your events successfully"</p>
        <div className="w-[100%] h-1 border-b-4 border-yellow-400 m-2 rounded-2xl md:mt-4 mb-12"></div>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 sm:gap-y-10 md:gap-x-5 lg:gap-x-4 xl:gap-x-6 xl:gap-y-6 2xl:gap-x-6 gap-y-3">
        {/* In-person Events--------------------------------------------- */}
        <div className="w-full h-full ">
        <Event
          event_type="In-Person Meeting"
          des="Unite every detail at the venue!!"
          video={inPerson_video}
          navigateTo="/inpersonevent"
        />
        </div>
        

        {/* Virtual Events--------------------------------------------- */}
        <div className="w-full h-full">
        <Event
          event_type="Virtual Meeting"
          des="Move beyond the basics!!"
          video={virtual}
          navigateTo="/virtualevent"
        />
        </div>
        

        {/* Hybrid Event--------------------------------------------- */}
        <div className="w-full h-full hidden lg:block">
          <Event
            event_type="Hybrid Meeting"
            des="Unite the real world with digital world!!"
            video={hybrid}
            navigateTo="/hybridevent"
          />
        </div>
      </div>


      {/* Only For md & sm Screen--------------------------------------- */}
      <div className="md:w-[48%] h-auto m-autopt-10 block sm:block md:block lg:hidden xl:hidden 2xl:hidden sm:pt-10 md:pt-5 mt-3">
        <Event
          event_type="Hybrid Meeting"
          des="Unite the real world with digital world!!"
          video={hybrid}
        />
      </div>
    </div>
  
  );
}