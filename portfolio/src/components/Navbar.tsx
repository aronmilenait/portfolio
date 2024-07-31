"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const linkClasses =
    "hover:text-pink-100 transition-colors duration-300 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-pink-300 after:scale-x-0 after:transition-transform after:duration-300 group-hover:after:scale-x-100 hover:scale-110";

  return (
    <nav className="bg-gradient-to-r from-pink-200 via-pink-300 to-pink-500 text-pink-900 fixed top-0 left-0 w-full shadow-lg z-50 transition-transform duration-300 ease-in-out">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <p className="text-2xl sm:text-3xl lg:text-2xl font-bold">
          Milena S. Aron
        </p>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <FaTimes className="text-3xl transition-transform transform rotate-180" />
            ) : (
              <FaBars className="text-3xl transition-transform transform rotate-180" />
            )}
          </button>
        </div>
        <ul className="hidden sm:flex gap-6 sm:gap-8 lg:gap-10 text-lg sm:text-xl lg:text-2xl">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <a href={link.href} className={linkClasses}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {isOpen && (
        <ul className="flex flex-col items-center mt-4 sm:hidden gap-4 text-lg">
          {navLinks.map((link, index) => (
            <li key={index} className="relative group">
              <a
                href={link.href}
                className={`font-bold ${linkClasses}`}
                onClick={toggleMenu}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
