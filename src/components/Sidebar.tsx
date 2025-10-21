import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMemberDropdownOpen, setIsMemberDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);
  const closeSidebar = () => setIsOpen(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isMemberActive = () => {
    return location.pathname.startsWith("/member");
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden bg-primary text-white p-3 rounded-md shadow-lg hover:bg-opacity-90 transition-all"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-xl z-40 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:w-80 w-72`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="bg-primary text-white p-8">
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-white overflow-hidden border-4 border-white shadow-lg">
              <img
                src={`${import.meta.env.BASE_URL}sabi.png`}
                alt="Team Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-2xl font-bold text-center mb-1">Our Team</h1>
            <p className="text-sm text-center opacity-90">
              CSC13008 - Group Assignment
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6">
            <ul className="space-y-1 px-4">
              {/* Home */}
              <li>
                <Link
                  to="/"
                  onClick={closeSidebar}
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    isActive("/")
                      ? "bg-primary text-white font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    Home
                  </span>
                </Link>
              </li>

              {/* Members Dropdown */}
              <li>
                <button
                  onClick={() => setIsMemberDropdownOpen(!isMemberDropdownOpen)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    isMemberActive()
                      ? "bg-primary text-white font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <span className="flex items-center">
                      <svg
                        className="w-5 h-5 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      Members
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isMemberDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                {/* Members Submenu */}
                <ul
                  className={`ml-4 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                    isMemberDropdownOpen
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <li key={num}>
                      <Link
                        to={`/member/${num}`}
                        onClick={closeSidebar}
                        className={`block px-4 py-2 rounded-lg transition-all ${
                          isActive(`/member/${num}`)
                            ? "bg-primary text-white font-medium border-l-4 border-white"
                            : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                        }`}
                      >
                        Member {num}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>

              {/* About */}
              <li>
                <Link
                  to="/about"
                  onClick={closeSidebar}
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    isActive("/about")
                      ? "bg-primary text-white font-semibold"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="flex items-center">
                    <svg
                      className="w-5 h-5 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    About this website
                  </span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <div className="border-t border-gray-200 p-4">
            <div className="flex justify-center space-x-4">
              <a
                href="https://github.com/xing215/CSC13008-GA01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
