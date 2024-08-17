import React, { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '@/styles/componentsStyles/calendarStyles.css';
import { tamilWeekNames, tamilMonthNames } from '@/datas/calender';

// Utility functions
const getTamilWeekName = (date) => {
  const day = date.getDay();
  return tamilWeekNames[day];
};

const getTamilMonthName = (monthIndex) => {
  return tamilMonthNames[monthIndex];
};

const getNumericMonth = (monthIndex) => {
  return monthIndex + 1;
};

const getFormattedDateInfo = (dateStr) => {
  const date = new Date(dateStr);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const month = getTamilMonthName(monthIndex);
  const monthNumber = getNumericMonth(monthIndex);
  const year = date.getFullYear();
  const weekName = getTamilWeekName(date);
  const isoDate = date.toISOString().split('T')[0];

  return { day, month, monthNumber, year, weekName, isoDate };
};

const MainCalender = ({ sendDataToParent, yearChange }) => {

  const calendarRef = useRef(null);
  const [year, setYear] = useState();
  const [calender, setCalender] = useState({
    date: "",
    month: "",
    tMonth: "",
    day: "",
    weekname: "",
    year: "",
  });

  useEffect(() => {
    if (yearChange) {
      setYear(yearChange);
    }
  }, [yearChange]);

  useEffect(() => {
    // Check if year is not null and has the expected structure
    if (year && year.day && year.month && year.year) {
      const calendarApi = calendarRef.current ? calendarRef.current.getApi() : null;

      if (calendarApi) {
        let day = year.day.toString();
        let month = year.month.toString();
        let years = year.year.toString();

        // Format the date string
        const formattedDate = `${years}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

        // Use gotoDate with formattedDate
        calendarApi.gotoDate(formattedDate);

        // console.log('Formatted Date:', formattedDate);
        // console.log('Calendar API:', calendarApi);
      } else {
        console.error('Calendar API is not initialized.');
      }
    } else {
      // console.error('Year object is not valid:', year);
      // Optionally, you can set a default date here
      const calendarApi = calendarRef.current ? calendarRef.current.getApi() : null;
      if (calendarApi) {
        calendarApi.gotoDate('2001-11-20');
      }
    }
  }, [year]);




  // useEffect(() => {
  //   sendDataToParent(calender)/;
  // }, [calender]);


  const [events, setEvents] = useState([
    { title: 'Meeting', date: '2024-07-26' },
    { title: 'Conference', date: '2024-07-28' },
  ]);

  // Handle event click
  const handleEventClick = (info) => {
    const { day, month, monthNumber, year, weekName, isoDate } = getFormattedDateInfo(info.event.startStr);
    const eventData = {
      title: info.event.title,
      isoDate: isoDate,
      numericMonth: monthNumber,
      day: day,
      month: month,
      year: year,
      weekName: weekName
    };
    sendDataToParent(eventData);
  };

  // Handle date click
  const handleDateClick = (info) => {
    const { day, month, monthNumber, year, weekName, isoDate } = getFormattedDateInfo(info.dateStr);
    const dateInfo = {
      date: isoDate,
      month: monthNumber,
      tMonth: month,
      day: day,
      weekname: weekName,
      year: year,
    };
    sendDataToParent(dateInfo);
  };

  const handleDatesSet = (info) => {
    // Extract month and year from the title
    const [monthName, year] = info.view.title.split(' ');

    let tMonthName;
    // Find the index of the month name
    switch (monthName) {
      case 'January':
        tMonthName = "சனவரி"
        break;
      case 'February':
        tMonthName = "பிப்ரவரி"
        break;
      case 'March':
        tMonthName = "மார்ச்"
        break;
      case 'April':
        tMonthName = "ஏப்ரல்"
        break;
      case 'May':
        tMonthName = "மே"
        break;
      case 'June':
        tMonthName = "ஜூன்"
        break;
      case 'July':
        tMonthName = "ஜூலை"
        break;
      case 'August':
        tMonthName = "ஆகஸ்ட்"
        break;
      case 'September':
        tMonthName = "செப்டம்பர்"
        break;
      case 'October':
        tMonthName = "அக்டோபர்"
        break;
      case 'November':
        tMonthName = "நவம்பர்"
        break;
      default:
        tMonthName = "டிசம்பர்"
        break;
    }

    setCalender(prevState => ({
      ...prevState,
      tMonth: tMonthName,
      year: year
    }));
  };


  return (
    <div className="calendar-container ">

      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        datesSet={handleDatesSet}
        className='calendar-component'
      />
    </div>
  )
}

export default MainCalender