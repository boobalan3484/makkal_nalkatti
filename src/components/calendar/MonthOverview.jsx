'use client'
import React, { useState } from 'react';
import MonthNames from './MonthNames';

function MonthOverview() {
    const [expanded, setExpanded] = useState(false);
    let [activeDay,setActiveDay] = useState();

    const toggleMonthNames = () => {
        setExpanded(!expanded);
    };

    const getdate = (event) =>{
        let table = document.querySelector('.day-table');
        let tr = Array.from(table.querySelectorAll('tbody tr td'));
        tr.map((ele)=>{
            if(ele.innerText == event.target.innerText){
                setActiveDay(event.target.innerText);
                ele.classList.add('active-day');
                
            }else{
                ele.classList.remove('active-day');
                ele.classList.add('day');
            }
        });
    }

    return (
        <>
            <div className="container month-overview-names">
                <div className="p-2 toggle-parent">
                    <div className="row month-sm d-block d-md-none" style={{ left: expanded ? '0px' : '-200px' }}>
                        <MonthNames />
                    </div>
                    <div className="col-2 d-block d-md-none">
                        <div className="toggle-btn " onClick={toggleMonthNames} style={{ marginLeft: expanded ? '153px' : '-20px' }}>
                            <i className={expanded ? "fa-solid fs-3 fa-circle-xmark" : "fa-solid fa-bars fs-3 mx-auto"}></i>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-2 month-overview-leftarrow d-flex justify-content-center align-items-center my-auto ">
                            <i className="fa-solid fa-less-than month-left-arrow fs-3"></i>
                        </div>
                        <div className="month-overview-number col-8 d-flex justify-content-center align-items-center">
                            <h3 className='month-overview-heading'>மார்ச் 2024</h3>
                        </div>
                        <div className="col-2 month-overview-rightarrow d-flex justify-content-center align-items-center">
                            <i className="fa-solid fa-greater-than month-right-arrow fs-3"></i>
                        </div>
                    </div>
                    <div className="row">
                        <ul className="col day-names mt-3">
                            <li className="day">Sun</li>
                            <li className="day">Mon</li>
                            <li className="day">Tue</li>
                            <li className="day">Wed</li>
                            <li className="day">Thu</li>
                            <li className="day">Fri</li>
                            <li className="day">Sat</li>
                        </ul>
                    </div>
                    <div className="row ">
                        <table class="day-table">
                            <tbody>
                                <tr>
                                    <td className='day' onClick={getdate}>1</td>
                                    <td className='day' onClick={getdate}>2</td>
                                    <td className='day'>3</td>
                                    <td className='day'>4</td>
                                    <td className='day'>5</td>
                                    <td className='day'>6</td>
                                    <td className='day'>7</td>
                                </tr>
                                <tr>
                                    <td className='day'>8</td>
                                    <td className='day'>9</td>
                                    <td className='day'>10</td>
                                    <td className='day'>11</td>
                                    <td className='day'>12</td>
                                    <td className='day'>13</td>
                                    <td className='day'>14</td>
                                </tr>
                                <tr>
                                    <td className='day'>15</td>
                                    <td className='day'>16</td>
                                    <td className='day'>17</td>
                                    <td className='day'>18</td>
                                    <td className='day'>19</td>
                                    <td className='day'>20</td>
                                    <td className='day'>21</td>
                                </tr>
                                <tr>
                                    <td className='day'>22</td>
                                    <td className='day'>23</td>
                                    <td className='day'>24</td>
                                    <td className='day'>25</td>
                                    <td className='day'>26</td>
                                    <td className='day'>27</td>
                                    <td className='day'>28</td>
                                </tr>
                                <tr>
                                    <td className='day'>29</td>
                                    <td className='day'>30</td>
                                    <td className='day'>31</td>
                                    <td className='day'></td>
                                    <td className='day'></td>
                                    <td className='day'></td>
                                    <td className='day'></td>
                                </tr>
                            </tbody>
                        </table>
                        {/* <div className="col overview-single-days">
                            <div className="day-parent">
                                <h5>1</h5>
                            </div>
                            <div className="day-parent">
                                <h5>1</h5>
                            </div>
                            <div className="day-parent">
                                <h5>1</h5>
                            </div>
                            <div className="day-parent">
                                <h5>1</h5>
                            </div>
                            <div className="day-parent">
                                <h5>1</h5>
                            </div>
                            <div className="day-parent">
                                <h5>1</h5>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MonthOverview