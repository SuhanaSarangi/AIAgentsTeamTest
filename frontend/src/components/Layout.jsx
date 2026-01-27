import { Link, useLocation } from "react-router";
import { useState } from "react";

function Layout({ children }) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link className="text-xl font-bold" to="/">
                Portfolio
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/"
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/projects"
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  to="/projects"
                >
                  Projects
                </Link>
                <Link
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/career"
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  to="/career"
                >
                  Career
                </Link>
                <Link
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/services"
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  to="/services"
                >
                  Services
                </Link>
                <Link
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/research"
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  to="/research"
                >
                  Research
                </Link>
                <Link
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === "/contact"
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                {isMenuOpen && (
                  <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                      <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium">Home</Link>
                      <Link to="/projects" className="block px-3 py-2 rounded-md text-base font-medium">Projects</Link>
                      <Link to="/career" className="block px-3 py-2 rounded-md text-base font-medium">Career</Link>
                      <Link to="/services" className="block px-3 py-2 rounded-md text-base font-medium">Services</Link>
                      <Link to="/research" className="block px-3 py-2 rounded-md text-base font-medium">Research</Link>
                      <Link to="/contact" className="block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
                    </div>
                  </div>
                )}
              </nav>
              <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                  {children}
                </div>
              </main>
            </div>
          );
        }
        
        export default Layout;