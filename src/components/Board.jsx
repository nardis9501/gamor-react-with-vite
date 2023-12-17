import { useEffect, useState } from "react";
import { useAppSelector } from "../hooks/store";
import { saveBoardToStorage } from "./logic/persistenceStorage";

export default function Board() {
  const [board, setBoard] = useState(() => {
    const persistenceBoard = localStorage.getItem(
      "persistenceBoardInLocalStorage"
    );
    if (persistenceBoard) {
      return JSON.parse(persistenceBoard);
    }
    return Array(0).fill(null);
  });
  // const [counter, setCounter] = useState(() => {
  //   const persistenceCounter = localStorage.getItem("counter");
  //   if (persistenceCounter) {
  //     return persistenceCounter;
  //   }
  //   return 0;
  // });
  const { username } = useAppSelector((state) => state.userData);
  useEffect(() => {
    if (username) {
      const newBoard = [...board];
      newBoard.push(username);
      setBoard(newBoard);
    }
  }, [username]);

  useEffect(() => {
    saveBoardToStorage({ Board: board });
  }, [board]);

  const handlerClick = (userId) => {
    console.log("user deleted");
  };

  return (
    <>
      <span className="grid grid-cols-2  absolute overflow-y-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2    gap-3 sm:gap-6 w-full max-h-[99%] py-2 ">
        {board.map((username, index) => (
          <li
            key={index}
            className="list-none flex flex-col items-center justify-center  w-full h-full"
          >
            {username && (
              <img
                className="rounded-lg  hover:z-0 w-8 h-8 sm:w-11 sm:h-11 md:w-12 md:h-12"
                src={`https://unavatar.io/github/${username}`}
                alt={`${username} avatar`}
              />
            )}
            <span
              onClick={handlerClick}
              className="absolute opacity-0 hover:opacity-100   bg-slate-400/50 p-1 rounded"
            >
              {" "}
              X
            </span>
          </li>
        ))}{" "}
      </span>
    </>
  );
}
