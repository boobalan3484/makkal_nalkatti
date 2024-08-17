import React from 'react';
import '@/styles/componentsStyles/subFormStyle.css';

function SubForm() {
    return (
        <>
            <form action='' className='my-3 ' >
                <div className="d-flex justify-content-center align-items-center">
                    <div className="subscription-form-container my-2">
                        <input type="email" className="form-control email-input " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address" />
                        <button type="submit" className="btn subscribe-btn">Subscribe</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default SubForm;