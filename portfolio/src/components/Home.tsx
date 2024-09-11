"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBook, FaPencilAlt, FaMapMarkedAlt } from "react-icons/fa";

export const Home = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-pink-300 via-pink-500 to-pink-700 text-white p-10 md:p-20 pt-32 lg:p-32"
    >
      <div className="flex flex-col items-center space-y-10">
        <motion.div
          className="flex flex-col items-center text-center max-w-screen-md mx-auto"
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
            Milena Sol Aron
          </motion.h1>
          <motion.p
            className="text-xl sm:text-3xl lg:text-3xl font-semibold text-white opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Software Developer
          </motion.p>
        </motion.div>

        <motion.div
          className="relative flex flex-col items-center space-y-8 max-w-screen-md mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image src="/myself.jpeg" alt="Photo of Milena Sol Aron" fill />
          </div>
        </motion.div>
        <motion.div
          className="text-xl mt-12 text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaMapMarkedAlt className="text-3xl text-white mb-4" />
            <p className="text-lg text-white font-semibold">
              Based in Buenos Aires, Argentina. <br></br>
              My native language is Spanish, and my English proficiency is C2.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaPencilAlt className="text-3xl text-white mb-4" />
            <p className="text-lg text-white font-semibold">
              Developer and founder of{" "}
              <a
                href="https://carrerait.vercel.app"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                CarreraIT
              </a>
              , which intends to to help individuals from Hispanic countries
              discover their career paths in the tech field.
            </p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaBook className="text-3xl text-white mb-4" />
            <p className="text-lg text-white font-semibold">
              Pursuing an Associate&apos;s Degree in Programming at Universidad
              Tecnológica Nacional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
