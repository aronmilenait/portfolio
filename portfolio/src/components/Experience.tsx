"use client";
import { useState } from "react";
import { workExperience } from "../data/experienceData";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IconType } from "react-icons";
import {
  SiNodedotjs,
  SiPuppeteer,
  SiReact,
  SiDocker,
  SiWordpress,
  SiWebflow,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMysql,
  SiNestjs,
  SiExpress,
  SiVite,
  SiSqlite,
} from "react-icons/si";

export const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  const icons: { [key: string]: IconType[] } = {
    "Connect Nodes IO": [
      SiNodedotjs,
      SiExpress,
      SiTypescript,
      SiJavascript,
      SiPuppeteer,
      SiSqlite,
    ],
    Bigger: [
      SiTypescript,
      SiReact,
      SiTailwindcss,
      SiDocker,
      SiMysql,
      SiNestjs,
      SiWordpress,
      SiWebflow,
      SiVite,
    ],
  };

  const technologyIcons = (company: string) => {
    return (
      icons[company]?.map((Icon, idx) => (
        <Icon
          key={idx}
          className="text-4xl text-white bg-pink-700 rounded-full p-1 mr-2"
        />
      )) || null
    );
  };

  return (
    <section
      id="experience"
      className="bg-white text-pink-700 flex flex-col items-center p-10 md:p-20 lg:p-32"
    >
      <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12">
        Experience
      </h3>
      {workExperience.map((experience, index) => (
        <div
          key={index}
          className="bg-gradient-to-r from-pink-500 via-pink-600 to-pink-700 text-white p-6 md:p-10 rounded-lg shadow-md mb-8 w-full max-w-4xl"
        >
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleExpand(index)}
          >
            <div>
              <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">
                {experience.role}
              </h4>
              <h5 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
                {experience.company}
              </h5>
              <p className="text-md sm:text-lg lg:text-xl font-bold mb-4">
                {experience.timeframe}
              </p>
              <div className="flex flex-wrap items-center">
                {technologyIcons(experience.company)}
              </div>
            </div>
            <div className="flex items-center">
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
                <li key={idx} className="ml-4 text-md sm:text-lg lg:text-xl">
                  {responsibility}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
};
