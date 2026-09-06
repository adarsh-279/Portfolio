import React, { useState } from "react";
import Navbar from '../components/Navbar';
import img1 from '../assets/images/img1.webp'
import img2 from '../assets/images/img2.webp'
import img3 from '../assets/images/img3.webp'
import Work from "./Work";
import Education from "./Education";
import { Link } from 'react-router-dom'
import project7 from '../assets/images/project7.webp'
import project2 from '../assets/images/project2.webp'
import Footer from "../components/Footer";
import { motion } from "framer-motion";

import Skills from "../components/Skills";

const Home = () => {

    const [activeTab, setActiveTab] = useState("education");

    return (
        <>
            {/* Part 1 */}
            <Navbar/>
            <div className="bg-white dark:bg-[#030712] opacity-100 w-full min-h-screen p-5 pt-15 text-black dark:text-white font-[inter] overflow-x-hidden">
                <div className='w-full md:w-[90%] lg:w-[70%] xl:w-[50%] mx-auto pt-16 flex flex-col'>
                    <div className='w-full h-80 flex flex-col md:flex-row items-center justify-between'>
                        <div className='w-full xl:w-[55%] h-full flex flex-col gap-10'>
                            <div className='w-full'>
                                <h1 className='text-4xl md:text-5xl text-balance font-[calistoga] pb-4'>hi adarsh here. <motion.span whileHover={{ rotate: [0, 25, -15, 25, 0] }}
                                    transition={{ duration: 1, ease: "easeInOut" }}
                                    style={{ display: "inline-block", cursor: "pointer" }}>👋</motion.span></h1>
                                <h1 className='text-sm md:text-lg font-[inter]'>20 yo from Kolkata, India</h1>
                                <h1 className='text-sm md:text-lg pt-5 font-[inter]'>Backend by strength, full-stack <br /> by curiosity.</h1>
                                <h1 className='text-sm md:text-lg pt-5 font-[inter]'>Building scalable web apps and <br /> exploring AI integration.</h1>
                            </div>
                            <div className='flex items-center gap-5'>
                                <a className='px-4 py-2 border border-[#E5E7EB] dark:border-[#1F2937] rounded-lg hover:bg-[#e5e7eb72] dark:hover:bg-[#1F2937] transition ease-in-out duration-200' href="https://drive.google.com/file/d/1ADEkFWBEjXA9pk9mW8RUPQPqoSCSFq5Z/view?usp=sharing">Resume <i className="ri-file-line"></i></a>
                                <a className='text-xl opacity-60 hover:opacity-100 transition ease-in-out duration-200' href="https://www.linkedin.com/in/adarsh-shaw279/"><i className="ri-linkedin-line"></i></a>
                                <a className='text-xl opacity-60 hover:opacity-100 transition ease-in-out duration-200' href="https://github.com/adarsh-279"><i className="ri-github-line"></i></a>
                                <a className='text-xl opacity-60 hover:opacity-100 transition ease-in-out duration-200' href="https://x.com/Adarsh_Shaw27"><i className="ri-twitter-x-line"></i></a>
                                <a className='text-xl opacity-60 hover:opacity-100 transition ease-in-out duration-200' href="mailto:shawadarsh279@gmail.com"><i className="ri-mail-line"></i></a>
                            </div>
                        </div>
                        <div className='w-full md:w-[45%] md:pr-5 h-full pt-40 md:pt-0 relative flex items-center justify-center md:justify-end'>
                            <img className='absolute w-45 rounded-lg rotate-8' loading="eager" decoding="async" src={img3} alt="" />
                            <img className='absolute w-45 rounded-lg -rotate-8' loading="eager" decoding="async" src={img2} alt="" />
                            <img className='absolute w-45 rounded-lg' fetchPriority="high"  decoding="async" src={img1} alt="" />
                        </div>
                    </div>
                </div>

                {/* Part 2 */}
                <div className="w-full md:w-[90%] lg:w-[70%] xl:w-[50%] mx-auto mt-80 md:mt-20 flex flex-col justify-center">
                    <Skills />
                </div>

                <div className="w-full md:w-[90%] lg:w-[70%] xl:w-[50%] mx-auto mt-20 flex justify-center">
                    <div className="flex bg-[#F3F4F6] dark:bg-[#1b1f2a] px-2 py-1 rounded-xl border border-[#F3F4F6] dark:border-[#2c3340] w-full">
                        <button
                                onClick={() => setActiveTab("education")}
                                className={`
                                    flex-1 py-1 rounded-lg font-medium transition-all
                                    ${activeTab === "education" ? "bg-[#FFFFFF] dark:bg-[#0d1117] text-black dark:text-white" : "text-gray-400"}
                                `}
                            >
                                Education
                        </button>

                        <button
                            onClick={() => setActiveTab("work")}
                            className={`
                                flex-1 py-1 rounded-lg font-medium transition-all
                                ${activeTab === "work" ? "bg-[#FFFFFF] dark:bg-[#0d1117] text-black dark:text-white" : "text-gray-400"}
                            `}
                        >
                            Work
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-[90%] lg:w-[70%] xl:w-[50%] mx-auto mt-2">
                    {activeTab === "education" && <Education />}
                    {activeTab === "work" && <Work />}
                </div>

                {/* Part 3 */}
                <div className='w-full md:w-[90%] lg:w-[70%] xl:w-[50%] mx-auto pt-20 flex flex-col'>
                    <div className="w-full flex items-center justify-between mb-5">
                        <h1 className='text-3xl md:text-4xl text-balance font-[calistoga] pb-4'>featured projects</h1>
                        <Link className="text-sm opacity-60 hover:opacity-100 transition ease-in-out duration-200" to='/projects'>view more <i className="ri-arrow-right-line"></i></Link>
                    </div>
                    <div className="w-full gap-5 flex flex-col md:flex-row items-center justify-between">
                        <div className="h-[56vh] md:h-[45vh] lg:h-[35vh] xl:h-[38vh] 2xl:h-[67vh] w-full md:w-[50%] border-2 rounded-xl border-[#7a7a7a52] dark:border-[#1F2937]">
                            <div className="p-8">
                                <img className="rounded-xl" loading="lazy" decoding="async" src={project7} alt="" />
                                <h1 className="pt-5">HireZen AI</h1>
                                <h1 className=" pt-2 text-xs opacity-60">AI-powered resume analysis and interview preparation platform.</h1>
                                <div className="pt-5 flex flex-wrap gap-1 dark:text-white">
                                    <h1 className="text-xs p-1 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-md">React.js</h1>
                                    <h1 className="text-xs p-1 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-md">Node.js</h1>
                                    <h1 className="text-xs p-1 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-md">Express.js</h1>
                                    <h1 className="text-xs p-1 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-md">MongoDB</h1>
                                    <h1 className="text-xs p-1 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-md">JWT</h1>
                                    <h1 className="text-xs p-1 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-md">TailwindCSS</h1>
                                    <h1 className="text-xs p-1 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-md">Puppeteer</h1>
                                </div>
                                <div className="pt-5 flex gap-1 text-white dark:text-black">
                                    <a className="text-xs px-2 py-1 bg-[#1F2937] dark:bg-white rounded-md hover:bg-[#1f2937e6] dark:hover:bg-[#ffffff92] transition ease-in-out duration-200" href="https://github.com/adarsh-279/HireZen-AI"><i className="ri-github-line pr-2"></i>Source</a>
                                    <a className="text-xs px-2 py-1 bg-[#1F2937] dark:bg-white rounded-md hover:bg-[#1f2937e6] dark:hover:bg-[#ffffff92] transition ease-in-out duration-200" href="https://hirezen-ai.vercel.app/"><i className="ri-global-line pr-2"></i>Website</a>
                                </div>
                            </div>
                        </div>
                        <div className="h-[56vh] md:h-[45vh] lg:h-[35vh] xl:h-[38vh] 2xl:h-[67vh] w-full md:w-[50%] border-2 rounded-xl border-[#7a7a7a52] dark:border-[#1F2937]">
                            <div className="p-8">
                                <img className="rounded-xl" loading="lazy" decoding="async" src={project2} alt="" />
                                <h1 className="pt-6">Reelish</h1>
                                <h1 className=" pt-3 text-xs opacity-60">Where Food Meets Reels.</h1>
                                <div className="pt-6 flex flex-wrap gap-1 dark:text-white">
                                    <h1 className="text-xs p-1 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-md">React.js</h1>
                                    <h1 className="text-xs p-1 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-md">Node.js</h1>
                                    <h1 className="text-xs p-1 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-md">Express.js</h1>
                                    <h1 className="text-xs p-1 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-md">MongoDB</h1>
                                    <h1 className="text-xs p-1 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-md">JWT</h1>
                                    <h1 className="text-xs p-1 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-md">TailwindCSS</h1>
                                    <h1 className="text-xs p-1 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-md">ImageKit</h1>
                                </div>
                                <div className="pt-6 flex gap-1 text-white dark:text-black">
                                    <a className="text-xs px-2 py-1 bg-[#1F2937] dark:bg-white rounded-md hover:bg-[#1f2937e6] dark:hover:bg-[#ffffff92] transition ease-in-out duration-200" href="https://github.com/adarsh-279/Reelish"><i className="ri-github-line pr-2"></i>Source</a>
                                    <a className="text-xs px-2 py-1 bg-[#1F2937] dark:bg-white rounded-md hover:bg-[#1f2937e6] dark:hover:bg-[#ffffff92] transition ease-in-out duration-200" href="https://reelish.vercel.app/"><i className="ri-global-line pr-2"></i>Website</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-[90%] lg:w-[70%] xl:w-[50%] mx-auto pt-15 flex flex-col mb-10'>
                    <h1 className='text-4xl text-balance font-[calistoga] pb-5'>contributions.</h1>
                    <div className="w-full mx-auto my-2 md:my-5">
                        <img loading="lazy" decoding="async"
                            src="https://ghchart.rshah.org/adarsh-279"
                            alt="GitHub Contributions"
                            className="w-full p-2 md:p-5 border-2 border-[#7a7a7a52] dark:border-[#1f2937] rounded-xl"
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Home