import React from 'react'
import Heading02 from '../heading/Heading02'
import VerticalCard05 from '../verticalCard/VerticalCard05'
import { todayRasi, tamilMonthNames } from '@/datas/calender';

const TodayRasipalan = ({passData}) => {
  return (
    <div>
      <div className="row">
        <Heading02 title={"இன்றைய ராசிபலன்"} />
      </div>
      <div className="row py-2 bottom-line">
        {passData && passData.map((item, index) => (
          <VerticalCard05 key={index} todayNews={item} images={todayRasi[index]} />
        ))}
      </div>
    </div>
  )
}

export default TodayRasipalan