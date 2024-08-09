import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function UpcomingEvents() {
  return (
    <>
      <div className="w-full bg-gradient-to-r from-[#011936] to-[#243b55] h-[30rem] px-32 py-20"></div>
      <div className="w-[80%] h-auto m-auto mt-[-25rem] grid-cols-1">
        <div className="bg-gradient-to-r from-[#011936] to-[#243b55] h-[20%] py-10 text-white flex items-center justify-end pr-20 font-serif">
          <div className="px-5 text-2xl hover:text-blue-200 hover:cursor-pointer hover:text-[25px]">
            Upcoming Events
          </div>
          <div className="px-5 hover:text-blue-200 hover:cursor-pointer text-white">
            <FontAwesomeIcon icon={faArrowRight} className="hover:text-xl"/>
          </div>
        </div>
        <div className="bg-slate-200 h-[80%] grid grid-cols-2 px-10 py-5">
          <div className=""></div>
          <div className="">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Why do we use it? It is
            a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose (injected humour and the
            like).
          </div>
        </div>
      </div>
      <div className="h-[27rem] w-[30%] mt-[-31rem] ml-[-40%] ">
        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/grow-your-business-webinar-instagram-post-design-template-6da4a1a4774fbca08910aa6001dbf484_screen.jpg?ts=1687284357" alt=""></img>
      </div>
    </>
  );
}