import React from 'react';
import '@/styles/componentsStyles/footerStyle.css';

function Footer() {
    return (
        <>
            <div className="row py-4 footer-head border-bottom">
                <div className="col">
                    <div className="d-flex justify-content-center align-items-center flex-column">
                        <h4><strong className='footer-title'>Contact Us</strong></h4>
                        <p className='footer-address'>CODERAYS IT PRIVATE LIMITED</p>
                        <p className='footer-address'>Thakur Building, No. 2, 2nd Floor, 1st </p>
                        <p className='footer-address'>Cross Street, CIT Nagar West, Chennai 600 035,</p>
                        <p className='footer-address'>Landmark : Nandhi Statue, Tamilnadu, India.</p>
                        <p className='footer-address'>Phone: 044 42148213</p>
                    </div>
                </div>
            </div>
            <div className="container my-4">
                <div className="row">
                    <div className="col-6 col-sm-4 col-md-2 text-center">
                        <a href="" className='footer-links'>Faq</a>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 text-center">
                        <a href="" className='footer-links'>About Us</a>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 text-center">
                        <a href="" className='footer-links'>Privacy Policy</a>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 text-center">
                        <a href="" className='footer-links'>Terms of Service</a>
                    </div>
                    <div className="col-6 col-sm-4 col-md-2 text-center">
                        <a href="" className='footer-links'>Shipping Policy</a>
                    </div>
                </div>
                <div className="row my-2">
                    <div className="col-12 col-md-6 my-sm-2 my-md-auto">
                        <p className='text-sm-center text-md-start'>All Rights Reserved © 2024 | <a href='' className='footer-cmp-link'>Coderays IT Private Limited</a></p>
                    </div>
                    <div className="col-12 col-md-6 my-3 my-md-0">
                        <div className="social-medias justify-content-sm-center justify-content-md-end">
                            <a href='' className="social-media-icons">
                                <i className="fa-brands fa-facebook-f"></i>
                            </a>
                            <a  href='' className="social-media-icons">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href='' className="social-media-icons">
                                <i className="fa-brands fa-youtube"></i>
                            </a>
                            <a href='' className="social-media-icons">
                                <i className="fa-brands fa-whatsapp"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer