import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Company_card from "../Components/Company_card";
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
      <Header />
      <div className="bg-slate-900 w-full h-80 px-32 py-20">
        {/* event cards */}
      </div>

      <div className="justify-center items-center flex-col flex">
        <div className="flex flex-col text-center sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-row 2xl:flex 2xl:flex-row py-10 px-10 items-center h-96">
          <div className="grid grid-col-2 w-auto text-4xl font-bold px-10">Manage, promote, and track your event— all in one platform</div>
          <div className="px-10 2xl:py-0 xl:py-0 lg:py-8 md:py-8 sm:py-8 py-8 text-lg">
          Maximize your event's potential with our powerful, all-in-one management solution. With <strong>Vibrant Connection</strong>, you can effortlessly plan, execute, and evaluate your event's success. <br></br><br></br>Simplify your workflow, amplify your impact, and leave a lasting impression on your attendees.
          </div>
        </div>

        <div className="w-[90%] bg-gradient-to-r from-[#011936] to-[#243b55] h-80 rounded-xl px-32 py-20">
          {/* Gallery crd slider */}
        </div>

        <div className="h-auto">
          <Company_card />
        </div>

        {/* Analytics---------------------------------------------------------------------------------- */}
        <div className="grid-cols-2 md:grid-cols-4 grid w-[90%] bg-gradient-to-r from-[#355070] to-[#6D597A] h-auto rounded-xl text-white items-center justify-center">
          <div className="flex flex-col h-full justify-center m-auto py-10 w-auto">
            <div>
              <FontAwesomeIcon
                icon={faCalendarCheck}
                style={{ color: "#ffffff" }}
              />
            </div>
            <div className="text-3xl font-bold">100,000+</div>
            <div>Events</div>
          </div>
          <div className="flex flex-col h-full justify-center m-auto py-10 w-auto">
            <div>
              <FontAwesomeIcon icon={faCalendar} style={{ color: "#ffffff" }} />
            </div>
            <div className="text-3xl font-bold">50,000+</div>
            <div>Event Palnner</div>
          </div>
          <div className="flex flex-col h-full justify-center m-auto py-10 w-auto">
            <div>
              <FontAwesomeIcon icon={faGlobe} style={{ color: "#ffffff" }} />
            </div>
            <div className="text-3xl font-bold">100+</div>
            <div>Country</div>
          </div>
          <div className="flex flex-col h-full justify-center m-auto py-10 w-auto">
            <div>
              <FontAwesomeIcon icon={faUsers} style={{ color: "#ffffff" }} />
            </div>
            <div className="text-3xl font-bold">100K+</div>
            <div>Attendees</div>
          </div>
        </div>
      </div>

      {/* <div className="w-[30%] "> */}
        <div className="flex flex-col items-center pt-20 w-[90%] sm:w-[80%] md:w-[59%] lg:w-[44%] xl:w-[36%] 2xl:w-[30%] text-center m-auto">
          <div className="text-5xl font-sans font-bold">
            Elevate your Events, elevate Our brand
          </div>
          <div className="h-[10%] w-[50%] hover:w-[51%]">
            <button className="mt-10 h-full w-full bg-blue-400 p-5 rounded-md font-bold text-2xl hover:bg-blue-500">
              Get Started
            </button>
          </div>
        {/* </div> */}
      </div>

      {/* Frequently asked question--------------------------------------------------------------- */}
      <FreqtQuestion />
      <Footer />
    </>
  );
}
