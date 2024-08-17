"use client"
import React from 'react';
import Slider from "react-slick";
import "@/styles/componentsStyles/SliderStyle.css";


function SimpleSlide() {
    var settings = {
        dots:false,
        infinite: true,
        autoplay:true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };

    return (
        <div className="stories-slider slick-slider">
            <Slider {...settings}>
                <div>
                    <img src="https://cdn-cdn77.omtamilcalendar.com/general/html/web-stories/pournamiyum_athan_sirappugalum/00.jpg" className='img-fluid' alt="slider-1" />
                </div>
                <div>
                    <img src="https://cdn-cdn77.omtamilcalendar.com/general/html/web-stories/tamizh_varuda_pirapu/00.jpg" className='img-fluid' alt="slider-2" />
                </div>
                <div>
                    <img src="https://cdn-cdn77.omtamilcalendar.com/general/html/web-stories/may_01/00.jpg" className='img-fluid' alt="slider-3" />
                </div>
                <div>
                    <img src="https://cdn-cdn77.omtamilcalendar.com/general/html/web-stories/tamizh_varuda_pirapu/00.jpg" className='img-fluid' alt="slider-4" />
                </div>
                <div>
                    <img src="https://cdn-cdn77.omtamilcalendar.com/general/html/web-stories/sani_maha_pradhosham/00.jpg" className='img-fluid' alt="slider-5" />
                </div>
                <div>
                    <img src="https://cdn-cdn77.omtamilcalendar.com/general/html/web-stories/aadi_maadhathin_sirappu/00.jpg" className='img-fluid' alt="slider-6" />
                </div>
            </Slider>
        </div>
    );
}

export default SimpleSlide;
