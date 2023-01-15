import React from 'react'

const LoadingBar = () => {
    return (
        <>
            <div className='position-relative' style={{ minHeight: '20vh' }}>
                <p className='position-absolute top-50 start-50 translate-middle'>Loading...</p>
            </div>
        </>
    )
}

export default LoadingBar