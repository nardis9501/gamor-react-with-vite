import React, { useState } from "react";
import SunSvg from "./dark-mode/SunSvg";
import MonSvg from "./dark-mode/MonSvg";
export default function DarkMode({ children }) {
  const [dark, setdark] = useState(false);
  const handlerCilck = () => {
    //console.log(document.documentElement.classList.toggle("dark"));
    document.documentElement.classList.toggle("dark");
    setdark(!dark);
  };
  const mode = dark ? (
    <SunSvg width={36} height={36} stroke="#facc15" />
  ) : (
    <MonSvg width={36} height={36} stroke="#ffffff" />
  );

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
