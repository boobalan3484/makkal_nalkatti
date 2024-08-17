import React from 'react'

const Naatkaati = () => {
    return (
        <>
            {/* <section className='mt-3'>
        <section className="container-fluid light-bg py-3" id='calender-parent'>
          <Heading title={'நாட்காட்டி'} />

          <div className='container-md'>
            <div className='row'>

              <div className='col-md-2 p-0 m-0 calender-left ' >
                {clickedDate !== undefined ? <MonthNames getMonth={clickedDate} changeYear={originalYear} /> :
                  <p>Data Loading...</p>
                }
              </div>

              <div className='col-md-7 m-0 p-0 calender-main'>
                 // // <MonthOverview />  ///Comment this line
                <MyCalendar sendDataToParent={getUseClickedData} yearChange={clickedDate} />
              </div>

              <div className='col-md-3 m-0 p-0 calender-right'>
                <DayOverview passData={rasiDaily} clickedDate={clickedDate} getChangedDate={changedDateFun} time={calendarDaily} vasthunaal={panchangam} />
              </div>

            </div>
          </div>

        </section>
      </section> */}

            <section id='Naatkaati'>
                <div className='py-3 light-bg'>
                    <div className='container'>
                        <Heading title={'நாட்காட்டி'} />

                        {/* <div id='calender-parent position-relative w-100 overflow-hidden z-1 mx-0 my-auto '>  ///// Comment this line */}

                        <div id='calender-parent w-100 overflow-hidden my-auto' >
                            <div className='row'>
                                <div className='calendar-sidebar col-lg-2 text-center'>
                                    {clickedDate !== undefined ? <MonthNames getMonth={clickedDate} changeYear={originalYear} /> :
                                        <p>Data Loading...</p>
                                    }
                                </div>

                                <div className='calender-inner col-lg w-100 h-auto'>
                                    <MyCalendar sendDataToParent={getUseClickedData} yearChange={clickedDate} />
                                </div>
                                <div className='dayview-data col-lg-3'>
                                    <DayOverview passData={rasiDaily} clickedDate={clickedDate} getChangedDate={changedDateFun} time={calendarDaily} vasthunaal={panchangam} />
                                </div>
                            </div>

                        </div>
                        {/* </div>  ///// Comment this line */}

                    </div>
                </div>
            </section >
        </>

    )
}

export default Naatkaati