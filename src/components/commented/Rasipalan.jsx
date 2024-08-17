import React from 'react'

const Rasipalan = () => {
    return (
        <section className='mt-3'>

            <Heading title={'ராசிபலன்'} />

            <div className="container-fluid d-none d-md-block mb-5 ">
                <div className="row ">
                    <AllRasi rasiImages={twelveRasi} />
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <SingleRasi rasiNames={todayRasi} />
                </div>
            </div> 

        </section>
    )
}

export default Rasipalan