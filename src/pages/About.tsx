import CheckIcon from "../components/CheckIcon";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          About This Website
        </h1>
      </section>

      {/* Project Overview */}
      <section className="bg-white rounded-xl shadow-md p-8 mb-8">
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          Project Overview
        </h2>
        <p className="text-gray-700 leading-relaxed">
          This is a static website built to introduce our team and individual
          members. The project demonstrates our effort in creating responsive,
          user-friendly interfaces using modern web development tools and
          frameworks.
        </p>
      </section>

      {/* Technologies */}
      <section className="bg-white rounded-xl shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
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
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
          Technologies Used
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg text-primary mb-3">
              Frontend Framework
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                <div>
                  <strong className="text-gray-800">React 19</strong>
                  <p className="text-sm text-gray-600">
                    For building interactive user interfaces
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                <div>
                  <strong className="text-gray-800">TypeScript</strong>
                  <p className="text-sm text-gray-600">
                    For type-safe development
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                <div>
                  <strong className="text-gray-800">TailwindCSS</strong>
                  <p className="text-sm text-gray-600">
                    For utility-first CSS styling
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg text-primary mb-3">
              Build Tools
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary mr-2">▸</span>
                <div>
                  <strong className="text-gray-800">Vite</strong>
                  <p className="text-sm text-gray-600">
                    For fast development and optimized builds
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Assignment Requirements */}
      <section className="bg-white rounded-xl shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
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
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
          Assignment Requirements Met
        </h2>
        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
              <svg
                className="w-4 h-4 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <strong className="text-gray-800">
                Information (4.0 points):
              </strong>
              <p className="text-gray-600">
                Homepage with team overview and detailed pages for each of 5
                members
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
              <CheckIcon className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <strong className="text-gray-800">
                Information (4.0 points):
              </strong>
              <p className="text-gray-600">
                Homepage with team overview and detailed pages for each of 5
                members
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
              <CheckIcon className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <strong className="text-gray-800">
                Theme and Color (2.0 points):
              </strong>
              <p className="text-gray-600">
                Custom theme with primary color{" "}
                <strong className="primarycolor">#4acaa8</strong> and secondary{" "}
                <strong className="secondarycolor">#989898</strong>
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
              <CheckIcon className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <strong className="text-gray-800">
                Responsive Layout (2.0 points):
              </strong>
              <p className="text-gray-600">
                Responsive sidebar navigation, header, footer with
                mobile-friendly design
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 p-1 rounded-full mr-3 mt-1">
              <CheckIcon className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <strong className="text-gray-800">
                Publish on Public Host (2.0 points):
              </strong>
              <p className="text-gray-600">
                Ready to be deployed to GitHub Pages.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
