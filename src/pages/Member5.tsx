import { Link } from "react-router-dom";

const Member5 = () => {
  return (
    <div className="max-w-5xl mx-auto">
        {/* TODO: YOUR PROFILE CONTENT */}
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
      {/* Profile Section */}
      <div className="bg-white shadow-md rounded-2xl p-8 border border-gray-100">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <img
            src={`${import.meta.env.BASE_URL}hsluan/picture.jpg`}
            alt="Profile"
            className="w-28 h-28 rounded-full object-cover shadow-sm mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800">Huỳnh Sĩ Luân</h1>
          <p className="text-gray-500">Backend Developer</p>
        </div>

        {/* Info Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <div className="bg-blue-50 rounded-xl p-5 hover:shadow-lg transition">
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

          {/* Skills */}
          <div className="bg-green-50 rounded-xl p-5 hover:shadow-lg transition">
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
            <ul className="list-disc list-inside space-y-1 marker:text-primary marker:font-bold">
              <li>Java, Spring Boot, MySQL</li>
              <li>RESTful API, Authentication</li>
              <li>Docker, Postman</li>
            </ul>
          </div>

          {/* Interests */}
          <div className="bg-yellow-50 rounded-xl p-5 hover:shadow-lg transition">
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
              Interests
            </h2>
            <p>
              Exploring how technology can solve real-world problems.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-purple-50 rounded-xl p-5 hover:shadow-lg transition">
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
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8
                    M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5
                    a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact
            </h2>
            <ul className="space-y-1">
              <li>
                <span className="font-medium">Email:</span> hsluan23@clc.fitus.edu.vn
              </li>
              <li>
                <span className="font-medium">GitHub:</span>{" "}
                <a
                  href="https://github.com/HuynhLuan05"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/HuynhLuan05
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member5;