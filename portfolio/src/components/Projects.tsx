"use client";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";
import Image from "next/image";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-r from-amber-100 to-pink-400 text-white p-10 md:p-20 lg:p-32"
    >
      <motion.h5
        className="text-pink-700 text-4xl sm:text-5xl lg:text-6xl font-bold text-shadow-xl mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Projects
      </motion.h5>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="bg-pink-700 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="mb-4 flex justify-center"
            >
              <Image
                src={project.image}
                alt={project.name}
                width={project.width}
                height={project.height}
                className="object-cover rounded-md"
              />
            </motion.div>
            <p className="text-2xl font-bold text-pink-100 mb-2">
              {project.name}
            </p>
            <p className="text-md text-amber-100 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-amber-200 text-pink-800 p-2 rounded-md text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-center">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-200 text-pink-800 p-2 rounded-xl text-lg font-bold hover:bg-amber-300 transition-colors duration-300"
              >
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
