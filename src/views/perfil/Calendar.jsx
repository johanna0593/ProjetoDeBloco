import React from "react";
import Calendar from "react-calendar"; // Instalar o react-calendar

const CalendarComponent = () => {
  const [date, setDate] = React.useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendar-container">
      <h3>Calendário</h3>
      <Calendar value={date} onChange={handleDateChange} />
      {/* Aqui você pode adicionar lógica para adicionar eventos */}
    </div>
  );
};

export default CalendarComponent;
