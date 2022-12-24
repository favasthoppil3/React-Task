import React from 'react'
import './Navbar.css'
import {BsMegaphone} from 'react-icons/bs'
import { BsGeoAlt } from "react-icons/bs";
import { BsBoxArrowInRight } from "react-icons/bs";


function Nav() {
  return (
    <div>
      <div className='nav fixed-top bg-white'>
        <img src='https://www.xentice.com/static/media/woxlandlogo.2adca2c7.png' />
        <div className='nav-list  ms-auto'>
            <ul className=''>
                <li> <BsMegaphone className=' fs-5 me-1 text-dark' /> Post Ad</li>
                <li><BsGeoAlt className=' fs-5 me-1 text-dark' />Near Me</li>
                <li><BsBoxArrowInRight className=' fs-5 me-1 text-dark'/> Login/Sign Up</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
