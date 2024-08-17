import React from 'react'

function VerticalCard04({neram}) {
    return (
        <>
            <div className="col-4">
                <p className='fw-bold'>{Object.keys(neram)}</p>
            </div>
            <div className="col-8">
                <p>{neram && neram.காலை ||  neram.மாலை || neram.இராகு || neram.எமகண்டம் ||neram.குளிகை || 'no data'}</p>
            </div>
        </>
    )
}

export default VerticalCard04