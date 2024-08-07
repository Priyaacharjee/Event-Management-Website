import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Company_card from "../Components/Company_card";
// import Gallery_Card from "../Components/Gallery_card";

export default function Home() {
  return (
    <>
      <Header />
      <Company_card/>
      {/* <Gallery_Card /> */}
      <Footer/>
    </>
  );
}
