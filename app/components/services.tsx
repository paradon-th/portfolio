import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Services: React.FC = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h2
        id="services-heading"
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12"
      >
        I provide full-stack web development services, building scalable,
        high-performance applications with seamless user experiences. From
        frontend design to backend architecture, I ensure efficient and
        maintainable solutions.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-light-hover hover:-translate-y-5 duration-500 dark:hover:bg-dark-hover dark:hover:shadow-white"
          >
            <Image
              src={icon}
              alt=""
              aria-hidden="true"
              className="w-10 dark:brightness-0 dark:invert"
            />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">
              {title}
            </h3>
            <p className="text-gray-600 text-sm leading-5 dark:text-white/80">
              {description}
            </p>
            <a
              className="flex items-center gap-2 text-sm mt-5"
              href={link || "#"}
              aria-label={`Read more about ${title}`}
            >
              Read More{" "}
              <Image
                src={assets.right_arrow}
                alt=""
                aria-hidden="true"
                className="w-4"
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Services;
