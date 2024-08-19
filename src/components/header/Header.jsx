import React from 'react';
import Link from 'next/link';
import '@/styles/componentsStyles/header.css'

function Header() {
    return (
        <>
            <nav className="navbar sticky-top navbar-expand-md bg-main-orange" id='navbar-parent'>
                <div className="container-lg header ">

                    <a className="navbar-brand" href="#">
                        <img src='https://www.omtamilcalendar.com/auspicious_icons/omtamilcalendar_logo-2024.png' className='img-fluid logo-img' alt='logo' />
                    </a>

                    <button className="navbar-toggler border-0 custom-focus" type="button" data-bs-theme="dark" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-light"></span>
                    </button>

                    <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel" data-bs-theme="dark">
                        <div className="offcanvas-header ">
                            <div className="d-flex justify-content-start align-items-start w-100">
                                {/* <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel"> */}
                                <a className="navbar-brand" href="#">
                                    <img src='https://www.omtamilcalendar.com/auspicious_icons/omtamilcalendar_logo-2024.png' className='img-fluid logo-img' alt='logo' />
                                </a>
                                {/* </h5> */}
                                {/* <button className="ms-auto fs-2 bg-transparent border-0 " data-bs-dismiss="offcanvas" aria-label="Close">  <i className="fa-solid text-white fa-circle-xmark"></i></button> */}
                                <button className="btn-close custom-focus"  data-bs-dismiss="offcanvas" aria-label="Close">
                                    {/* <i className="fa-solid text-white fa-circle-xmark"></i> */}
                                </button>
                            </div>
                        </div>
                        <div className="offcanvas-body">
                            <div className="w-100">
                                <div className="row">
                                    <div className="col">
                                        <ul className="navbar-nav justify-content-end flex-grow-1">
                                            <li className="nav-item">
                                                <Link className="nav-link" aria-current="page" href=''>முகப்பு</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" aria-current="page" href=''>ராசிபலன்</Link>
                                            </li>
                                            {/* <li className="nav-item">
                                                <Link className="nav-link" aria-current="page" href=''>நாட்கட்டி</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" aria-current="page" href=''>ஓம் ஆஸ்ட்ரோ</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" aria-current="page" href=''>ஆன்மிக அங்காடி</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" aria-current="page" href=''>கதைகள்</Link>
                                            </li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header



{/* <div className="col" style={{border:'2px solid red'}}>
     <ul className="navbar-nav  justify-content-start flex-grow-1 pe-3">
         {
             navlinks_1.map(({ key }) => {
                 return (
                     <li className="nav-item">
                         <Link className="nav-link text-capitalize" aria-current="page" href={`/${key}`}>{key}</Link>
                     </li>
                 )
             })
         }
         <li>Hello</li>
         <li>Hello</li>
         <li>Hello</li>
     </ul>
 </div> */}