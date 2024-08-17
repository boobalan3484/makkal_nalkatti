import React from 'react';


function VerticalCard05({todayNews,images}) {
    return (
        <>
            <div className="col-sm-3 d-flex align-items-center justify-content-center">
                <img src={images.img}  className='img-fluid single-rasi-img d-none d-sm-block  ' alt="mesham" />
            </div>
            <div className="col-6 col-sm-4 my-auto text-center">
                <p className=''>{images.rasiName}</p>
            </div>
            <div className="col-6 col-sm-4 my-auto text-center">
                <p className='fw-bold'>{todayNews.info}</p>
            </div>
        </>
    )
}

export default VerticalCard05