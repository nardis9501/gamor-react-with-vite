import React, { useEffect, useState } from "react";
import SunSvg from "./SunSvg";
import MonSvg from "./MonSvg";
export default function DarkMode({ children }) {
  const [mode, setMode] = useState(false);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setMode(<SunSvg width={36} height={36} stroke="#facc15" />);
    } else {
      document.documentElement.classList.remove("dark");
      setMode(<MonSvg width={36} height={36} stroke="#ffffff" />);
    }
  }, []);
  const handlerCilck = () => {
    if (document.documentElement.classList.toggle("dark")) {
      // Whenever the user explicitly chooses dark mode
      localStorage.theme = "dark";
      setMode(<SunSvg width={36} height={36} stroke="#facc15" />);
    } else {
      // Whenever the user explicitly chooses light mode
      localStorage.theme = "light";
      setMode(<MonSvg width={36} height={36} stroke="#ffffff" />);
    }
  };

  return (
    <>
      <div
        className="flex w-6 h-6 md:w-8 md:h-8 items-center border border-black/40 dark:border-slate-400 bg-black/40 dark:bg-white/30 rounded-lg absolute z-20 top-0 right-5 mt-3 "
        onClick={handlerCilck}
      >
        {mode}
      </div>
      {children}
    </>
  );
}
