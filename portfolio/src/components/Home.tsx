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
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

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
            className={`${playfair.className} text-3xl sm:text-5xl lg:text-5xl font-extrabold text-white drop-shadow-lg mb-4`}
            {...fadeInUp}
          >
            Milena Sol Aron
          </motion.h1>
          <motion.p
            className={`${playfair.className} text-2xl sm:text-3xl lg:text-4xl font-semibold text-white drop-shadow-lg`}
            {...fadeIn}
          >
            Software Developer and Founder of{" "}
            <a
              className="font-bold text-pink-300 hover:text-pink-600 hover:bg-pink-100 transition-colors duration-300 rounded-md px-1"
              href="https://www.carrerait.lat/"
              target="_blank"
            >
              CarreraIT
            </a>
          </motion.p>
          <div className="mt-8 flex justify-center">
            <a
              href="/resume"
              className="bg-gradient-to-r from-pink-600 to-pink-800 text-white text-xl font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out hover:bg-gradient-to-l from-pink-800 to-pink-600"
            >
              View my resume
            </a>
          </div>
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

        {/* <motion.div
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
                Founder of{" "}
                <a
                  href="https://carrerait.vercel.app"
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CarreraIT
                </a>
                , which helps people from Hispanic countries discover their
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
            text="Currently learning AWS Cloud and Software Architecture."
          />
        </motion.div> */}
      </div>
    </section>
  );
};
