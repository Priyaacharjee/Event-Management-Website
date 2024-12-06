import { useState } from 'react';

const events = [
  { date: "02/12/2024", time: "10am" },
  { date: "03/12/2024", time: "2pm" },
  { date: "04/12/2024", time: "6pm" },
  { date: "05/12/2024", time: "11am" },
];

const CustomCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const today = new Date();

  const startOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const prevMonth = () =>
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      )
    );

  const nextMonth = () =>
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      )
    );

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const blankDays = Array(startOfMonth.getDay()).fill(null);

  // Format date for comparison
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-GB"); // Format as DD/MM/YYYY

  // Check if a date has an event
  const getEventForDate = (day) => {
    const formattedDate = formatDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    );
    return events.find((event) => event.date === formattedDate);
  };

  // Check if a date is today
  const isToday = (day) => {
    const currentDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    return (
      currentDay.toDateString() === today.toDateString()
    );
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button className="nav-btn" onClick={prevMonth}>&lt;</button>
        <span className="month-display">
          {currentDate.toLocaleString('default', { month: 'long' })}{' '}
          {currentDate.getFullYear()}
        </span>
        <button className="nav-btn" onClick={nextMonth}>&gt;</button>
      </div>

      <div className="calendar-grid">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="day-header">{day}</div>
        ))}
        {blankDays.map((_, index) => (
          <div key={index} className="day-cell blank"></div>
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1;
          const event = getEventForDate(day);
          return (
            <div
              key={day}
              className={`day-cell ${isToday(day) ? "current-day" : ""} ${event ? "event-day" : ""}`}
              onMouseEnter={() => setHoveredEvent(event)}
              onMouseLeave={() => setHoveredEvent(null)}
            >
              {day}
              {hoveredEvent && hoveredEvent.date === formatDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day)) && (
                <div className="tooltip">{hoveredEvent.time}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomCalendar;






