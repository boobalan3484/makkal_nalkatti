import React from 'react';
import Link from 'next/link';
import '@/styles/componentsStyles/header.css'

function Header() {
    return (
        <>
            <nav className="navbar sticky-top  bg-lightWhite navbar-expand-lg " id='navbar-parent'>
                <div className="container-fluid header">
                    {/* <a className="navbar-brand" href="#">
                        <img src='https://www.omtamilcalendar.com/auspicious_icons/omtamilcalendar_logo-2024.png' className='img-fluid logo-img' alt='logo' />
                    </a> */}
                    <button className="navbar-toggler ms-auto bg-white border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-start " tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header ">
                            <div className="d-flex justify-content-start align-items-start w-100">
                                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                                    <a className="navbar-brand" href="#">
                                        <img src='https://www.omtamilcalendar.com/auspicious_icons/omtamilcalendar_logo-2024.png' className='img-fluid logo-img' alt='logo' />
                                    </a>
                                </h5>
                                <button className="ms-auto fs-2 bg-transparent border-0 " data-bs-dismiss="offcanvas" aria-label="Close">  <i className="fa-solid text-white fa-circle-xmark"></i></button>
                            </div>
                        </div>
                        <div className="offcanvas-body">
                            <div className="w-100">
                                <div className="row">
                                    <div className="col">
                                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                            <li className="nav-item">
                                                <Link className="nav-link" aria-current="page" href=''>முகப்பு</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" aria-current="page" href=''>கணிப்புகள்</Link>
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

