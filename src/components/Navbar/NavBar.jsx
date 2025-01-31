import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [dropdownOpen2, setDropdownOpen2] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleDropdown2 = () => {
    setDropdownOpen2(!dropdownOpen2);
  };

  return (
    <nav className="fixed w-full top-0 left-0 bg-[#006897] z-index">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-white font-bold text-2xl">
              MyLogo
            </Link>
            <div className="hidden md:block ">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="#" className="text-gray-300 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link to="#" className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  About
                </Link>
                {/* Services Dropdown */}
                <div className="relative">
                  <button
                    onClick={toggleDropdown}
                    className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Services
                  </button>
                  {dropdownOpen && (
                    <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 z-10">
                      <Link
                        to="/service1"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                      >
                        Service 1
                      </Link>
                      <Link
                        to="/service2"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                      >
                        Service 2
                      </Link>
                      <Link
                        to="/service3"
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                      >
                        Service 3
                      </Link>
                    </div>
                  )}
                </div>
                <Link to="#" className="text-gray-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-blue-700 inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
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
                    d="M4 6h16M4 12h16m-7 6h7"
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden z-10" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="#"
              className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <div className="relative">
              <button onClick={toggleDropdown2}
                className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                About
              </button>
              {dropdownOpen2 && (
                <div className="mt-2 bg-white shadow-lg rounded-md py-2 z-10">
                  <Link
                    to="/about1"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    About 1
                  </Link>
                  <Link
                    to="/about2"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    About 2
                  </Link>
                  <Link
                    to="/about3"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    About 3
                  </Link>
                </div>
              )}

            </div>
            {/* Dropdown for Mobile */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Services
              </button>
              {dropdownOpen && (
                <div className="mt-2 bg-white shadow-lg rounded-md py-2 z-10">
                  <Link
                    to="/service1"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    Service 1
                  </Link>
                  <Link
                    to="/service2"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    Service 2
                  </Link>
                  <Link
                    to="/service3"
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-500 hover:text-white"
                  >
                    Service 3
                  </Link>
                </div>
              )}
            </div>
            <Link
              to="#"
              className="text-gray-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
