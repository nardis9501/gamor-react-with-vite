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
    if (counter === 8) {
      setError(true);
      return;
    }
    setCounter(counter + 1);
  }, [username]);

  if (error) {
    return alert("sorry, at the moment only eight users can be added");
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
      {board.map((username, index) => (
        <li
          key={index}
          className="grid list-none place-content-center  bg-black w-14 h-14 p-1 rounded-lg"
        >
          {username && <span>{username}</span>}
        </li>
      ))}
    </>
  );
}
