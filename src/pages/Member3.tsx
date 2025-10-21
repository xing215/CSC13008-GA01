import { Link } from "react-router-dom";

const Member3 = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 font-sans">
      {/* BACK BUTTON */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4acaa8]/10 text-[#4acaa8] hover:bg-[#4acaa8]/20 mb-10 transition-colors"
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
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12 border border-[#4acaa8]/20">
        <div className="flex flex-col md:flex-row">
          {/* Left banner */}
          <div className="md:w-1/3 bg-gradient-to-b from-[#4acaa8] to-[#6de0c2] flex flex-col justify-center items-center text-white p-10 relative">
            <div className="w-32 h-44 rounded-2xl border-4 border-white shadow-lg overflow-hidden mb-4">
              <img
                src={`${import.meta.env.BASE_URL}dtphat/DoanThanhPhat.jpg`}
                alt="Đoàn Thành Phát"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <h2 className="text-2xl font-bold mb-1">Đoàn Thành Phát</h2>
            <p className="text-sm font-medium opacity-90">Back-End Developer</p>
          </div>

          {/* Right info */}
          <div className="flex-1 p-10">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-4">
              Introduction
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              I'm a university student majoring in Software Engineerer with a strong passion for backend
              development. I enjoy building server-side systems and working with databases to create
              reliable and efficient applications. I love solving technical problems and continuously learning new
              technologies like Node.js, Express, and MongoDB. My goal is to become a skilled backend engineer who
              can build scalable and secure systems.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#4acaa8]/10 text-[#4acaa8] text-sm font-medium">
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
                dtphat23@clc.fitus.edu.vn
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#989898]/10 text-[#989898] text-sm font-medium">
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
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                Ho Chi Minh City, Vietnam
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* SKILLS + EDUCATION */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Skills */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#4acaa8]/10 hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-bold text-[#4acaa8] mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-600 text-sm mb-4">
            Core technologies and tools I’ve applied in my projects.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              "C/C++",
              "Python",
              "Node.js",
              "HTML",
              "CSS",
            ].map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1.5 bg-[#4acaa8]/10 text-[#4acaa8] rounded-full text-sm font-medium hover:bg-[#4acaa8] hover:text-white transition-all duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-[#4acaa8]/10 hover:shadow-xl transition-all duration-300">
          <h2 className="text-xl font-bold text-[#4acaa8] mb-4">Education</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#4acaa8]/10 text-[#4acaa8] rounded-xl">
                🎓
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Nguyen Tat Thanh High School for the Gifted, Kon Tum Province
                </h3>
                <p className="text-sm text-gray-600">
                  2019-2022
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="w-10 h-10 flex items-center justify-center bg-[#989898]/10 text-[#989898] rounded-xl">
                🎓
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                University of Science, VNU-HCM
                </h3>
                <p className="text-sm text-gray-600">Bachelor of Information Technology (2023 - 2027)</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* PROJECTS */}
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#4acaa8]/10 hover:shadow-xl transition-all duration-300">
        <h2 className="text-xl font-bold text-[#4acaa8] mb-6">
          Highlighted Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Air Quality Guardian",
              desc: "An IoT-based air monitoring platform using ESP32, Node.js, Firebase, and Node-RED to track and automatically control air purifiers via MQTT.",
              link: "https://github.com/Kidynein/Air-Quality-Guardian",
            },
            {
              title: "Wumpus World AI",
              desc: "An intelligent agent integrating logic inference and A* search algorithm to navigate the Wumpus World environment with reasoning capabilities.",
              link: "https://github.com/Kidynein/Wumpus-World-AI",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="group border border-[#4acaa8]/10 rounded-xl p-5 hover:border-[#4acaa8]/40 transition-all duration-300 bg-[#4acaa8]/5 hover:bg-[#4acaa8]/10"
            >
              <h3 className="font-semibold text-gray-800 text-lg mb-1 group-hover:text-[#4acaa8] transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">{p.desc}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="text-[#4acaa8] underline decoration-[#4acaa8]/30 underline-offset-4 hover:decoration-[#4acaa8]"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Member3;
