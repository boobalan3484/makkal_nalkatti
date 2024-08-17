import React from 'react'
import RasiImage from './RasiImage'

const AllRasi = (props) => {
    return (
        <>
            {(!props.rasiImages || props.rasiImages.length === 0) ?
                <p>No rasi images available.</p>
                :
                <>
                    {props.rasiImages.map(({ img }, index) => {
                        return (
                            <div key={index} className="col-md-3 col-lg-2 col-xl-1 my-3 d-flex justify-content-center">
                                <div className="mx-auto">
                                    {/* <div className="single-rasi ">
                                        <img src={img} alt="mesam" className='w-75 h-75' />
                                    </div> */}
                                    <div className="rasi-image-parent">
                                        <RasiImage img={img} style={'w-75 h-75'} />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </>
            }
        </>
    )
}

export default AllRasi