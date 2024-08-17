'use client';
import React, { useEffect, useState } from 'react';
import VerticalCard03 from '../verticalCard/VerticalCard03';
import Heading02 from '../heading/Heading02';
import VerticalCard04 from '../verticalCard/VerticalCard04';
import VerticalCard05 from '../verticalCard/VerticalCard05';
import { todayRasi, tamilMonthNames } from '@/datas/calender';

function DayOverview({ passData, time, vasthunaal, clickedDate, getChangedDate }) {
    const [ragu, setRagu] = useState({});
    const [arrow, setArrow] = useState([{ img_1: '', img_2: '' }]);
    // const [con, setCon] = useState(false);
    const [currentDate, setCurrentDate] = useState();
    const defaultDate = {
        date: 'defaultDate',
        day: 'defaultDay',
        month: 'defaultMonth',
        tMonth: 'defaultTMonth',
        weekname: 'defaultWeekname',
        year: 'defaultYear',
    };
    // this Effect will trigger when the clickedData prop get data:
    useEffect(() => {
        if (clickedDate) {
            setCurrentDate({
                date: clickedDate.date || defaultDate.date,
                day: clickedDate.day || defaultDate.day,
                month: clickedDate.month || defaultDate.month,
                tMonth: clickedDate.tMonth || defaultDate.tMonth,
                weekname: clickedDate.weekname || defaultDate.weekname,
                year: clickedDate.year || defaultDate.year,
            });
        }
    }, [clickedDate]);

    // Based on change data it will trigger:
    // useEffect(() => {
    //         getChangedDate(currentDate);
    // }, []);



    useEffect(() => {
        // Fetch and parse ragu data
        function getRagu() {
            if (time && time.length > 0) {
                const string = time[0].day_inauspicioustime;
                try {
                    setRagu(JSON.parse(string));
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                    setRagu({});
                }
            }
        }
        getRagu();
    }, [time]);

    useEffect(() => {
        if (Array.isArray(time)) {
            const allImages = time.flatMap(({ thithiimages }) => {
                const thithiimagesArray = thithiimages.split(',');
                return thithiimagesArray.slice(0, 2);
            });

            let newImg_1 = '';
            let newImg_2 = '';

            if (allImages.length > 0) {
                switch (allImages[0]) {
                    case 'bothside_arrow':
                        newImg_1 = 'https://www.omtamilcalendar.com/auspicious_icons/bothside_arrow.png';
                        break;
                    case 'uparrow':
                        newImg_1 = 'https://www.omtamilcalendar.com/auspicious_icons/uparrow.png';
                        break;
                    case 'downarrow':
                        newImg_1 = 'https://www.omtamilcalendar.com/auspicious_icons/downarrow.png';
                        break;
                    default:
                        break;
                }
            }

            if (allImages.length > 1) {
                switch (allImages[1]) {
                    case 'valarpirai':
                        newImg_2 = 'https://www.omtamilcalendar.com/auspicious_icons/valarpirai.png';
                        break;
                    case 'fullmoon':
                        newImg_2 = 'https://www.omtamilcalendar.com/auspicious_icons/fullmoon.png';
                        break;
                    case 'theipirai':
                        newImg_2 = 'https://www.omtamilcalendar.com/auspicious_icons/theipirai.png';
                        break;
                    case 'blackmoon':
                        newImg_2 = 'https://www.omtamilcalendar.com/auspicious_icons/blackmoon.png';
                        break;
                    default:
                        break;
                }
            }
            setArrow([{ img_1: newImg_1, img_2: newImg_2 }]);
        }
    }, [time]);


    // This function will trigger and update state based on user action:
    function changeDate(direction) {

        const baseDate = new Date(currentDate.date);
        const daysToAdd = direction === 'next' ? 1 : -1;
        baseDate.setDate(baseDate.getDate() + daysToAdd);

        const newDay = baseDate.getDate();
        const newMonth = baseDate.getMonth() + 1;
        const newYear = baseDate.getFullYear();
        const newDate = baseDate.toISOString().split('T')[0];
        const newWeekName = baseDate.toLocaleDateString('en-US', { weekday: 'long' });
        const newTamilMonthIndex = (newMonth - 1) % tamilMonthNames.length;
        const newTamilMonth = tamilMonthNames[newTamilMonthIndex];

        getChangedDate({
            date: newDate,
            day: newDay,
            month: newMonth,
            tMonth: newTamilMonth,
            weekname: newWeekName,
            year: newYear
        });
        // setCon(!con);
    }

    const vasthunaal_img = [
        {
            img: 'https://www.omtamilcalendar.com/auspicious_icons/dv_star.png',
            title: 'நட்சத்திரம்',
            desc: vasthunaal?.nakshatra,
        },
        {
            img: 'https://www.omtamilcalendar.com/auspicious_icons/dv_tithi.png',
            title: 'திதி',
            desc: vasthunaal?.tithi,
        },
        {
            img: 'https://www.omtamilcalendar.com/auspicious_icons/dv_yogam.png',
            title: 'யோகம்',
            desc: vasthunaal?.yogam,
        },
    ];

    return (
        <div className="container-fluid day-overview-names">
            <div className="container">
                <div className="row day-overview-row">
                    <div onClick={() => changeDate('prev')} className="col-2 day-overview-leftarrow d-flex justify-content-center align-items-center my-auto">
                        <i className="fa-solid fa-less-than fs-3"></i>
                    </div>
                    <div className="year-number col-8 d-flex justify-content-center flex-column align-items-center">
                        <h4 className='text-center'>{currentDate && currentDate.tMonth} {currentDate && currentDate.day}, {currentDate && currentDate.year}</h4>
                        <h5 className='text-center'>{currentDate && currentDate.weekname}</h5>
                    </div>
                    <div onClick={() => changeDate('next')} className="col-2 day-overview-rightarrow d-flex justify-content-center align-items-center">
                        <i className="fa-solid fa-greater-than fs-3"></i>
                    </div>
                </div>

                <div className="row my-2 bottom-primary-line">
                    <div className="col">
                        <p className="day-title-1 m-0">{time && time[0].tyear}</p>
                        <p className="day-title-1">{time && time[0].tmonth}</p>
                    </div>
                    <div className="col">
                        <div className="day-number mya-uto border">
                            <h2 className='text-center'>{time && time[0].tdate}</h2>
                        </div>
                    </div>
                </div>
                <div className="row bottom-line">
                    {arrow.map(({ img_1, img_2 }, index) => (
                        <div key={index} className="col mb-2 d-flex justify-content-end">
                            <span>
                                <img src={img_2} className='img-fluid day-up-arrow' alt="arrow icon" />
                            </span>
                            <span>
                                <img src={img_1} className='img-fluid moon-img' alt="moon icon" />
                            </span>
                        </div>
                    ))}
                </div>
                {vasthunaal_img.map(({ img, title, desc }, index) => (
                    <div key={index} className="row py-2 bottom-line">
                        <VerticalCard03 vasthunaalData={{ imgPath: img, title_1: title, desc_1: desc }} />
                    </div>
                ))}

                <div className="row">
                    <Heading02 title={"நல்ல நேரம்"} />
                </div>
                <div className="row py-2 bottom-line">
                    <VerticalCard04 neram={{ காலை: time?.[0]?.nneram_mrg }} />
                </div>
                <div className="row py-2 bottom-line">
                    <VerticalCard04 neram={{ மாலை: time?.[0]?.nneram_eve }} />
                </div>
                <div className="row">
                    <Heading02 title={"கௌரி நல்ல நேரம்"} />
                </div>
                <div className="row py-2 bottom-line">
                    <VerticalCard04 neram={{ காலை: time?.[0]?.gneram_mrg }} />
                </div>
                <div className="row py-2 bottom-line">
                    <VerticalCard04 neram={{ மாலை: time?.[0]?.gnearm_eve }} />
                </div>
                <div className="row">
                    <Heading02 title={"இராகு காலம், எமகண்டம், குளிகை"} />
                </div>
                <div className="row py-2 bottom-line">
                    <VerticalCard04 neram={{ இராகு: ragu?.rahu }} />
                </div>
                <div className="row py-2 bottom-line">
                    <VerticalCard04 neram={{ எமகண்டம்: ragu?.yama }} />
                </div>
                <div className="row py-2 bottom-line">
                    <VerticalCard04 neram={{ குளிகை: ragu?.kuligai }} />
                </div>

                <div className="row py-2 bottom-line">
                    {passData && passData.map((item, index) => (
                        <VerticalCard05 key={index} todayNews={item} images={todayRasi[index]} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default DayOverview;
