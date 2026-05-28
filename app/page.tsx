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
  // Initialize synchronously so the first paint matches the persisted theme
  // and we avoid a flash-of-empty-page on load.
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(() => {
    if (typeof window === "undefined") return false;
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") return true;
      if (stored === "light") return false;
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (isDarkMode === null) return;
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <>
      <Navbar
        isDarkMode={isDarkMode ?? false}
        setIsDarkMode={setIsDarkMode}
      />
      <main>
        <Header />
        <About isDarkMode={isDarkMode ?? false} />
        <Services />
        <Work isDarkMode={isDarkMode ?? false} />
        <Contact />
      </main>
      <Footer isDarkMode={isDarkMode ?? false} />
    </>
  );
}
