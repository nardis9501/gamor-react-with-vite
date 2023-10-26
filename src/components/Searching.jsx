import { useEffect, useState } from "react";
import Player from "./Player";
import players from "../players/players.json";
import { getUsers } from "../redux/slices/getUsersSlice";
import { useAppDispatch, useAppSelector } from "../hooks/store";
export default function Searching() {
  const [gamer, setGamer] = useState();
  const [nameGame, setNameGame] = useState("");
  const [error, setError] = useState(false);
  const [notFound, setNotFount] = useState(false);

  const { users } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (users === null) {
      dispatch(getUsers(players));
    }
    setGamer(users);
  }, [users]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (nameGame) {
      console.log(nameGame);
      const filterUsersByFavoriteGame = users.filter(
        (player) => player.favoriteGame.toLowerCase() === nameGame
      );

      if (filterUsersByFavoriteGame.length === 0) {
        setNotFount(true);
      }

      return setGamer(filterUsersByFavoriteGame);
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
          {gamer &&
            gamer.map((player) => (
              <Player
                key={player.id}
                userId={+player.id}
                username={player.username}
              />
            ))}
        </ol>
        <button
          type="submit"
          className="bg-black text-slate-200 dark:bg-white dark:text-slate-700 shadow-lg top-0  mx-2"
        >
          {" "}
          search now
        </button>
      </form>
    </>
  );
}
