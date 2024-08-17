'use client';
import React from 'react';
import SubHeader from '@/components/header/SubHeader';
import Banner02 from '@/components/banner/Banner02';
import Heading from '@/components/heading/Heading';
import CardSlide from '@/components/slide/CardSlide';
import Footer from '@/components/footer/Footer';

function page() {
    return (
        <>
            <SubHeader />
            <Banner02 />
            <Heading title={'கணிப்புகள்'} />
            <div className='container mb-5'>
                <div className="row">
                    <CardSlide />
                </div>
            </div>
            <div className="container-fluid">
                <Footer />
            </div>
        </>
    )
}

export default page