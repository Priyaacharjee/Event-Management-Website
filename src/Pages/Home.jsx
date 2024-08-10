import React from "react";
import Slider from "../Components/Slider"; // Adjust the path if necessary
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
import Gallery_Card from "../Components/Gallery_card";
import Event_card from "../components/Event_card";

export default function Home() {
  return (
    <>
      {/*HEADER ------------------------------------------------------------- */}
      <Header />

      {/*EVENT TYPES --------------------------------------------------------- */}
      <div
        id="services"
        className="bg-slate-900 w-full h-auto px-20 text-center"
      >
        {/* event cards */}
        <Event_card />
      </div>

      {/*FEATURES 1--------------------------------------------------------- */}
      <div id="features" className="justify-center items-center flex-col flex">
        <div className="flex flex-col text-center sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-row 2xl:flex 2xl:flex-row px-10 py-14 xl:py-24 items-center h-auto">
          <div className="grid grid-col-2 w-auto text-2xl sm:text-3xl md:text-4xl font-bold px-10 pb-8 animate-assembleText">
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

        {/* UPCOMING EVENTS ------------------------------------------------------------ */}
        <Upcoming_event
          name="Student Enrichment Program"
          des="The Student Enrichment Program is a dynamic initiative aimed at equipping students with essential skills and knowledge through workshops, mentoring, and hands-on experiences."
          date="2023-03-15"
          time="14:00"
          venue="Kolkata"
        />

        {/* FEATURES 2 ------------------------------------------------------------ */}
        <div id="highlight" className="py-16 px-6 sm:px-8 md:px-10 lg:px-12 xl:px-14">
            <div className="mt-16 mb-1 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">

                  {/* Image Slider Column */}
                  <div id="imuu" className="flex justify-center rounded-lg">
                    <Slider />
                  </div>

                  {/* Text Column */}
                  <div className="flex flex-col text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4">
                      Discover Our Key Features
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                      Explore the unique features that set us apart from the competition. Our platform is designed to cater to your every need, ensuring a seamless and successful event experience.
                    </p>
                  </div>

                  {/* Overlay Image - Not responsive till now */}
                  <div
                    style={{
                      position: "absolute",
                      top: "357%",
                      left: "47%",
                      transform: "translateX(-50%)",
                      zIndex: 10,
                    }}
                  >
                      <div className="w-[400px] h-12 bg-gradient-to-r from-blue-900 via-slate-900 to-cyan-700 rounded-3xl mt-5 text-white text-2xl flex flex-col items-center">hi shreya</div>
                      <div className="w-[300px] h-12 bg-gradient-to-r from-blue-900 via-slate-900 to-cyan-700 rounded-3xl mt-5 text-white text-2xl flex flex-col items-center">hi shreya</div>
                      <div className="w-[200px] h-12 bg-gradient-to-r from-blue-900 via-slate-900 to-cyan-700 rounded-3xl mt-5 text-white text-2xl flex flex-col items-center">hi shreya</div>            
                  </div> 
          </div>
        </div>

        {/* Gallery card */}
        <Gallery_Card />

        {/* COMPANY NAMES ------------------------------------------------------------ */}
        <div className="h-auto w-[85%]">
          <Company_card />
        </div>

        {/*ANALYTICS ---------------------------------------------------------------------- */}
        <div
          id="analytics"
          className="grid-cols-2 md:grid-cols-4 grid w-[90%] bg-gradient-to-r from-slate-900 to-blue-800 h-auto rounded-xl text-white items-center justify-center md:py-10"
        >
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
            <div>Event Planner</div>
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

      {/* Get Started-------------------------------------------------------------------------------- */}
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

      {/* Frequently asked question--------------------------------------------------------------- */}
      <FreqtQuestion />
      <Footer />
    </>
  );
}
