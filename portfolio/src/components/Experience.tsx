"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { workExperience } from "../data/experienceData";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <section
      id="experience"
      className="bg-gradient-to-r from-amber-100 to-pink-400 text-white flex flex-col items-center p-10 md:p-20 lg:p-32"
    >
      <motion.h3
        className="text-pink-700 text-4xl sm:text-5xl lg:text-6xl font-bold text-shadow-xl mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Experience
      </motion.h3>

      {workExperience.map((experience, index) => (
        <motion.div
          key={index}
          className="bg-pink-600 p-6 md:p-10 rounded-lg shadow-md mb-8 w-full max-w-4xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleExpand(index)}>
            <div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-50 mb-2">
                {experience.role}
              </p>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-amber-100 mb-4">
                {experience.company}
              </h2>
              <p className="text-md sm:text-lg lg:text-xl font-bold text-pink-50 mb-4">
                {experience.timeframe}
              </p>
            </div>
            <div>
              {expandedIndex === index ? (
                <FaChevronUp className="text-2xl" />
              ) : (
                <FaChevronDown className="text-2xl" />
              )}
            </div>
          </div>
          {expandedIndex === index && (
            <ul className="list-disc list-inside space-y-2 mt-4">
              {experience.responsibilities.map((responsibility, idx) => (
                <li
                  key={idx}
                  className="ml-4 text-md sm:text-lg lg:text-xl text-white"
                >
                  {responsibility}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </section>
  );
};
