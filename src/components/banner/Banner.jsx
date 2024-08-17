import React from 'react'

function Banner() {
    return (
        <>
            <div className="container py-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="d-none d-lg-block">
                            <img src="https://www.omtamilcalendar.com/auspicious_icons/website-mobile.png" className='img-fluid' alt="banner image" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 my-auto">
                        <div className="banner-heading d-flex text-center text-md-start justify-content-center align-items-center flex-column">
                            <h1 className='text-white fs-3'><strong>லட்சக்கணக்கான வாசகர்களை</strong><strong> கொண்ட செயலி</strong> </h1>
                            <p className='text-white fs-5'>ஓம் தமிழ் காலண்டர் செயலியின் மூலம்  சிறந்த துல்லியமான தகவல்களை உங்கள் விரல் நுனியில் பெற்றிடலாம். இந்த செயலியானது லட்சக்கணக்கான தமிழர்களுக்காக உருவாக்கப்பட்டது.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner