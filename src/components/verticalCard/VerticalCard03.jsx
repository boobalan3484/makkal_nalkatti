import React from 'react'

function VerticalCard03({vasthunaalData}) {
    return (
        <>
            <div className="col-2">
                <img src={vasthunaalData.imgPath} className='img-fluid vertical-card-img' alt="image 1" />
            </div>
            <div className="col-10 d-flex flex-column align-items-start justify-content-center">
                <h6 className='day-title text-dark'>{vasthunaalData.title_1}</h6>
                <p className='day-desc'>{vasthunaalData.desc_1}</p>
            </div>
        </>
    )
}

export default VerticalCard03