"use client";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const contactLinks = [
  {
    name: "Github",
    icon: <FaGithub />,
    url: "https://github.com/aronmilenait",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/milenasaron/",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    url: "mailto:aronmilena.it@gmail.com",
  },
];

const contactLinksClassName =
  "text-4xl sm:text-5xl lg:text-6xl text-pink-700 hover:text-pink-800 transition-colors duration-300";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-amber-100 to-pink-400 text-white p-20 md:p-32 flex flex-col justify-center items-center"
    >
      <h5 className="text-pink-700 text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
        Contact
      </h5>
      <div className="flex gap-8 mb-8">
        {contactLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={contactLinksClassName}
          >
            {link.icon}
          </a>
        ))}
      </div>
      {/* <a
        href="https://bloglinkthatihaventdefinedyet"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-pink-500 text-pink-50 px-6 py-3 rounded-lg text-lg font-bold hover:bg-pink-700 transition-colors duration-300"
      >
        Check My Blog
      </a> */}
    </section>
  );
};
