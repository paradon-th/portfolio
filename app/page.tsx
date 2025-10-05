"use client";
import About from "./components/about";
import Contact from "./components/contact";
import Header from "./components/header";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Work from "./components/work";
import Footer from "./components/footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null);

  useEffect(() => {
    const dark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDarkMode(dark);
  }, []);

  useEffect(() => {
    if (isDarkMode === null) return; // รอจน client render
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "";
    }
  }, [isDarkMode]);

  if (isDarkMode === null) return null;

  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <Header isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Services isDarkMode={isDarkMode} />
      <Work isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
