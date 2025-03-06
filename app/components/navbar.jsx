import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";

const Navbar = () => {
  return (
    <>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between z-50">
        <a href="" className="flex items-center">
          <span className="text-3xl font-bold text-white w-28 cursor-pointer mr-14">PARADON</span>
        </a>
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 border rounded-full px-12 py-3">
          <li>
            <a href="#top">Home</a>
          </li>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#work">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact me</a>
          </li>
        </ul>

        <div>
          <a href="#contact"
          className="hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full ml-4">
            Contact{" "}
            <Image src={assets.arrow_icon} className='w-3 alt="arrow_icon"' />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
