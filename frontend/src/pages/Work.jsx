import gridcrest_logo from "../assets/images/gridcrest_logo.webp";


const workData = [
  {
    id: 1,
    company: "GridCrest Technologies Pvt Ltd.",
    role: "Software Engineer - Intern",
    duration: "July 2026 - Present",
    logo: gridcrest_logo,
    points: [
      "Documented 20+ project features and workflows, improving team productivity by 20% through structured documentation.",
      "Created and maintained SRS and technical documentation, while identifying and reporting 15+ bugs to improve project quality.",
      "Assisted in deploying project builds 3 times on the organization’s in-house server, gaining hands-on exposure to deployment and project delivery.",
    ],
  },
];

const Work = () => {
    return (
        <div className="w-full font-[inter]">
            <div className="w-full flex flex-col gap-5">
                {workData.map((work) => (
                    <div
                        key={work.id}
                        className="w-full border-2 border-[#7a7a7a52] dark:border-[#1F2937] rounded-lg"
                    >
                        <div className="w-full p-4 flex justify-around items-start">
                            <img
                                className="rounded-full w-12 h-12 object-cover"
                                src={work.logo}
                                alt={`${work.company} logo`}
                            />

                            <div className="w-full ml-4 dark:text-white flex flex-col">
                                <h1 className="text-xs opacity-60">
                                    {work.duration}
                                </h1>

                                <h1 className="text-md font-semibold">
                                    {work.company}
                                </h1>

                                <h1 className="text-sm opacity-60 mb-2">
                                    {work.role}
                                </h1>

                                {work.points.map((point, index) => (
                                    <h1
                                        key={index}
                                        className="text-sm opacity-60"
                                    >
                                        • {point}
                                    </h1>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;

