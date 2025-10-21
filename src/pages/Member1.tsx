import { Link } from "react-router-dom";

const Member1 = () => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center text-primary hover:text-opacity-80 mb-8 transition-colors"
      >
        <svg
          className="w-5 h-5 mr-2"
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
        Back to Home
      </Link>

      {/* Profile Header */}
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
        <div className="bg-secondary h-32 mb-5"></div>
        <div className="px-8 pb-8">
          <div className="flex flex-col md:flex-row md:items-end -mt-16 mb-6">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-gray-200 mb-4 md:mb-0">
              <img
                src={`${import.meta.env.BASE_URL}vntthanh/profilepic.jpg`}
                alt="Vương Ngũ Tín Thành"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:ml-6 flex-1">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Vương Ngũ Tín Thành
              </h1>
              <p className="text-xl text-primary font-medium">
                Full-stack developer
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <svg
                className="w-5 h-5 mr-3 text-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              vntthanh23@clc.fitus.edu.vn
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {/* Skills */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
            <svg
              className="w-6 h-6 mr-3 text-primary"
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
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "TypeScript",
              "Node.js",
              "MongoDB",
            ].map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-primary bg-opacity-10 text-white rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
            <svg
              className="w-6 h-6 mr-3 text-primary"
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
            Education
          </h2>
          <div>
            <h3 className="font-semibold text-gray-800">
              Bachelor of Information Technology
            </h3>
            <p className="text-primary">University of Science, VNU-HCM</p>
            <p className="text-gray-600 text-sm">2023 - 2027</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Interests */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
            <svg
              className="w-6 h-6 mr-3 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            Projects
          </h2>
          <ul className="space-y-2">
            <li key={1} className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span className="text-gray-700">
                <strong>Lumiere Cinema</strong> <em>(<a href="https://github.com/xing215/LumiereCinema">GitHub</a>)</em><br/>
                A comprehensive cinema management system.
              </span>
            </li>
            <li key={2} className="flex items-start">
              <span className="text-primary mr-2">▸</span>
              <span className="text-gray-700">
                <strong>SAB Store</strong> <em>(<a href="https://github.com/xing215/SAB-Store">GitHub</a>)</em><br/>
                A minimalist e-commerce web application.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Member1;
