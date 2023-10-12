import React, { useEffect, useState } from "react";
import Dropdown from "./dark-mode/Dropdown";
export default function Navbar(props) {
  //   const [width, setWidth] = useState(window.innerWidth);
  //   useEffect(() => {
  //     window.addEventListener("resize", () => setWidth(window.innerWidth));
  //   }, []);

  //   if (window.innerWidth <= 700) {
  //     return <Dropdown />;
  //   }
  return (
    <>
      <div className="md:hidden">
        <Dropdown />
      </div>
      <nav className="md:grid grid-cols-3 hidden ">
        <a>Streams</a>
        <a>Party</a>
        <a>Premium</a>
      </nav>
    </>
  );
}
