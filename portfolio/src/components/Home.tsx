"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaBook,
  FaPencilAlt,
  FaMapMarkedAlt,
  FaUniversity,
} from "react-icons/fa";
import AboutCard from "./AboutCard";
import { fadeInUp, fadeIn } from "../utils/MotionAnimations";

export const Home = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-r from-pink-300 via-pink-500 to-pink-700 text-white p-10 md:p-20 pt-32 lg:p-32"
    >
      <div className="flex flex-col items-center space-y-10">
        <motion.div
          className="flex flex-col items-center text-center max-w-screen-md mx-auto"
          {...fadeInUp}
        >
          <motion.h1
            className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white drop-shadow-lg mb-4"
            {...fadeInUp}
          >
            Milena Sol Aron
          </motion.h1>
          <motion.p
            className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white drop-shadow-lg"
            {...fadeIn}
          >
            Software Developer
          </motion.p>
        </motion.div>
        {/*
        <motion.div
          className="relative flex flex-col items-center space-y-8 max-w-screen-md mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 overflow-hidden">
            <Image src="/myself.png" alt="Photo of Milena Sol Aron" fill />
          </div>
        </motion.div>
        */}

        <motion.div
          className="text-xl mt-12 text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8"
          {...fadeIn}
        >
          <AboutCard
            icon={<FaMapMarkedAlt className="text-3xl text-pink-800 mb-4" />}
            text="Based in Buenos Aires, Argentina. My native language is Spanish, and my English proficiency is C2."
          />
          <AboutCard
            icon={<FaPencilAlt className="text-3xl text-pink-800 mb-4" />}
            text={
              <>
                Developer and founder of{" "}
                <a
                  href="https://carrerait.vercel.app"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CarreraIT
                </a>
                , which helps individuals from Hispanic countries discover their
                career paths in tech.
              </>
            }
          />
          <AboutCard
            icon={<FaUniversity className="text-3xl text-pink-800 mb-4" />}
            text="Pursuing an Associate's Degree in Programming at Universidad Tecnológica Nacional."
          />
          <AboutCard
            icon={<FaBook className="text-3xl text-pink-800 mb-4" />}
            text="Currently learning AWS and C++."
          />
        </motion.div>
      </div>
    </section>
  );
};
