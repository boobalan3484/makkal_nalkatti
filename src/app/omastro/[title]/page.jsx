import SubHeader from '@/components/header/SubHeader'
import VerticalCard06 from '@/components/verticalCard/VerticalCard06'
import React from 'react'

function page() {
    return (
        <>
            <SubHeader />
            <div className="container" style={{border:'2px solid red'}}>
                <div className="row my-5">
                    <VerticalCard06 />
                </div>
            </div>
        </>
    )
}

export default page