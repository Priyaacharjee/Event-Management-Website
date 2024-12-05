import  { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles

const CustomCalendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
    console.log("Selected Date:", selectedDate);
  };

  return (
    <div className="calendar-container">
      <Calendar
        onChange={handleDateChange}
        value={date}
        minDetail="month" // Only show months and below
        tileClassName={({ date, view }) => {
          // Add custom classes for specific dates
          if (date.getDate() === 1 || date.getDate() === 20) {
            return "highlight";
          }
          return null;
        }}
      />
    </div>
  );
};

export default CustomCalendar;
