import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import project1 from "../assets/images/project1.webp";
import project2 from "../assets/images/project2.webp";
import project3 from "../assets/images/project3.webp";
import project4 from "../assets/images/project4.webp";
import project5 from "../assets/images/project5.webp";
import project6 from "../assets/images/project6.webp";

const projectsData = [
    {
        id: 1,
        title: "Uber Clone (under development)",
        description:"Your personal ride companion for fast, safe, and comfortable journeys.",
        image: project1,
        technologies: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "TailwindCSS",
        ],
        links: [
        {
            type: "Source",
            url: "https://github.com/adarsh-279/Uber---Clone",
            icon: "ri-github-line",
        },
        ],
        padding: { title: "pt-5", desc: "pt-2", tech: "pt-5", links: "pt-5" },
    },
    {
        id: 2,
        title: "Reelish",
        description: "Where Food Meets Reels.",
        image: project2,
        technologies: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "TailwindCSS",
            "ImageKit",
        ],
        links: [
        {
            type: "Source",
            url: "https://github.com/adarsh-279/Reelish",
            icon: "ri-github-line",
        },
        {
            type: "Website",
            url: "https://reelish.vercel.app/",
            icon: "ri-global-line",
        },
        ],
        padding: { title: "pt-6", desc: "pt-3", tech: "pt-6", links: "pt-6" },
    },
    {
        id: 3,
        title: "Minify",
        description: "URL Shortener.",
        image: project3,
        technologies: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "TailwindCSS",
        ],
        links: [
        {
            type: "Source",
            url: "https://github.com/adarsh-279/Minify",
            icon: "ri-github-line",
        },
        {
            type: "Website",
            url: "https://minify-seven.vercel.app/",
            icon: "ri-global-line",
        },
        ],
        padding: { title: "pt-6", desc: "pt-3", tech: "pt-6", links: "pt-6" },
    },
    {
        id: 4,
        title: "Plantory",
        description: "Helping Gardens Speak, One Story at a Time.",
        image: project4,
        technologies: ["React.js", "Locomotive", "Framer Motion", "TailwindCSS"],
        links: [
        {
            type: "Source",
            url: "https://github.com/adarsh-279/Plantory",
            icon: "ri-github-line",
        },
        {
            type: "Website",
            url: "https://plantory-five.vercel.app/",
            icon: "ri-global-line",
        },
        ],
        padding: { title: "pt-6", desc: "pt-3", tech: "pt-6", links: "pt-6" },
    },
    {
        id: 5,
        title: "Cinemate",
        description:"Your gateway to trending movies and TV shows around the world.",
        image: project5,
        technologies: ["React.js", "TailwindCSS", "TMDB API"],
        links: [
        {
            type: "Source",
            url: "https://github.com/adarsh-279/Cinemate",
            icon: "ri-github-line",
        },
        {
            type: "Website",
            url: "https://cinemate-self.vercel.app/",
            icon: "ri-global-line",
        },
        ],
        padding: { title: "pt-6", desc: "pt-3", tech: "pt-6", links: "pt-6" },
    },
    {
        id: 6,
        title: "Enhancia",
        description: "AI Image Enhancer.",
        image: project6,
        technologies: ["React.js", "TailwindCSS", "PicWish API"],
        links: [
        {
            type: "Source",
            url: "https://github.com/adarsh-279/Enhancia",
            icon: "ri-github-line",
        },
        {
            type: "Website",
            url: "https://enhancia-beryl.vercel.app/",
            icon: "ri-global-line",
        },
        ],
        padding: { title: "pt-6", desc: "pt-3", tech: "pt-6", links: "pt-6" },
    },
];

const Projects = () => {
    return (
        <>
            <Navbar />
            <div className="dark:bg-[#030712] opacity-100 w-full min-h-screen p-5 pt-15 dark:text-white font-[inter]">
                <h1 className="w-full md:w-[90%] lg:w-[70%] xl:w-[50%] mx-auto pt-20 text-4xl md:text-5xl text-balance font-[calistoga]">my projects.</h1>

            <div className="w-full md:w-[90%] lg:w-[70%] xl:w-[50%] mx-auto pt-10 gap-5 grid md:grid-cols-2 items-center justify-between">
                {projectsData.map((project) => (
                    <div
                        key={project.id}
                        className="h-[56vh] md:h-[45vh] lg:h-[35vh] xl:h-[38vh] 2xl:h-[67vh] border rounded-xl border-[#7a7a7a52] dark:border-[#1F2937]"
                    >
                    <div className="p-8">
                        <img
                            className="rounded-xl"
                            src={project.image}
                            alt={project.title}
                        />
                        <h1 className={project.padding.title}>{project.title}</h1>
                        <h1 className={`${project.padding.desc} text-xs opacity-60`}>{project.description}</h1>

                        <div className={`${project.padding.tech} flex flex-wrap gap-1`}>
                            {project.technologies.map((tech, idx) => (
                                <h1
                                    key={idx}
                                    className="text-xs p-1 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-md"
                                >
                                    {tech}
                                </h1>
                                ))}
                        </div>

                        <div
                            className={`${project.padding.links} flex gap-1 text-white dark:text-black`}
                        >
                            {project.links.map((link, idx) => (
                                <a
                                    key={idx}
                                    className="text-xs px-2 py-1 bg-[#1F2937] dark:bg-white rounded-md hover:bg-[#1f2937e6] dark:hover:bg-[#ffffff92] transition ease-in-out duration-200"
                                    href={link.url}
                                >
                                    <i className={`${link.icon} pr-2`}></i>
                                    {link.type}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                ))}
            </div>

            <div className="w-full pt-10">
                <Footer />
            </div>
        </div>
    </>
    );
};

export default Projects;