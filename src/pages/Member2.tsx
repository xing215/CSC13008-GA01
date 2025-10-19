import { Link } from "react-router-dom";

const Member2 = () => {
    return (
        <div className="max-w-6xl mx-auto">
            {/* BACK BUTTON  */}
            <Link
                to="/"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/15 mb-10 transition-colors"
            >
                <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
                <span className="font-semibold">Back to Home</span>
            </Link>

            {/* HEADER */}
            <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl overflow-hidden mb-10 ring-1 ring-black/5">
                <div className="h-36 mb-6 bg-gradient-to-r from-secondary to-primary"></div>

                <div className="px-8 pb-8">
                    <div className="flex flex-col md:flex-row md:items-end -mt-20 md:-mt-16 mb-8">
                        <div className="w-32 h-32 rotate-1 rounded-2xl border-4 border-white shadow-xl overflow-hidden bg-gray-100 mb-4 md:mb-0">
                            <img
                                src="/nhtanh/tnnhuaa.jpg"
                                alt="Nguyễn Hiền Tuấn Anh"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="md:ml-6 flex-1">
                            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-2">
                                Nguyễn Hiền Tuấn Anh
                            </h1>
                            <p className="text-lg md:text-xl text-primary font-semibold">
                                Front-end developer
                            </p>
                        </div>

                        <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                nhtanh23@clc.fitus.edu.vn
                            </span>
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                    ></path>
                                </svg>
                                TP.HCM, Việt Nam
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* INFORMATION*/}
            <div className="grid md:grid-cols-2 gap-8 mb-10">
                {/* SKILLS */}
                <div className="bg-white rounded-2xl shadow-lg p-6 ring-1 ring-black/5">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                        <svg
                            className="w-6 h-6 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                        </svg>
                        <div className="flex-1 h-px bg-gray-300" />
                        <h2 className="text-sm font-extrabold tracking-[0.2em] text-gray-700 uppercase">
                            Skills
                        </h2>
                        <div className="flex-1 h-px bg-gray-300" />
                    </div>

                    {/* Skill bars */}
                    <div className="space-y-4">
                        {[
                            { name: "HTML", level: "90%" },
                            { name: "CSS", level: "80%" },
                            { name: "Javascript", level: "80%" },
                            { name: "SASS", level: "65%" },
                        ].map((skill, i) => (
                            <div key={i} className="flex items-center gap-4">
                                {/* Skill name */}
                                <span className="w-25 ml-10 text-sm font-semibold text-gray-700 tracking-wide">
                                    {skill.name}
                                </span>

                                {/* Skill bar */}
                                <div className="flex-1 h-2.25 bg-[#989898] rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-[#4acaa8] transition-all duration-700"
                                        style={{ width: skill.level }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* EDUCATION*/}
                <div className="bg-white rounded-2xl shadow-lg p-6 ring-1 ring-black/5">
                    <div className="flex items-center gap-3 mb-6">
                        <svg
                            className="w-6 h-6 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>
                        <div className="flex-1 h-px bg-gray-300" />
                        <h2 className="text-sm font-extrabold tracking-[0.2em] text-gray-700 uppercase">
                            Education
                        </h2>
                        <div className="flex-1 h-px bg-gray-300" />
                    </div>

                    {/* Timeline */}
                    <div className="relative pl-6">
                        <span
                            className="absolute left-2 top-0 bottom-0 w-px bg-gray-300"
                            aria-hidden="true"
                        />

                        {/* Item 1 */}
                        <div className="relative pb-6">
                            <span className="absolute -left-[20px] top-2 w-3 h-3 rounded-full bg-gray-800 border-4 border-white outline outline-1 outline-gray-300" />
                            <h3 className="font-semibold text-gray-900">
                                Thoai Ngoc Hau High School for the Gifted
                            </h3>
                            <p className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                                2020-2023
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className="relative">
                            <span className="absolute -left-[20px] top-2 w-3 h-3 rounded-full bg-gray-800 border-4 border-white outline outline-1 outline-gray-300" />
                            <h3 className="font-semibold text-gray-900">
                                University of Science
                            </h3>
                            <p className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                                2023-2027
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PROJECTS */}
            <div className="grid gap-8">
                <div className="bg-white rounded-2xl shadow-lg p-6 ring-1 ring-black/5">
                    <div className="flex items-center gap-3 mb-6">
                        <svg
                            className="w-6 h-6 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                strokeWidth="2"
                                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                            ></path>
                        </svg>
                        <div className="flex-1 h-px bg-gray-300" />
                        <h2 className="text-sm font-extrabold tracking-[0.2em] text-gray-700 uppercase">
                            Projects
                        </h2>
                        <div className="flex-1 h-px bg-gray-300" />
                    </div>

                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <span className="text-primary mr-5 translate-y-0.5">
                                ▸
                            </span>
                            <span className="text-gray-800">
                                <strong>Wumpus World Agent</strong>{" "}
                                <em>
                                    (
                                    <a
                                        className="underline decoration-primary/30 underline-offset-4 hover:decoration-primary"
                                        href="https://www.youtube.com/watch?v=5qo3aiVvf0I"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Youtube
                                    </a>
                                    )
                                </em>
                                <br />
                                <span className="text-gray-600">
                                    <em>
                                        Introduction to Artificial Intelligence
                                    </em>
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Member2;
