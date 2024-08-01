"use client";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";
import Image from "next/image";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-white text-pink-700 p-10 md:p-20 lg:p-32 relative overflow-hidden"
    >
      <motion.h5
        className="text-pink-700 text-4xl sm:text-5xl lg:text-6xl font-bold text-shadow-xl mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h5>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-br from-pink-200 to-pink-300 text-pink-700 p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4 flex justify-center">
              <Image
                src={project.image}
                alt={project.name}
                width={project.width}
                height={project.height}
                className="rounded-md shadow-md w-full h-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-2 text-center">
                {project.name}
              </h3>
              <p className="text-md mb-4 text-center">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-pink-400 to-pink-500 text-pink-50 p-2 rounded-md text-sm font-semibold shadow-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-100 text-pink-700 py-2 px-8 rounded-xl text-lg font-bold hover:bg-pink-200 shadow-lg border-2 border-pink-400 transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-lg font-bold text-pink-600 p-4 rounded-lg shadow-lg border-2 border-pink-400">
        Note: this is a personal selection. For more projects, visit my{" "}
        <a
          href="https://github.com/aronmilenait"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-600 underline hover:text-pink-500"
        >
          GitHub
        </a>
        .
      </p>
    </section>
  );
};
