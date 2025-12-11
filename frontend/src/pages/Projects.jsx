import React from 'react'
import Navbar from '../components/Navbar';
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";
import Footer from '../components/Footer';

const Projects = () => {
    return (
        <>
            <Navbar />
            <div className="bg-[#030712] opacity-100 w-full min-h-screen p-5 pt-15 text-white font-[inter]">
                <h1 className="w-[50%] mx-auto pt-20 text-5xl text-balance font-[calistoga]">my projects.</h1>
                <div className="w-[50%] mx-auto pt-10 gap-5 grid grid-cols-2 items-center justify-between">
                    <div className="h-[67vh] border rounded-xl border-[#1F2937]">
                        <div className="p-8">
                            <img className="rounded-xl" src={project1} alt="" />
                            <h1 className="pt-5">Uber Clone (under development)</h1>
                            <h1 className=" pt-2 text-xs opacity-60">Your personal ride companion for fast, safe, and comfortable journeys.</h1>
                            <div className="pt-5 flex flex-wrap gap-1">
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">React.js</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">Node.js</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">Express.js</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">MongoDB</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">JWT</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">TailwindCSS</h1>
                            </div>
                            <div className="pt-5 flex gap-1 text-black">
                                <a className="text-xs px-2 py-1 bg-white rounded-md hover:bg-[#ffffff92] transition ease-in-out duration-200" href="https://github.com/adarsh-279/Uber---Clone"><i className="ri-github-line pr-2"></i>Source</a>
                            </div>
                        </div>
                    </div>
                    <div className="h-[67vh] border rounded-xl border-[#1F2937]">
                        <div className="p-8">
                            <img className="rounded-xl" src={project2} alt="" />
                            <h1 className="pt-6">Reelish</h1>
                            <h1 className=" pt-3 text-xs opacity-60">Where Food Meets Reels.</h1>
                            <div className="pt-6 flex flex-wrap gap-1">
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">React.js</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">Node.js</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">Express.js</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">MongoDB</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">JWT</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">TailwindCSS</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">ImageKit</h1>
                            </div>
                            <div className="pt-6 flex gap-1 text-black">
                                <a className="text-xs px-2 py-1 bg-white rounded-md hover:bg-[#ffffff92] transition ease-in-out duration-200" href="https://github.com/adarsh-279/Reelish"><i className="ri-github-line pr-2"></i>Source</a>
                                <a className="text-xs px-2 py-1 bg-white rounded-md hover:bg-[#ffffff92] transition ease-in-out duration-200" href="https://reelish.vercel.app/"><i className="ri-global-line pr-2"></i>Website</a>
                            </div>
                        </div>
                    </div>
                    <div className="h-[67vh] border rounded-xl border-[#1F2937]">
                        <div className="p-8">
                            <img className="rounded-xl" src={project3} alt="" />
                            <h1 className="pt-6">Minify</h1>
                            <h1 className=" pt-3 text-xs opacity-60">URL Shortener.</h1>
                            <div className="pt-6 flex flex-wrap gap-1">
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">React.js</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">Node.js</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">Express.js</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">MongoDB</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">JWT</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">TailwindCSS</h1>
                            </div>
                            <div className="pt-6 flex gap-1 text-black">
                                <a className="text-xs px-2 py-1 bg-white rounded-md hover:bg-[#ffffff92] transition ease-in-out duration-200" href="https://github.com/adarsh-279/Minify"><i className="ri-github-line pr-2"></i>Source</a>
                                <a className="text-xs px-2 py-1 bg-white rounded-md hover:bg-[#ffffff92] transition ease-in-out duration-200" href="https://minify-seven.vercel.app/"><i className="ri-global-line pr-2"></i>Website</a>
                            </div>
                        </div>
                    </div>
                    <div className="h-[67vh] border rounded-xl border-[#1F2937]">
                        <div className="p-8">
                            <img className="rounded-xl" src={project4} alt="" />
                            <h1 className="pt-6">Plantory</h1>
                            <h1 className=" pt-3 text-xs opacity-60">Helping Gardens Speak, One Story at a Time.</h1>
                            <div className="pt-6 flex flex-wrap gap-1">
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">React.js</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">Locomotive</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">Framer Motion</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">TailwindCSS</h1>
                            </div>
                            <div className="pt-6 flex gap-1 text-black">
                                <a className="text-xs px-2 py-1 bg-white rounded-md hover:bg-[#ffffff92] transition ease-in-out duration-200" href="https://github.com/adarsh-279/Plantory"><i className="ri-github-line pr-2"></i>Source</a>
                                <a className="text-xs px-2 py-1 bg-white rounded-md hover:bg-[#ffffff92] transition ease-in-out duration-200" href="https://plantory-five.vercel.app/"><i className="ri-global-line pr-2"></i>Website</a>
                            </div>
                        </div>
                    </div>
                    <div className="h-[67vh] border rounded-xl border-[#1F2937]">
                        <div className="p-8">
                            <img className="rounded-xl" src={project5} alt="" />
                            <h1 className="pt-6">Cinemate</h1>
                            <h1 className=" pt-3 text-xs opacity-60">Your gateway to trending movies and TV shows around the world.</h1>
                            <div className="pt-6 flex flex-wrap gap-1">
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">React.js</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">TailwindCSS</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">TMDB API</h1>
                            </div>
                            <div className="pt-6 flex gap-1 text-black">
                                <a className="text-xs px-2 py-1 bg-white rounded-md hover:bg-[#ffffff92] transition ease-in-out duration-200" href="https://github.com/adarsh-279/Cinemate"><i className="ri-github-line pr-2"></i>Source</a>
                                <a className="text-xs px-2 py-1 bg-white rounded-md hover:bg-[#ffffff92] transition ease-in-out duration-200" href="https://cinemate-self.vercel.app/"><i className="ri-global-line pr-2"></i>Website</a>
                            </div>
                        </div>
                    </div>
                    <div className="h-[67vh] border rounded-xl border-[#1F2937]">
                        <div className="p-8">
                            <img className="rounded-xl" src={project6} alt="" />
                            <h1 className="pt-6">Enhancia</h1>
                            <h1 className=" pt-3 text-xs opacity-60">AI Image Enhancer.</h1>
                            <div className="pt-6 flex flex-wrap gap-1">
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">React.js</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">TailwindCSS</h1>
                                <h1 className="text-xs p-1 bg-[#1F2937] rounded-md">PicWish API</h1>
                            </div>
                            <div className="pt-6 flex gap-1 text-black">
                                <a className="text-xs px-2 py-1 bg-white rounded-md hover:bg-[#ffffff92] transition ease-in-out duration-200" href="https://github.com/adarsh-279/Enhancia"><i className="ri-github-line pr-2"></i>Source</a>
                                <a className="text-xs px-2 py-1 bg-white rounded-md hover:bg-[#ffffff92] transition ease-in-out duration-200" href="https://enhancia-beryl.vercel.app/"><i className="ri-global-line pr-2"></i>Website</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full pt-10">
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default Projects