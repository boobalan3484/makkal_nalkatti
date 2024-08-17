import React from 'react';
import '@/styles/componentsStyles/headingStyle.css';

function Heading(prop) {
    return (
        <>
            <section className="container-fluid">
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h2 className='text-center my-4 section-title'>{prop.title}</h2>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Heading