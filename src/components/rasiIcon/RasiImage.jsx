import React from 'react';
import '@/styles/componentsStyles/tabStyle.css';

function RasiImage(props) {

    return (
        <img src={props.img} alt="mesam" className={`${props.style}`} />
    )
}

export default RasiImage;