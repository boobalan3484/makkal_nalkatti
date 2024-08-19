'use client'
import Header from '@/components/header/Header'
import React, { useEffect, useState } from 'react';

import '@/styles/pagesStyles/home.css';

import Banner from '@/components/banner/Banner';
import Heading from '@/components/heading/Heading';

// import RasiImage from '@/components/rasiIcon/RasiImage'

// import SingleRasi from '@/components/singleRasi/SingleRasi';

// import { twelveRasi } from '@/datas/navbar';

// import { todayRasi } from '@/datas/calender';

import SimpleSlide from '@/components/slide/SimpleSlide';
import VerticalCard from '@/components/verticalCard/VerticalCard';
import VerticalCard02 from '@/components/verticalCard/VerticalCard02';
import PieChart from '@/components/verticalCard/PieChart';
import Slider02 from '@/components/slide/Slider02';
import SubForm from '@/components/subscriptionForm/SubForm';

// import MonthNames from '@/components/calendar/MonthNames';
// import MonthOverview from '@/components/calendar/MonthOverview';
// import DayOverview from '@/components/calendar/DayOverview';

import Footer from '@/components/footer/Footer';

import axios from 'axios';

// import MyCalendar from '@/components/calendar/MyCalendar';

import { tamilWeekNames, tamilMonthNames } from '@/datas/calender';

// import AllRasi from '@/components/rasiIcon/AllRasi';

import YearMonth from '@/components/naatkaati/YearMonth'
import MainCalender from '@/components/naatkaati/MainCalender';
import CalenderOverview from '@/components/naatkaati/CalenderOverview';
import TodayRasipalan from '@/components/naatkaati/TodayRasipalan';

