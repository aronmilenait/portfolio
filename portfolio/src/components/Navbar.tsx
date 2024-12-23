"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Experience", href: "/#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/#contact" },
  ];

  const linkClasses =
    "font-bold hover:text-pink-700 transition-colors duration-300";

  return (
    <nav className="bg-gradient-to-r from-pink-100 to-pink-300 text-pink-900 fixed top-0 left-0 w-full shadow-lg z-50 transition-transform duration-300 ease-in-out">
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <a className="text-2xl sm:text-3xl lg:text-2xl font-bold" href="/">
          Milena Sol Aron
        </a>
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
            <Link key={link.name} href={link.href} className={linkClasses}>
              {link.name}
            </Link>
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
