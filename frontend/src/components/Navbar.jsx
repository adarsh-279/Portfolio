import React from 'react'
import { Link } from 'react-router-dom'
import "remixicon/fonts/remixicon.css";
import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 z-50 w-full p-6 bg-[#0307128f] backdrop-blur-sm'>
            <div className='w-[50%] mx-auto flex items-center justify-between'>
                <div className='w-[40%] flex items-center justify-start gap-10 text-white'>
                    <Link className='opacity-60 hover:opacity-100 transition ease-in-out duration-200' path='/' element={<Home />}>home</Link>
                    <Link className='opacity-60 hover:opacity-100 transition ease-in-out duration-200' path='/projects' element={<Projects />}>projects</Link>
                    <Link className='opacity-60 hover:opacity-100 transition ease-in-out duration-200' path='/contact' element={<Contact />}>contact</Link>
                </div>
                <i className="ri-sun-line text-[#ffe600] font-light px-2 py-2 rounded-xl hover:bg-[#1F2937] transition ease-in-out duration-200"></i>
            </div>
        </div>
    )
}

export default Navbar