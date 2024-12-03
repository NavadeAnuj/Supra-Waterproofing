import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-lg font-bold">
          <a href="/" className="hover:text-gray-300">
            Supra Waterproofing
          </a>
        </div>

        {/* Hamburger Menu (Mobile View) */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <nav
          className={`absolute top-16 left-0 w-full bg-blue-600 text-white shadow-md md:static md:w-auto md:shadow-none md:flex md:items-center ${
            isMenuOpen ? "block" : "hidden"
          } transition-all duration-300`}
        >
          <ul className="flex flex-col md:flex-row md:space-x-6 md:items-center">
            <li>
              <a
                href="/"
                className="block px-4 py-2 hover:text-gray-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="block px-4 py-2 hover:text-gray-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/service"
                className="block px-4 py-2 hover:text-gray-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/contactus"
                className="block px-4 py-2 hover:text-gray-300 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
