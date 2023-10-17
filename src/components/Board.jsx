import React, { useEffect, useState } from "react";

export default function Board({ username }) {
  const [board, setBoard] = useState(Array(0).fill(null));
  const [counter, setCounter] = useState(-1);
  const [error, setError] = useState(false);
  useEffect(() => {
    console.log(username.length);
    if (counter !== -1) {
      const newBoard = [...board];
      console.log(counter);
      newBoard[counter] = username;
      setBoard(newBoard);
    }
    if (counter === 9) {
      setError(true);
      return;
    }
    setCounter(counter + 1);
  }, [username]);

  if (error) {
    // return alert("sorry, at the moment only eight users can be added");
    // return (
    //   <header className="grid place-content-center absolute top-0 left-0 h-screen w-screen select-none  bg-black/50">
    //     <section className="flex flex-col items-center bg-slate-900 border-solid border-2 border-white/80 w-72 h-auto rounded-xl p-2">
    //       <h2 className="text-3xl">
    //         sorry, at the moment only eight users can be added
    //       </h2>
    //       <footer>
    //         <button className="m-2"></button>
    //       </footer>
    //     </section>
    //   </header>
    // );
  }
  return (
    <>
      <span className="grid grid-cols-2  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2    gap-3 sm:gap-6 w-full mt-2 ">
        {board.map((username, index) => (
          <li
            key={index}
            className="list-none flex flex-col items-center justify-center  w-full h-full"
          >
            {username && (
              <img
                className="rounded-lg w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12"
                src={`https://unavatar.io/github/${username}`}
                alt={`${username} avatar`}
              />
            )}
          </li>
        ))}{" "}
      </span>
    </>
  );
}
