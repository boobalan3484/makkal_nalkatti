import React from 'react';
import '@/styles/componentsStyles/banner02Styles.css';

function Banner02() {
    return (
        <>
            <div className="container-fluid banner-bg-img d-flex align-items-center justify-content-center">
                <div className="row w-100">
                    <div className="col-12 text-center p-4 bg-opacity-50 rounded">
                        <h2 className="text-white mb-3">வாழ்நாள் ஜாதகம்</h2>
                        <p className="banner-desc text-white mb-4">கல்வி | வருமானம் | செல்வம் | திருமண வாழ்க்கை</p>
                        <a href="#" className="btn btn-light">உங்களுக்கான சிறப்பு சேவை</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner02