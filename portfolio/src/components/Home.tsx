"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
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
];

const socialLinksClassName =
  "text-4xl sm:text-5xl lg:text-6xl text-pink-700 hover:text-pink-800 transition-colors duration-300";

export const Home = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-amber-100 to-pink-400 text-white p-20 md:p-32 flex flex-col justify-center items-center"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h1
          className="text-pink-700 text-4xl sm:text-5xl lg:text-6xl font-bold text-shadow-xl mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I&apos;m Milena Sol Aron
        </motion.h1>
        <motion.p
          className="text-pink-600 text-xl sm:text-2xl lg:text-3xl font-bold text-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          A Full-Stack Developer, creating stunning websites and efficient
          back-end functionalities.
        </motion.p>
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex gap-4 mt-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={socialLinksClassName}
            aria-label={link.name}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};
