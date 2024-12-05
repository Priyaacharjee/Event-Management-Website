// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";

// // Example events array with full dates and times
// const events = [
//   { date: "02/12/2024", time: "7pm" },
//   { date: "03/12/2024", time: "8pm" },
//   { date: "04/12/2024", time: "9pm" },
//   { date: "05/12/2024", time: "10pm" },
// ];

// const CustomCalendar = () => {
//   const [date, setDate] = useState(new Date());
//   const [tooltipContent, setTooltipContent] = useState(""); // Tooltip content
//   const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 }); // Tooltip position

//   // Format a date object as "DD/MM/YYYY"
//   const formatDate = (date) => {
//     const day = String(date.getDate()).padStart(2, "0");
//     const month = String(date.getMonth() + 1).padStart(2, "0");
//     const year = date.getFullYear();
//     return `${day}/${month}/${year}`;
//   };

//   // Check if a given date has an event
//   const isEventDate = (date) => {
//     const formattedDate = formatDate(date);
//     return events.some((event) => event.date === formattedDate);
//   };

//   // Handle mouse entering a date tile
//   const handleMouseEnter = (date, e) => {
//     const formattedDate = formatDate(date);
//     const event = events.find((event) => event.date === formattedDate);

//     if (event) {
//       setTooltipContent(event.time); // Set event time in tooltip
//       setTooltipPosition({ top: e.clientY + 10, left: e.clientX + 10 }); // Set tooltip position
//     }
//   };

//   // Handle mouse leaving a date tile
//   const handleMouseLeave = () => {
//     setTooltipContent(""); // Clear tooltip content
//   };

//   return (
//     <div style={{ position: "relative" }}>
//       <Calendar
//         onChange={setDate}
//         value={date}
//         tileClassName={({ date, view }) => {
//           if (view === "month" && isEventDate(date)) {
//             return "highlight"; // Add a highlight class to event dates
//           }
//           return null;
//         }}
//         tileContent={({ date, view }) => {
//           if (view === "month" && isEventDate(date)) {
//             return <div style={{ fontSize: "10px" }}>📅</div>; // Add an emoji/icon for event dates
//           }
//           return null;
//         }}
//         onMouseOver={(e) => {
//           const target = e.target.closest(".react-calendar__tile");
//           if (target) {
//             const tileDate = target.getAttribute("aria-label");
//             if (tileDate) {
//               const date = new Date(tileDate);
//               handleMouseEnter(date, e);
//             }
//           }
//         }}
//         onMouseOut={handleMouseLeave}
//       />

//       {/* Tooltip */}
//       {tooltipContent && (
//         <div
//           style={{
//             position: "absolute",
//             top: tooltipPosition.top,
//             left: tooltipPosition.left,
//             background: "black",
//             color: "white",
//             padding: "5px",
//             borderRadius: "5px",
//             fontSize: "12px",
//             pointerEvents: "none", // Prevent tooltip from interfering with mouse events
//           }}
//         >
//           Event Time: {tooltipContent}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CustomCalendar;

import  { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// Example events array with full dates and times
const events = [
  { date: "02/12/2024", time: "7pm" },
  { date: "03/12/2024", time: "8pm" },
  { date: "04/12/2024", time: "9pm" },
  { date: "05/12/2024", time: "10pm" },
];

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });

  // Format a date object as "DD/MM/YYYY"
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Check if a given date has an event
  const isEventDate = (date) => {
    const formattedDate = formatDate(date);
    return events.some((event) => event.date === formattedDate);
  };

  // Handle mouse entering a date tile
  const handleMouseEnter = (tileDate, e) => {
    const formattedDate = formatDate(tileDate);
    const event = events.find((event) => event.date === formattedDate);

    if (event) {
      setTooltipContent(event.time);
      setTooltipPosition({ top: e.clientY + 10, left: e.clientX + 10 });
    }
  };

  // Handle mouse leaving a date tile
  const handleMouseLeave = () => {
    setTooltipContent("");
  };

  return (
    <div style={{ position: "relative" }} className="calendar-container">
      <Calendar
        onChange={setDate}
        value={date}
        tileClassName={({ date, view }) => {
          if (view === "month" && isEventDate(date)) {
            return "highlight"; // Highlight event dates
          }
          return null;
        }}
        tileContent={({ date, view }) => {
          if (view === "month" && isEventDate(date)) {
            return <div className="event-icon">📅</div>; // Add an emoji/icon for event dates
          }
          return null;
        }}
        onMouseOver={({ target }) => {
          const parentTile = target.closest(".react-calendar__tile");
          if (parentTile) {
            const tileDate = parentTile.getAttribute("aria-label");
            if (tileDate) {
              const parsedDate = new Date(tileDate);
              handleMouseEnter(parsedDate, target);
            }
          }
        }}
        onMouseOut={handleMouseLeave}
      />

      {/* Tooltip */}
      {tooltipContent && (
        <div
          style={{
            position: "absolute",
            top: tooltipPosition.top,
            left: tooltipPosition.left,
            background: "black",
            color: "white",
            padding: "5px",
            borderRadius: "5px",
            fontSize: "12px",
            pointerEvents: "none",
          }}
          className="tooltip"
        >
          Event Time: {tooltipContent}
        </div>
      )}
    </div>
  );
};

export default CustomCalendar;

