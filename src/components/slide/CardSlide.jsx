import React from 'react';
import Slider from "react-slick";
import '@/styles/componentsStyles/cardSliderStyles.css';
import Link from 'next/link';

function CardSlide() {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="card-slider-container">
            <Slider {...settings}>
                {Array(5).fill(null).map((_, index) => (
                    <div className="col px-2 mb-2" key={index} >
                        <div className="card slider-card border-0">
                            <img className="card-img-top p-2"src="https://cdn-aws.omtamilcalendar.com/omastro/web_app/dashboard/products/prediction/yearly_jadhagam.jpg" alt="Card image cap" />
                            <div className="card-body text-center card-slider-body">
                                <h5 className="card-title slider-card-title">வீடு கட்ட / வாங்க </h5>
                                <h6 className='slider-card-title-2'>யோக ஜாதகத்தை கணிக்க</h6>
                                <del className='card-slider-del'>
                                    <p className="oma-price p-0 m-0"><i className="fa fa-rupee-sign"></i> 199</p>
                                </del>
                                <p className="oma-price m-0"><i className="fa fa-rupee-sign"></i> 49</p>
                                <Link  href={`omastro/${'Dynamic-Route'}`} className="card-slider-order-btn btn">Order Now</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default CardSlide;
