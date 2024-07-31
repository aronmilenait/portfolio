"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Home = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-pink-300 via-pink-500 to-pink-700 text-white p-10 md:p-20 pt-32 lg:p-32"
    >
      <div className="flex flex-col items-center space-y-10">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white drop-shadow-lg mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hi! I&apos;m Milena Sol Aron
          </motion.h1>
          <motion.p
            className="text-xl sm:text-3xl lg:text-3xl font-semibold text-white opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            A Full-Stack Developer based in Argentina
          </motion.p>
        </motion.div>

        <motion.div
          className="relative flex flex-col items-center space-y-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image src="/myself.jpeg" alt="Photo of Milena Sol Aron" fill />
          </div>

          <motion.p
            className="text-lg text-center sm:text-xl lg:text-2xl text-white opacity-90 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            With over a year of experience in the field, I follow the SOLID
            principles and I&apos;m pursuing an Associate Degree in Programming.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
