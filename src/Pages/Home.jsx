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

export default function Home() {
  return (
    <>
      <Header />
      <div className="bg-slate-900 w-full h-80 px-32 py-20">
        {/* event cards */}
      </div>

      <div className="justify-center items-center flex-col flex">
        <div className="flex py-10 px-20 items-center h-96">
          <div className="w-3/5">Play run & Analyze you Events</div>
          <div className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </div>
        </div>

        <div className="w-[90%] bg-gradient-to-r from-[#011936] to-[#243b55] h-80 rounded-xl px-32 py-20">
          {/* Gallery crd slider */}
        </div>

        <div className="h-auto"><Company_card/></div>

        <div className="w-[90%] bg-gradient-to-r from-[#355070] to-[#6D597A] h-60 rounded-xl px-32 py-10 flex text-white">
          {/* Analytics */}
          <div className="flex flex-col w-[25%] h-full justify-center pl-24  space-y-[2px]">
            <div>
              <FontAwesomeIcon
                icon={faCalendarCheck}
                style={{ color: "#ffffff" }}
              />
            </div>
            <div className="text-3xl font-bold">100,000+</div>
            <div>Events</div>
          </div>
          <div className="flex flex-col w-[25%] h-full justify-center pl-24  space-y-[2px]">
            <div>
              <FontAwesomeIcon icon={faCalendar} style={{ color: "#ffffff" }} />
            </div>
            <div className="text-3xl font-bold">50,000+</div>
            <div>Event Palnner</div>
          </div>
          <div className="flex flex-col w-[25%] h-full justify-center pl-24  space-y-[2px]">
            <div>
              <FontAwesomeIcon icon={faGlobe} style={{ color: "#ffffff" }} />
            </div>
            <div className="text-3xl font-bold">100+</div>
            <div>Country</div>
          </div>
          <div className="flex flex-col w-[25%] h-full justify-center pl-24  space-y-[2px]">
            <div>
              <FontAwesomeIcon icon={faUsers} style={{ color: "#ffffff" }} />
            </div>
            <div className="text-3xl font-bold">100K+</div>
            <div>Attendees</div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
