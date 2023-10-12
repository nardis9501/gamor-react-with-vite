import React, { useState } from "react";
import Player from "./Player";
import players from "../players/players.json";
export default function Searching(props) {
  const [gamer, setGamer] = useState(players);
  const [nameGame, setNameGame] = useState("");
  const [error, setError] = useState(false);
  const [notFound, setNotFount] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameGame) {
      console.log(nameGame);
      const playerFilter = players.filter(
        (player) => player.favoriteGame.toLowerCase() === nameGame
      );

      if (playerFilter.length === 0) {
        return setNotFount(true);
      }

      return setGamer(playerFilter);
    }
    setError(true);
  };

  const handlerChange = (e) => {
    const value = e.target.value;
    if (value === " ") {
      return;
    }
    setError(false);
    setNotFount(false);
    setNameGame(value.toLowerCase());
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col  place-content-between dark:bg-primary bg-white shadow-lg rounded-xl py-2 w-full h-80"
      >
        <div className="border-b dark:border-secondary pb-2 px-1">
          {" "}
          <input
            className="bg-white/40 dark:bg-secondary/75 p-2 rounded w-full"
            id="email"
            name="email"
            type="text"
            placeholder="Fortnite, Lost Soul, Diablo, Pikmin ... "
            value={nameGame}
            onChange={handlerChange}
          />
        </div>
        {error && (
          <span className="text-red-700">Enter the name of a game</span>
        )}
        <ol className="content-start h-2/3 mx-2 overflow-auto">
          {notFound && (
            <span>
              This game does not exist or there are no players available. Please
              enter another game
            </span>
          )}
          {gamer.map((player) => (
            <Player
              key={player.id}
              username={player.username}
              avatarUrl={player.url}
            />
          ))}
        </ol>
        <button
          type="submit"
          className="relative bg-black text-slate-200 dark:bg-white dark:text-slate-700 shadow-lg top-0  mx-2"
        >
          {" "}
          search now
        </button>
      </form>
    </>
  );
}
