import React from 'react'

const MonthList = (props) => {
    return (
        <ul className='calendar-months'>
            {props.tamilMonthNames.map((months, index) => (
                <li className='month' role='button'
                    data-month-val={index + 1}
                    onClick={props.getMonthValue}
                    key={index}
                >
                    {months}
                </li>
            ))}
        </ul>
    )
}

export default MonthList