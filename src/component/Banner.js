import React from 'react'
import './Navbar.css'
function Banner() {
    return (
        <div>
        <div className='banner'></div>
        <div className='d-flex container mt-5 mb-5'>
            <div className='card' style={{width:'65%'}}>
                <img src='https://xenticebucket21.s3.ap-south-1.amazonaws.com/adv/8OHYcD4EA5hpJqQgtQmNVfLrO0YXspuEDfseTmXX.png' className='w-100 ' />
            </div>
            <div className=' card' style={{width:'35%'}}>
                <img src='https://xenticebucket21.s3.ap-south-1.amazonaws.com/adv/M2dhebuxJ100xVTDB0sKwbvlQYyG9POXRyEYz9rk.png' className='w-100 '/>
            </div>
        </div>
        </div>
    )
}

export default Banner
