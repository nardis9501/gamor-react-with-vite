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
  const [counter, setCounter] = useState(() => {
    const persistenceCounter = localStorage.getItem("counter");
    if (persistenceCounter) {
      return persistenceCounter;
    }
    return 0;
  });
  const { username } = useAppSelector((state) => state.username);

  useEffect(() => {
    if (username) {
      const newBoard = [...board];
      newBoard[counter] = username;
      setBoard(newBoard);
      setCounter(counter + 1);
    }
  }, [username]);

  useEffect(() => {
    // localStorage.setItem(
    //   "persistenceBoardInLocalStorage",
    //   JSON.stringify(board)
    // );
    saveBoardToStorage({ Board: board, Counter: counter });
  }, [board]);

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
