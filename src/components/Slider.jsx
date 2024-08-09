import React, { useState, useEffect } from "react";

const images = [
    "https://www.shutterstock.com/image-photo/busy-diverse-professional-business-team-600nw-2380776443.jpg",
    "https://www.shutterstock.com/image-photo/young-team-manager-woman-talking-600nw-2414833253.jpg",  
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      style={{
        position: "relative",
        width: "60%",
        height: "60%",
        maxWidth: "100%",
        borderRadius: "1rem",
        overflow: "hidden",
        margin: "auto",
      }}
    >
      <img
        src={images[currentIndex]}
        alt="Slide"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "1rem",
          transition: "opacity 0.5s ease-in-out",
        }}
      />
    </div>
  );
};

export default Slider;
