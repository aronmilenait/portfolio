"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinux, FaReact, FaDocker, FaNode } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiSqlite,
  SiVite,
  SiNextdotjs,
  SiNestjs,
  SiGnubash,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "Nest.js", icon: <SiNestjs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Linux", icon: <FaLinux /> },
  { name: "Bash", icon: <SiGnubash /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "SQLite", icon: <SiSqlite /> },
  { name: "Vite", icon: <SiVite /> },
];

const skillsClassName =
  "text-3xl sm:text-4xl lg:text-5xl text-pink-800 transition-transform duration-300";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-gradient-to-r from-pink-300 via-pink-500 to-pink-700 text-white p-10 md:p-20 lg:p-32 flex flex-col justify-center items-center"
    >
      <h4 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12">
        Skills
      </h4>
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-* gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center"
            whileHover={{ scale: 1.1, rotate: 10, cursor: "pointer" }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className={`bg-gradient-to-r from-pink-300 to-pink-100 p-4 rounded-full ${skillsClassName} shadow-lg`}
            >
              {skill.icon}
            </motion.div>
            <p className="text-white font-bold mt-4 text-base sm:text-lg lg:text-xl">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
