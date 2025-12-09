import React, { useState } from "react";
import Navbar from '../components/Navbar';
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.jpg'
import Work from "./Work";
import Education from "./Education";


const Home = () => {

    const [activeTab, setActiveTab] = useState("education");

    return (
        <>
            <Navbar/>
            <div className="bg-[#030712] opacity-100 w-full min-h-screen p-5 pt-15 text-white">
                <div className='w-[50%] mx-auto pt-15 flex flex-col'>
                    <div className='w-full h-80 flex items-center justify-between'>
                        <div className='w-[55%] h-full flex flex-col gap-10'>
                            <div className='w-full'>
                                <h1 className='text-5xl text-balance font-[calistoga] pb-4'>hi adarsh here. <span>👋</span></h1>
                                <h1 className='text-lg font-[inter]'>19 yo from Kolkata, India</h1>
                                <h1 className='pt-5 font-[inter]'>Backend by strength, full-stack <br /> by curiosity.</h1>
                                <h1 className='pt-5 font-[inter]'>Building scalable web apps and <br /> exploring AI integration.</h1>
                            </div>
                            <div className='flex items-center gap-5'>
                                <a className='px-4 py-2 border border-[#1F2937] rounded-lg hover:bg-[#1F2937] transition ease-in-out duration-200' href="https://drive.google.com/file/d/1zf6mnGoLv1gV0zGM1WcJD5kqo2kHmaeb/view?usp=sharing">Resume <i className="ri-file-line"></i></a>
                                <a className='text-xl opacity-60 hover:opacity-100 transition ease-in-out duration-200' href="https://www.linkedin.com/in/adarsh-shaw279/"><i className="ri-linkedin-line"></i></a>
                                <a className='text-xl opacity-60 hover:opacity-100 transition ease-in-out duration-200' href="https://github.com/adarsh-279"><i className="ri-github-line"></i></a>
                                <a className='text-xl opacity-60 hover:opacity-100 transition ease-in-out duration-200' href="https://mail.google.com/mail/?view=cm&fs=1&to=shawadarsh279@gmail.com"><i className="ri-mail-line"></i></a>
                            </div>
                        </div>
                        <div className='w-[45%] pr-5 h-full relative flex items-center justify-end'>
                            <img className='absolute w-45 rounded-lg rotate-8' src={img1} alt="" />
                            <img className='absolute w-45 rounded-lg -rotate-8' src={img2} alt="" />
                            <img className='absolute w-45 rounded-lg' src={img3} alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-[50%] mx-auto mt-10 flex justify-center">
                    <div className="flex bg-[#1b1f2a] p-0.5 rounded-xl border border-[#2c3340] w-full">
                        <button
                                onClick={() => setActiveTab("education")}
                                className={`
                                    flex-1 py-2 rounded-lg font-medium transition-all
                                    ${activeTab === "education" ? "bg-[#0d1117] text-white" : "text-gray-400"}
                                `}
                            >
                                Education
                        </button>

                        <button
                            onClick={() => setActiveTab("work")}
                            className={`
                                flex-1 py-2 rounded-lg font-medium transition-all
                                ${activeTab === "work" ? "bg-[#0d1117] text-white" : "text-gray-400"}
                            `}
                        >
                            Work
                        </button>
                    </div>
                </div>

                <div className="w-[50%] mx-auto mt-5">
                    {activeTab === "education" ? <Education /> : <Work />}
                </div>

                
            </div>
        </>
    );
}

export default Home