import React from 'react'
import { Link } from 'react-router-dom'
import "remixicon/fonts/remixicon.css";
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

const Navbar = () => {
    return (
        <div className='w-[45%] h-10 mx-auto flex items-center justify-between'>
            <div className='w-[40%] flex items-center justify-around text-white opacity-60'>
                <Link path='/' element={<Home />}>home</Link>
                <Link path='/projects' element={<Projects />}>projects</Link>
                <Link path='/contact' element={<Contact />}>contact</Link>
            </div>
            <i class="ri-sun-line text-[#ffe600] font-light"></i>
        </div>
    )
}

export default Navbar