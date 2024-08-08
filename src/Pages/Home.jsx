import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Company_card from "../Components/Company_card";
import Upcoming_event from "../Components/UpcomingEvents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faCalendar,
  faGlobe,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import FreqtQuestion from "../Components/FreqtQuestion";

export default function Home() {
  return (
    <>
      {/* ----------------------------------------------------------------------------- HEADER ------------------------------------------------------------- */}
       <Header />

       {/* -----------------------------------------------------------------------------EVENT TYPES --------------------------------------------------------- */}
     <div id="services" className="bg-slate-900 w-full h-80 px-32 py-20">
        {/* event cards */}
      </div>

       {/* ---------------------------------------------------------------------------- FEATURES --------------------------------------------------------- */}
      <div id="features" className="justify-center items-center flex-col flex">
        <div className="flex flex-col text-center sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-row 2xl:flex 2xl:flex-row px-10 py-14 xl:py-24 items-center h-auto">
          <div className="grid grid-col-2 w-auto text-2xl sm:text-3xl md:text-4xl font-bold px-10 pb-8">
            Manage, promote, and track your event— all in one platform
          </div>
          <div className="px-10 text-md sm:text-lg">
            Maximize your event's potential with our powerful, all-in-one
            management solution. With <strong>Vibrant Connection</strong>, you
            can effortlessly plan, execute, and evaluate your event's success.{" "}
            <br></br>
            <br></br>Simplify your workflow, amplify your impact, and leave a
            lasting impression on your attendees.
          </div>
        </div>

{/* ------------------------------------------------------------------------------ UPCOMING  EVENTS ------------------------------------------------------------ */}
        <Upcoming_event/>

{/* ------------------------------------------------------------------------------ COMPANY NAMES ------------------------------------------------------------ */}
        <div className="h-auto">
          <Company_card />
        </div>

  {/*----------------------------------------------------------------   ANALYTICS      ---------------------------------------------------------------------- */}
        <div id="analytics" className="grid-cols-2 md:grid-cols-4 grid w-[90%] bg-gradient-to-r from-[#355070] to-[#6D597A] h-auto rounded-xl text-white items-center justify-center md:py-10">
          <div className="flex flex-col h-full justify-center m-auto py-10 w-[40%]">
            <div>
              <FontAwesomeIcon
                icon={faCalendarCheck}
                style={{ color: "#ffffff" }}
              />
            </div>
            <div className="2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl font-bold">
              100,000+
            </div>
            <div>Events</div>
          </div>
          <div className="flex flex-col h-full justify-center m-auto py-10 w-[40%]">
            <div>
              <FontAwesomeIcon icon={faCalendar} style={{ color: "#ffffff" }} />
            </div>
            <div className="2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl font-bold">
              50,000+
            </div>
            <div>Event Palnner</div>
          </div>
          <div className="flex flex-col h-full justify-center m-auto py-10 w-[40%]">
            <div>
              <FontAwesomeIcon icon={faGlobe} style={{ color: "#ffffff" }} />
            </div>
            <div className="2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl font-bold">
              100+
            </div>
            <div>Country</div>
          </div>
          <div className="flex flex-col h-full justify-center m-auto py-10 w-[40%]">
            <div>
              <FontAwesomeIcon icon={faUsers} style={{ color: "#ffffff" }} />
            </div>
            <div className="2xl:text-4xl xl:text-3xl lg:text-3xl md:text-2xl sm:text-2xl text-2xl font-bold">
              100K+
            </div>
            <div>Attendees</div>
          </div>
        </div>
      </div>

 {/*------------------------------------------------------------------- GET STARTED-------------------------------------------------------------------------------- */}
      <div className="flex flex-col items-center pt-20 w-[50%] sm:w-[40%] md:w-[45%] lg:w-[44%] xl:w-[36%] 2xl:w-[40%] text-center m-auto">
        <div className="2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-2xl font-sans font-bold">
          Elevate your Events, elevate Our brand
        </div>
        <div className="h-[10%] w-[75%] hover:w-[76%] sm:w-[65%] sm:hover:w-[66%] md:w-[50%] md:hover:w-[51%] lg:w-[40%] lg:hover:w-[41%]">
          <button className="mt-10 h-full w-full bg-blue-400 p-5 rounded-md font-bold 2xl:text-3xl xl:text-2xl md:text-2xl sm:text-xl text-xl hover:bg-blue-500">
            Get Started
          </button>
        </div>
      </div>

{/*--------------------------------------------------------------     Frequently asked question    ----------------------------------------------------- */}
      <FreqtQuestion />

{/*------------------------------------------------------------------------      FOOTER    --------------------------------------------------------------- */}
      <Footer />
    </>
  );
}

