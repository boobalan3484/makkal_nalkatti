'use client';
import React from 'react';
import Slider from "react-slick";

function Slider02() {
    var settings = {
        dots: false,
        infinite:true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img src="https://www.omtamilcalendar.com/auspicious_icons/viratham_dates.webp" className='img-fluid' alt="slider-1" />
                    </div>
                    <div>
                        <img src="https://www.omtamilcalendar.com/auspicious_icons/rasipalan_today.webp" className='img-fluid' alt="slider-1" />
                    </div>
                    <div>
                        <img src="https://www.omtamilcalendar.com/auspicious_icons/jathagam.webp" className='img-fluid' alt="slider-1" />
                    </div>
                    <div>
                        <img src="https://www.omtamilcalendar.com/auspicious_icons/temples.webp" className='img-fluid' alt="slider-1" />
                    </div>
                    <div>
                        <img src="https://www.omtamilcalendar.com/auspicious_icons/spritual_items.webp" className='img-fluid' alt="slider-1" />
                    </div>
                    <div>
                        <img src="https://www.omtamilcalendar.com/auspicious_icons/viratham_dates.webp" className='img-fluid' alt="slider-1" />
                    </div>
                    <div>
                        <img src="https://www.omtamilcalendar.com/auspicious_icons/viratham_dates.webp" className='img-fluid' alt="slider-1" />
                    </div>
                    <div>
                        <img src="https://www.omtamilcalendar.com/auspicious_icons/rasipalan_today.webp" className='img-fluid' alt="slider-1" />
                    </div>
                    <div>
                        <img src="https://www.omtamilcalendar.com/auspicious_icons/jathagam.webp" className='img-fluid' alt="slider-1" />
                    </div>
                    <div>
                        <img src="https://www.omtamilcalendar.com/auspicious_icons/temples.webp" className='img-fluid' alt="slider-1" />
                    </div>
                    <div>
                        <img src="https://www.omtamilcalendar.com/auspicious_icons/spritual_items.webp" className='img-fluid' alt="slider-1" />
                    </div>
                    <div>
                        <img src="https://www.omtamilcalendar.com/auspicious_icons/viratham_dates.webp" className='img-fluid' alt="slider-1" />
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Slider02