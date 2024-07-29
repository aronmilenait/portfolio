"use client";
import { motion } from "framer-motion";

export const AboutMe = () => {
  return (
    <section id="about" className="bg-pink-600 text-white p-10 md:p-20 lg:p-32">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.h2
          className="text-center text-amber-100 text-4xl sm:text-5xl lg:text-6xl font-bold text-shadow-xl mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-xl sm:text-2xl lg:text-2xl mb-4 text-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I am a <b>full-stack developer</b> from Argentina who adheres to SOLID
          principles to ensure high-quality code. With over a year of experience
          in the field, my true passion lies in <b>back-end development</b>, but
          I also enjoy creating beautiful websites.
        </motion.p>
        <motion.p
          className="text-md sm:text-2xl lg:text-2xl mb-4 text-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Besides coding, I&apos;ve been using <b>GNU/Linux</b> since 2015, which has
          given me a solid foundation in that area.
        </motion.p>
        <motion.p
          className="text-md sm:text-2xl lg:text-2xl text-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Since May 2024, I&apos;ve been pursuing an <b>Associate Degree</b> in{" "}
          <b>Programming</b> at the <b>Universidad Tecnológica Nacional</b>.
        </motion.p>
      </motion.div>
    </section>
  );
};
