import React from 'react';
import '@/styles/componentsStyles/headingStyle.css'

function Heading02({...prop}) {
    return (
        <div className="col p-2 fw-bold text-white bg-orange w-100 rounded mt-1">{prop.title}</div>
    )
}

export default Heading02