import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "@/assets/assets";
interface NavbarProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({isDarkMode, setIsDarkMode}) => {
  const sideMenuRef = useRef<HTMLUListElement>(null)
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 50){
        setIsScroll(true)
      }else{
        setIsScroll(false)
      }
  })
  },[]
)


  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="" className="w-full" />
      </div>

      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex justify-between z-50 ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-dark-theme dark:shadow-white/20" : ""}`}>
        <a href="#top" className="flex items-center">
          <span className="text-3xl font-bold w-28 cursor-pointer mr-14">
            PARADON
          </span>
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"} `}>
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

        <div className="flex items-center gap-4 lg:gap-6">
          <button onClick={()=> setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt="" className="w-6" />
          </button>

          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border rounded-full ml-4 dark:border-white/50"
          >
            Contact
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} className="w-3" alt="" />
          </a>
          <button onClick={openMenu} className="block md:hidden ml-3">
            <Image src={isDarkMode ? assets.menu_white: assets.menu_black} alt="" className="w-6" />
          </button>
        </div>

        {/* mobile menu */}

        <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-10 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-dark-hover dark:text-white">
          <div onClick={closeMenu} className="absolute right-6 top-6">
            <Image src={isDarkMode ? assets.close_white : assets.close_black} alt="" className="w-5 cursor-pointer" />
          </div>
          <li>
            <a href="#top" onClick={closeMenu}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>About me</a>
          </li>
          <li>
            <a href="#services" onClick={closeMenu}>Services</a>
          </li>
          <li>
            <a href="#work" onClick={closeMenu}>My Work</a>
          </li>
          <li>
            <a href="#contact" onClick={closeMenu}>Contact me</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
