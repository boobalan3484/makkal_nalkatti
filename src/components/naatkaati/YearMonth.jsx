import React, { useEffect, useState } from 'react';
import '@/styles/componentsStyles/calendarStyles.css';
import { tamilMonthNames } from '@/datas/calender/';

import Slider from "react-slick";


const YearMonth = ({ getMonth, changeYear }) => {
    const [currMonth, setCurrMonth] = useState(''); //january
    const [newMonth, setNewMonth] = useState(getMonth || {});

    const [initialSlide, setInitialSlide] = useState(1); // index for initial slide

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
        const monthItems = document.querySelectorAll('.calendar-months div');
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



    // month slick-slider custom setting
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        speed: 500,
        initialSlide: initialSlide,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    }

    return (
        <div className="container bg-yearmonth">
            {/* <div className='container-fluid d-flex justify-content-between align-items-center'> */}
            <div className='calendar-year w-100 d-flex justify-content-center pt-2 border-bottom'>
                <div className='d-flex align-items-center mt-2'>
                    <button className="btn icon-button allmonth-leftarrow" role="button" data-year-val="prev" title="Previous year"
                        onClick={() => handleYearChange('prev')}
                        disabled
                    >
                        <i className="fa-solid fa-less-than fs-4 mb-2"></i>
                    </button>
                    <h4 className='year-number '>{newMonth.year}</h4>
                    <button className="btn icon-button allmonth-rightarrow" role="button" data-year-val="next" title="Next year"
                        onClick={() => handleYearChange('next')}
                        disabled
                    >
                        <i className="fa-solid fa-greater-than fs-4 mb-2"></i>
                    </button>
                </div>
            </div>
            {/* Comment 1 */}
            <div className="container month-slider calendar-months py-2">
                <Slider {...settings}>
                    {tamilMonthNames.map((month, idx) => (
                        <div className='text-center text-white month'
                            key={idx}
                            role='button'
                            data-month-val={idx + 1}
                            onClick={getMonthValue}
                        >
                            <p className='fw-bold'>{month}</p>
                        </div>
                    ))}
                </Slider>
            </div>

            {/* Comment 2 */}
        </div>
    )
}

export default YearMonth