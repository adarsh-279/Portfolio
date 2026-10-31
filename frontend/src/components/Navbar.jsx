import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import "remixicon/fonts/remixicon.css";
import { useState } from 'react';

const Navbar = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);


    return (
        <div className='fixed top-0 left-0 z-50 w-full p-4 sm:p-6 dark:bg-[#0307128f] bg-[#ffffff1a] backdrop-blur-sm'>
            <div className='w-full sm:w-[90%] lg:w-[70%] xl:w-[50%] mx-auto flex items-center justify-between'>
                <div className='flex flex-1 items-center justify-start gap-4 sm:gap-8 text-black dark:text-white'>
                    <Link className='opacity-60 hover:opacity-100 transition ease-in-out duration-200' to='/'>home</Link>
                    <Link className='opacity-60 hover:opacity-100 transition ease-in-out duration-200' to='/projects'>projects</Link>
                    <Link className='opacity-60 hover:opacity-100 transition ease-in-out duration-200' to='/contact'>contact</Link>
                </div>
                <button
                    type="button"
                    aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
                    aria-pressed={theme === "dark"}
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className={`${theme === "dark" ? "ri-sun-line text-[#ffe600]" : "ri-moon-line text-black"} shrink-0 font-light px-2 py-2 rounded-xl hover:bg-[#e5e7eb72] dark:hover:bg-[#1F2937] transition ease-in-out duration-200`}
                />
            </div>
        </div>
    )
}

export default Navbar