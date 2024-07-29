"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Home = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-pink-300 via-pink-500 to-pink-700 text-white p-10 md:p-20 flex flex-col justify-center items-center min-h-screen"
    >
      <div className="max-w-screen-lg w-full flex flex-col items-center space-y-10">
        <motion.div
          className="flex flex-col items-center text-center space-y-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Hi! I&apos;m Milena Sol Aron
          </motion.h1>
          <motion.p
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white opacity-90"
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
          <div className="relative w-40 h-40 sm:w-52 sm:h-52 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
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
