import React, { useEffect, useState } from 'react';
import '@/styles/componentsStyles/calendarStyles.css';
import { tamilMonthNames } from '@/datas/calender/';
import MonthList from './MonthList';

function MonthNames({ getMonth, changeYear }) {
  const [currMonth, setCurrMonth] = useState(''); //january
  const [newMonth, setNewMonth] = useState(getMonth || {});
  // const [monthNum, setMonthNum] = useState(undefined);

  // Update `currMonth` and `newMonth` when `getMonth` changes
  useEffect(() => {
    if (getMonth) {
      const filterMonth = tamilMonthNames.find(month => month === getMonth.tMonth);
      setCurrMonth(filterMonth || '');
      setNewMonth(getMonth); // Update newMonth with the latest prop value
    }
  }, [getMonth]);

  // Update the active month class
  useEffect(() => {
    const monthItems = document.querySelectorAll('.calendar-months li');
    monthItems.forEach(item => {
      if (item.innerText === currMonth) {
        item.classList.add('active-month');
      } else {
        item.classList.remove('active-month');
      }
    });
  }, [currMonth]);

  function handleYearChange(direction) {
    if (newMonth) {
      const newYear = direction === 'prev' ? newMonth.year - 1 : Number(newMonth.year) + 1;
      let newLength = newMonth.month.toString().length;
      if (newLength == 1) {
        let zero = '0';
        let concatValues = zero.concat(newLength);
        newLength = concatValues.toString();
      } else {
        newLength = newMonth.month;
      }

      let monthLength = newMonth.day.toString().length;
      if (monthLength == 1) {
        let zero = '0';
        let concatValues = zero.concat(monthLength);
        monthLength = concatValues.toString();
      } else {
        monthLength = newMonth.day;
      }
      let newDate = `${newYear}-${newLength}-${monthLength}`;
      const updatedMonth = {
        ...newMonth,
        year: newYear.toString(),
        date: newDate,
      };
      console.log('updated month', typeof newMonth.month);
      setNewMonth(updatedMonth);
      changeYear(updatedMonth);
    }
  }

  function getMonthValue(para) {
    const monthName = para.target.innerText;
    const monthIndex = tamilMonthNames.indexOf(monthName);
    if (monthIndex !== -1) {

      // below code for conver two digit values:
      let newLength = (monthIndex + 1).toString().length;
      if (newLength == 1) {
        let zero = '0';
        let concatValues = zero.concat(newLength);
        newLength = concatValues.toString();
      } else {
        newLength = newMonth.month;
      }
      // setMonthNum(monthIndex + 1);
      const update = {
        ...newMonth,
        month: monthIndex + 1,
        tMonth: monthName,
        date: `${newMonth.year}-${newLength}-${newMonth.day}`
      };

      console.log('monthIndex', monthIndex + 1);
      setNewMonth(update);
      changeYear(update);
    }

  }

  return (
    // <div className="container-fluid p-0 allmonth-names h-auto text-center">

    //   <div className=" px-4 d-flex justify-content-between align-items-center">
    //     <div className='row w-100 px-4 py-3 '>
    //       <div
    //         onClick={() => handleYearChange('prev')}
    //         className="col-2 allmonth-leftarrow d-flex justify-content-center align-items-center my-auto"
    //       >
    //         <i className="fa-solid fa-less-than fs-4 mb-2"></i>
    //       </div>
    //       <div className="year-number col-8 d-flex justify-content-center align-items-center">
    //         <h4>{newMonth.year}</h4>
    //       </div>
    //       <div
    //         onClick={() => handleYearChange('next')}
    //         className="col-2 allmonth-rightarrow d-flex justify-content-center align-items-center"
    //       >
    //         <i className="fa-solid fa-greater-than fs-4 mb-2"></i>
    //       </div>
    //     </div>

    //     <p class="d-lg-none gap-1">
    //       <button className="navbar-toggler" type="button" data-bs-theme="dark" data-bs-toggle="collapse" bg='dark' data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    //         <span className="navbar-toggler-icon text-light"></span>
    //       </button>
    //     </p>

    //   </div>

    //   <div class="d-none d-lg-block">
    //     <ul className="calendar-months ">
    //       {tamilMonthNames.map((ele, index) => (
    //         <li
    //           className="month"
    //           onClick={getMonthValue}
    //           key={index}
    //           role="button"
    //           data-month-val={index + 1}
    //         >
    //           {ele}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>

    //   <div className="d-sm-none" >
    //     <div className="pb-2 collapse" id="collapseExample">
    //       <ul className="calendar-months ">
    //         {tamilMonthNames.map((ele, index) => (
    //           <li
    //             className="month"
    //             onClick={getMonthValue}
    //             key={index}
    //             role="button"
    //             data-month-val={index + 1}
    //           >
    //             {ele}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>

    //   <div class="d-none d-sm-block d-md-none ">
    //     <div class="pb-2 collapse collapse-horizontal" id="collapseExample">
    //       <ul className="calendar-months ">
    //         {tamilMonthNames.map((ele, index) => (
    //           <li
    //             className="month"
    //             onClick={getMonthValue}
    //             key={index}
    //             role="button"
    //             data-month-val={index + 1}
    //           >
    //             {ele}
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </div>


    <>
      <div className='containerfluid d-flex justify-content-between align-items-center'>
        <div className='calendar-year w-100 d-flex justify-content-center'>
          <div className='d-flex align-items-center mt-2'>
            <button className="btn icon-button allmonth-leftarrow" role="button" data-year-val="prev" title="Previous year"
              onClick={() => handleYearChange('prev')}
            >
              <i className="fa-solid fa-less-than fs-4 mb-2"></i>
            </button>
            <h4 className='year-number '>{newMonth.year}</h4>
            <button className="btn icon-button allmonth-rightarrow" role="button" data-year-val="next" title="Next year"
              onClick={() => handleYearChange('next')}
            >
              <i className="fa-solid fa-greater-than fs-4 mb-2"></i>
            </button>
          </div>
        </div>

        <p class="d-lg-none gap-1">
          <button className="navbar-toggler" type="button" data-bs-theme="dark" data-bs-toggle="collapse" bg='dark' data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <span className="navbar-toggler-icon text-light"></span>
          </button>
        </p>


      </div>



      <div className='month-list'>

        {/* <ul className='calendar-months'>
          {tamilMonthNames.map((months, index) => (
            <li className='month' role='button'
              data-month-val={index + 1}
              onClick={getMonthValue}
              key={index}
            >
              {months}
            </li>
          ))}
        </ul> */}

        {/* <div class="d-none d-sm-block d-md-none ">
          <div class="pb-2 collapse collapse-horizontal" id="collapseExample">
            <MonthList tamilMonthNames={tamilMonthNames}
              getMonthValue={getMonthValue}
            />
          </div>
        </div> */}

        {/* <div className="d-sm-none" > */}

        <div className="d-flex justify-content-center d-lg-none" >
          <div className="pb-2 collapse" id="collapseExample">
            <MonthList tamilMonthNames={tamilMonthNames}
              getMonthValue={getMonthValue}
            />
          </div>
        </div>


        <div class="d-none d-lg-flex align-items-center justify-content-cen">
          <MonthList tamilMonthNames={tamilMonthNames}
            getMonthValue={getMonthValue}
          />
        </div>

      </div>


    </>
  );
}

export default MonthNames;
