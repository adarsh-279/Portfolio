import React from 'react'

const Footer = () => {
    return (
        <div className='w-full bottom-0 left-0 py-5 dark:bg-[#0307128f]'>
            <div className='w-full md:w-[90%] lg:w-[70%] xl:w-[50%] mx-auto flex items-center justify-between pt-5 pb-10'>
                <h1 className=" pt-2 text-xs opacity-60">Thank you for visiting my portfolio! <br /> I hope you enjoyed exploring my work.</h1>
                <div className='flex items-center gap-5'>
                    <a className='text-xl opacity-60 hover:opacity-100 transition ease-in-out duration-200' href="https://www.linkedin.com/in/adarsh-shaw279/"><i className="ri-linkedin-line"></i></a>
                    <a className='text-xl opacity-60 hover:opacity-100 transition ease-in-out duration-200' href="https://github.com/adarsh-279"><i className="ri-github-line"></i></a>
                    <a className='text-xl opacity-60 hover:opacity-100 transition ease-in-out duration-200' href="https://x.com/Adarsh_Shaw27"><i className="ri-twitter-x-line"></i></a>
                    <a className='text-xl opacity-60 hover:opacity-100 transition ease-in-out duration-200' href="mailto:shawadarsh279@gmail.com" target="_blank"><i className="ri-mail-line"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Footer