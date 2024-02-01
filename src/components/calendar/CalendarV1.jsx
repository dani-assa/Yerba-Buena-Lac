import React, { useState, useEffect } from "react";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import axios from "axios";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/es";

dayjs.locale("es");

const CalendarV1 = () => {
  const localizer = dayjsLocalizer(dayjs);

  const events = [
    {
      start: dayjs("2024-01-30T17:00:00").toDate(),
      end: dayjs("2024-01-30T18:00:00").toDate(),
      title: "Evento 1",
    },
  ];
  return (
    <div
      style={{
        height: "80vh",
        width: "80vw",
      }}
    >
      <Calendar
        localizer={localizer}
        events={events}
        min={dayjs("2024-01-30T08:00:00").toDate()}
        max={dayjs("2024-01-30T18:00:00").toDate()}
        formats={{
          dayHeaderFormat: (date) => {
            return dayjs(date).format("DD/MM/YYYY");
          },
        }}
        messages={{
          next: "Siguiente",
          previous: "Anterior",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
        }}
      />
    </div>
  );
};

export default CalendarV1;
