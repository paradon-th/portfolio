import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Header: React.FC = () => {
  return (
    <section
      id="top"
      aria-label="Introduction"
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col justify-center items-center gap-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.profile}
          alt="Paradon Thonthong"
          className="rounded-full w-48"
          priority
        />
      </motion.div>
      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex items-end gap-2 text-xl md:text-2xl mb-3"
      >
        Hi ! I&apos;m Paradon Thonthong
        <Image
          src={assets.hand_icon}
          alt=""
          aria-hidden="true"
          className="w-6"
        />
      </motion.h3>
      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-3xl sm:text-6xl lg:text-[66px]"
      >
        Full Stack Developer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="text-base max-w-2xl mx-auto"
      >
        I&apos;m a Full Stack Developer who loves creating seamless digital
        experiences, from intuitive user interfaces to robust backend systems.
      </motion.p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="text-base px-10 py-3 border rounded-full border-white bg-black text-white flex items-center gap-2 dark:bg-transparent"
        >
          contact me
          <Image
            src={assets.right_arrow_white}
            alt=""
            aria-hidden="true"
            className="w-4"
          />
        </motion.a>
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Resume.pdf"
          download
          className="text-base px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my resume
          <Image
            src={assets.download_icon}
            alt=""
            aria-hidden="true"
            className="w-4"
          />
        </motion.a>
      </div>
    </section>
  );
};

export default Header;