function page() {
  let [rasiDaily, setRasiDaily] = useState();
  let [panchangam, setPanchangam] = useState();
  let [calendarDaily, setCalendarDaily] = useState();
  let [clickedDate, setClickedDate] = useState();

  // console.log('clicked', clickedDate);

  // console.log('user clicked year',clickedDate);
  // Below useEffect for get the current date:
  useEffect(() => {
    const getTamilMonthName = (monthIndex) => tamilMonthNames[monthIndex];
    const getTamilWeekName = (dayIndex) => tamilWeekNames[dayIndex];
    const getCurrentDateInfo = () => {
      const currentDate = new Date();
      const day = currentDate.getDate(); // Day of the month (1-31)
      const monthIndex = currentDate.getMonth(); // Month index (0-11)
      const monthNumber = monthIndex + 1; // Convert to 1-12
      const month = getTamilMonthName(monthIndex); // Tamil month name
      const year = currentDate.getFullYear(); // Year (e.g., 2024)
      const weekName = getTamilWeekName(currentDate.getDay()); // Tamil week name
      const isoDate = currentDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD

      setClickedDate({
        date: isoDate,
        month: monthNumber,
        tMonth: month,
        day: day,
        weekname: weekName,
        year: year
      });

    };
    getCurrentDateInfo();
  }, []);


  // When user click the action fetch data:
  useEffect(() => {
    if (clickedDate) {
      fetchData();
    }
  }, [clickedDate]);

  // Below function for fetch data:
  async function fetchData() {
    try {
      let response = await axios.post(`https://tnreaders.in/mobile/getAllInfo?date=${clickedDate.date}`);
      setRasiDaily(response.data.rasiDaily);
      setCalendarDaily(response.data.calendarDaily);
      if (response.data.panchangam[0] && typeof response.data.panchangam[0].info === 'string') {
        const parsedPanchangam = JSON.parse(response.data.panchangam[0].info);
        setPanchangam(parsedPanchangam);
      } else {
        setPanchangam({});
      }
    } catch (err) {
      console.error('Error fetching data:', err);
    }
  }

  // Based on user change data it will reflect on this parent component:
  function getUseClickedData(params) {
    setClickedDate(params);
  }

  //Below function for update the year value:
  const originalYear = (updatedMonth) => {
    console.log('yearchanged Data', updatedMonth);
    setClickedDate(updatedMonth);
  };

  // changed date function:
  function changedDateFun(params) {
    setClickedDate(params);
  }

  // const [sidebarOpen, setSidebarOpen] = useState(true);

  // const handleToggleSidebar = () => setSidebarOpen(!sidebarOpen);


  return (
    <>
      <Header />

      <section className="container-fluid bg-main-orange h-75">
        <Banner />
      </section>

      <section className='mt-3'>

        <Heading title={'நாட்காட்டி'} />

        <div className="container-fluid d-block mb-4 bg-main-orange">
          <div className="row ">
            {clickedDate !== undefined ? <YearMonth getMonth={clickedDate} changeYear={originalYear} /> :
              <p>Data Loading...</p>}
          </div>
        </div>

        <div className='container'>
          <div className='row gap-4'>
            <div className='d-none d-lg-block col-lg-3 hide-scrollbar shadow-lg rounded'>
              <CalenderOverview passData={rasiDaily} clickedDate={clickedDate} getChangedDate={changedDateFun} time={calendarDaily} vasthunaal={panchangam} />
            </div>
            <div className='col-lg h-auto shadow-lg rounded'>
              <MainCalender sendDataToParent={getUseClickedData} yearChange={clickedDate} />
            </div>
            <div className='col d-lg-none  hide-scrollbar shadow-lg rounded'>
              <CalenderOverview passData={rasiDaily} clickedDate={clickedDate} getChangedDate={changedDateFun} time={calendarDaily} vasthunaal={panchangam} />
            </div>
            <div className='col-lg-3 hide-scrollbar shadow-lg rounded'>
              <TodayRasipalan passData={rasiDaily} />
            </div>
          </div>
        </div>


      </section>









      <section className="container-fluid py-3">
        <Heading title={'ஆன்மிக ஸ்டோரீஸ்'} />
        <div className='container'>
          <SimpleSlide />
        </div>
      </section>
      <Heading title={'கண்ணோட்டம்'} />
      <div className='container'>
        <div className='row'>
          <p className='page-1 text-center text-sm-start'>ஓம் தமிழ் காலண்டர் பயன்பாட்டில் தமிழ் நாட்காட்டி விவரங்களை வெளியிடுவதில் நாங்கள் மகிழ்ச்சியடைகிறோம். இதில், முக்கிய சுபமுகூர்த்த நாட்கள், பண்டிகைகள், விடுமுறை நாட்கள் போன்றவை உள்ளன. உங்கள் ஆண்ட்ராய்டு போனுக்கான சிறந்த தமிழ் நாட்காட்டி. தமிழ் பேசும் மக்கள் மற்றும் தமிழர்களுக்கு இது மிகவும் பயனுள்ளது.</p>
        </div>
      </div>
      {/* vertical card start */}
      <div className='container-fluid mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <div className='left-vertical-card'>
                <VerticalCard />
              </div>
            </div>
            <div className='col-md-4'>
              <img src="https://www.omtamilcalendar.com/auspicious_icons/website-mobile_2.png" className='img-fluid' alt="image" />
            </div>
            <div className='col-md-4'>
              <div className='right-vertical-card'>
                <VerticalCard02 />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* vertical card end */}

      {/* Background img start */}
      <div className='container-fluid mt-5'>
        <div className='bg-img '>
          <div className='container '>
            <div className='row'>
              <div className='col-md-6 d-flex justify-content-center justify-content-md-start align-items-center'>
                <div className='playbtn-parent'>
                  <i className="fa-solid fa-play"></i>
                </div>
              </div>
              <div className='col-md-6'>
                <h3 className='section-title-1 mb-5'>செயலியை பயன்படுத்தும் முறை</h3>
                <div className='row my-4'>
                  <PieChart />
                  <PieChart />
                  <PieChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Background img end */}

      {/* app pitchers start */}
      <Heading title={'செயலியின் படங்கள்'} />
      {/* app pitchers end */}

      <div className='container p-0 slider-images'>
        <Slider02 />
      </div>

      {/* custpmer review start */}
      {/* <Heading title={'ப்ளே ஸ்டோர் விமர்சனம்'} /> */}
      {/* custpmer review end */}

      {/* subscription start */}
      <div className='container my-5'>
        <div className='row'>
          <div className='col'>
            <h5 className='text-center'>சமிபத்திய புதுப்பித்தலை தெரிந்து கொள்ள குழுவில் சேரவும்</h5>
            <SubForm />
          </div>
        </div>
      </div>
      {/* subscription end */}

      {/* footer start */}
      <div className='container-fluid'>
        <Footer />
      </div>
      {/* footer end */}
    </>
  )
}

export default page