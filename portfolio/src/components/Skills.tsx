"use client";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinux,
  FaReact,
  FaDocker,
  FaPython,
  FaNode,
} from "react-icons/fa";
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
  // Programming Languages
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "Python", icon: <FaPython /> },

  // Frameworks/Libraries
  { name: "React", icon: <FaReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Express.js", icon: <SiExpress /> },
  { name: "Node.js", icon: <FaNode /> },
  { name: "Nest.js", icon: <SiNestjs /> },

  // Styling
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },

  // Tools
  { name: "GitHub", icon: <FaGithub /> },
  { name: "Linux", icon: <FaLinux /> },
  { name: "Bash", icon: <SiGnubash /> },
  { name: "Docker", icon: <FaDocker /> },

  // Databases
  { name: "MySQL", icon: <SiMysql /> },
  { name: "SQLite", icon: <SiSqlite /> },

  // Build Tools
  { name: "Vite", icon: <SiVite /> },
];

const skillsClassName =
  "text-3xl sm:text-4xl lg:text-5xl text-amber-100 transition-transform duration-300";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-pink-600 text-white p-20 md:p-32 flex flex-col justify-center items-center"
    >
      <h4 className="text-amber-100 text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
        Skills
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-* gap-8 mt-8">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center p-4"
            whileHover={{ scale: 1.1, rotate: 10, cursor: "pointer" }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className={`bg-gradient-to-r from-amber-300 to-pink-400 p-4 rounded-full ${skillsClassName}`}
            >
              {skill.icon}
            </motion.div>
            <p className="text-amber-100 font-bold mt-2 text-lg sm:text-xl lg:text-2xl">
              {skill.name}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
