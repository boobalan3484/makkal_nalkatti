'use client';
import React, { useEffect, useState } from 'react';
import VerticalCard03 from '../verticalCard/VerticalCard03';
import Heading02 from '../heading/Heading02';
import VerticalCard04 from '../verticalCard/VerticalCard04';
import VerticalCard05 from '../verticalCard/VerticalCard05';
import { todayRasi, tamilMonthNames } from '@/datas/calender';

function CalenderOverview({ passData, time, vasthunaal, clickedDate, getChangedDate }) {
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


    const auspiciousDays = {
        thiruvonam: 'https://www.omtamilcalendar.com/auspicious_icons/thiruvonam.png',
        ekadasi: 'https://www.omtamilcalendar.com/auspicious_icons/pradosam_holo.png',
        pradosam: 'https://www.omtamilcalendar.com/auspicious_icons/ekadasi.png',
        pradosam_holo: 'https://www.omtamilcalendar.com/auspicious_icons/pradosam_holo.png',
        shivaratri: 'https://www.omtamilcalendar.com/auspicious_icons/shivaratri.png',
        chaturthi: 'https://www.omtamilcalendar.com/auspicious_icons/chaturthi.png',
        sankataharachaturti: 'https://www.omtamilcalendar.com/auspicious_icons/sankataharachaturti.png',
        shasti: 'https://www.omtamilcalendar.com/auspicious_icons/shasti.png',
        shasti_holo: 'https://www.omtamilcalendar.com/auspicious_icons/shasti_holo.png',
        karthigai: 'https://www.omtamilcalendar.com/auspicious_icons/karthigai.png',
        valarpirai: 'https://www.omtamilcalendar.com/auspicious_icons/valarpirai.png',
        fullmoon: 'https://www.omtamilcalendar.com/auspicious_icons/fullmoon.png',
        theipirai: 'https://www.omtamilcalendar.com/auspicious_icons/theipirai.png',
        blackmoon: 'https://www.omtamilcalendar.com/auspicious_icons/blackmoon.png',
        bothside_arrow: 'https://www.omtamilcalendar.com/auspicious_icons/bothside_arrow.png',
        uparrow: 'https://www.omtamilcalendar.com/auspicious_icons/uparrow.png',
        downarrow: 'https://www.omtamilcalendar.com/auspicious_icons/downarrow.png'
    }

    // ===========================================================================================

    // data : ['thiruvonam' ,'pradosham', 'pradosham_holo', 'ekadasi', 'shivaratri', 'chaturthi', 'sankataharachaturti', 'shashti', 'shashti_hole', 'karthigai']


    const muhurtham_img = 'https://www.omtamilcalendar.com/auspicious_icons/subamuhurtham.png'

    const [isFestival, setIsFestival] = useState('')
    const [isAuspicious, setIsAuspicious] = useState('')
    const [isMuhurtham, setIsMuhurtham] = useState(null)

    const [isThithi, setIsThithi] = useState([])

    const transformItems = (items) => {
        const parts = items.split(',');
        const filteredParts = parts.filter(part => part.trim() !== '');
        return filteredParts.join(' | ');
    };

    const transformImages = (items) => {
        const imagesArray = items.split(',')
            .map(imageName => imageName.trim())
            .filter(imageName => imageName !== '');
        return imagesArray
    }

    useEffect(() => {
        const dayInfoFn = () => {
            const festivalData = (time && time[0].festival_info)
            const auspiciousData = (time && time[0].day_auspicious)
            const muhurthamData = (time && time[0].muhurtham)

            const thithiData = (time && time[0].thithiimages)

            try {
                setIsFestival(transformItems(festivalData))
                setIsAuspicious(transformItems(auspiciousData))
                setIsMuhurtham(muhurthamData)
                setIsThithi(transformImages(thithiData))
            } catch (err) {
                console.error('Error :', err);
            }
        }
        dayInfoFn()
    }, [time])

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
        {
            img: 'https://www.omtamilcalendar.com/auspicious_icons/dv_chandra.png',
            title: 'சந்திராஷ்டமம்',
            desc: vasthunaal?.chandrastram,
        },
    ];



    return (
        <div className="container-fluid day-overview-names p-2">
            {/* <div className="container"> */}
                <div className="row day-overview-row py-3 rounded">
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

                <div className="row py-2 bottom-primary-line align-items-center">
                    <div className="col">
                        <p className="day-title-1 m-0">{time && time[0].tyear}</p>
                        <p className="day-title-1">{time && time[0].tmonth}</p>
                    </div>
                    <div className="col">
                        <div className="day-number rounded">
                            <p className='text-center fw-bolder py-2 text-white fs-6'>{time && time[0].tdate}</p>
                        </div>
                    </div>
                </div>

                {isFestival &&
                    < div className='row py-2 bottom-line'>
                        <p className='text-center fw-bold'>
                            {isFestival}
                        </p>
                    </div>
                }
                {isAuspicious &&
                    < div className='row py-2 bottom-line'>
                        <p className='text-center fw-light'>
                            {isAuspicious}
                        </p>
                    </div>
                }

                <div className="row bottom-line py-2">
                    <div className='col-sm-6 '>
                        {isMuhurtham === 'Y' && (
                            <img src={muhurtham_img} className='img-fluid day-up-arrow' alt="muhurtham icon" />
                        )}
                    </div>



                    <div className="col-sm-6 ">
                        <div className='d-flex flex-row-reverse'>
                            {isThithi.map((imageName, index) => (
                                <img
                                    key={index}
                                    src={auspiciousDays[imageName]}
                                    alt={imageName}
                                    className='img-fluid '
                                style={{ width: '30px', height: '30px', margin: '5px' }} // Adjust styles as needed
                                />
                            ))
                            }
                        </div>

                    </div>

                    {/* {arrow.map(({ img_1, img_2 }, index) => (
                        <div key={index} className="col-sm-6 d-flex justify-content-end">
                            <span>
                                <img src={img_2} className='img-fluid day-up-arrow' alt="arrow icon" />
                            </span>
                            <span>
                                <img src={img_1} className='img-fluid moon-img' alt="moon icon" />
                            </span>
                        </div>
                    ))} */}
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

                {/* <div className="row">
                    <Heading02 title={"இன்றைய ராசிபலன்"} />
                </div>
                <div className="row py-2 bottom-line">
                    {passData && passData.map((item, index) => (
                        <VerticalCard05 key={index} todayNews={item} images={todayRasi[index]} />
                    ))}
                </div> */}
            {/* </div> */}
        </div >
    );
}

export default CalenderOverview