import React from 'react'

const CalendarWorkout = () => {
    return (
        <div>
            {/* Comment 1 */}
            {/* <p className="d-lg-none gap-1">
        <button className="navbar-toggler" type="button" data-bs-theme="dark" data-bs-toggle="collapse" bg='dark' data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <span className="navbar-toggler-icon text-light"></span>
        </button>
    </p> */}
            {/* </div> */}

            {/* <ul className="text-white">
            <div className='row'>
                {firstSixMonths.map((months, index) => (
                    <div className="col my-3 d-flex justify-content-center" key={index}>
                        <MonthsList months={months}
                            index={index}
                            getMonthValue={getMonthValue}
                        />
                    </div>
                ))}
            </div>
        </ul>
        <ul className="text-white ">
            <div className='row'>
                {remainingMonths.map((months, index) => (
                    <div className="col my-3 d-flex justify-content-center" key={index}>
                        <MonthsList months={months}
                            index={index}
                            getMonthValue={getMonthValue}
                        />
                    </div>
                ))}
            </div>
        </ul> */}

            {/* Comment 2 */}
            {/* <div id="carouselMonth" className="carousel slide container d-none d-lg-block" >
                <div className="carousel-inner w-75 mx-auto">
                    <div className="carousel-item active">
                        <ul className="text-white">
                            <div className='row'>
                                {firstSixMonths.map((months, index) => (
                                    <div className="col my-3 d-flex justify-content-center" key={index}>
                                        <MonthsList months={months}
                                            index={index}
                                            getMonthValue={getMonthValue}
                                        />
                                    </div>
                                ))}
                            </div>
                        </ul>
                    </div>
                    <div className="carousel-item container-sm">
                        <ul className="text-white ">
                            <div className='row'>
                                {remainingMonths.map((months, index) => (
                                    <div className="col my-3 d-flex justify-content-center" key={index}>
                                        <MonthsList months={months}
                                            index={index}
                                            getMonthValue={getMonthValue}
                                        />
                                    </div>
                                ))}
                            </div>
                        </ul>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselMonth" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselMonth" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div> 
             <div className='container-fluid parent' style={{ height: '200px', background: '#cecece' }}>
                <div className='container inner row  h-100' >
                    <div className='container item' style={{height:'100%', width:'100%', background:'#fefefe'}} >

                    </div>
                    <div className='container item' style={{height:'100%', width:'100%', background:'#00000'}} >

                    </div>
                </div>
                <button type='button'>
                    Prev
                </button>
                <button type='button'>
                    Next
                </button>

            </div> 
            <div className="d-block  text-center text-white  d-lg-none" >
                <div className="pb-2 collapse" id="collapseExample">
                    <ul className="text-center text-white pe-5">
                        {tamilMonthNames.map((months, index) => (
                            <MonthsList
                                key={index}
                                months={months}
                                index={index}
                                getMonthValue={getMonthValue}
                            />
                        ))}
                    </ul>
                </div>
            </div> */}
        </div>
    )
}

export default CalendarWorkout