import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

interface WorkProps {
  isDarkMode: boolean;
}
const Work: React.FC<WorkProps> = ({ isDarkMode }) => {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg"
      >
        My portfolio
      </motion.p>
      <motion.h2
        id="work-heading"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl"
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
      >
        Welcome to my web development portfolio! Here are some of the latest
        projects I&apos;ve worked on, showcasing my skills in frontend,
        backend, and full-stack development.
      </motion.p>

      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="grid grid-cols-auto my-10 gap-5 dark:text-black list-none p-0"
      >
        {workData.map((projects, index) => (
          <motion.li
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            style={{ backgroundImage: `url(${projects.bgImage})` }}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
              <div>
                <h3 className="font-semibold">{projects.title}</h3>
                <p className="text-sm text-gray-700">{projects.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image
                  src={assets.send_icon}
                  alt=""
                  aria-hidden="true"
                  className="w-5"
                />
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="text-center text-gray-600 dark:text-white/70 my-12 italic"
      >
        More projects currently in the works — check back soon{" "}
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt=""
          aria-hidden="true"
          className="w-4 inline-block ml-1"
        />
      </motion.p>
    </section>
  );
};

export default Work;
