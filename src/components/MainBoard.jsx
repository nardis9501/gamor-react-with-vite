import React, { useState } from "react";
import SingButton from "./SingButton";
import Searching from "./Searching";
import Board from "./Board";

export default function MainBoard(props) {
  const [username, setUsername] = useState([]);
  const handlerClick = (username) => {
    setUsername(username);
  };
  return (
    <>
      <section className="grid md:grid-cols-3 overflow-auto bg-slate-100 dark:bg-secondary shadow rounded-xl  md:h-4/5">
        <div className="grid place-content-evenly  px-2">
          <p
            className="grid col-span-3 gap-1 place-content-center place-items-start
           m-2 text-3xl md:text-4xl lg:text-5xl font-semibold"
          >
            <span>start</span>
            <span className="dark:text-violet-500 text-orange-600">
              streaming
            </span>
            <span>games</span>
            <span>diffently</span>
          </p>

          <p className="m-0 col-span-3 lg:text-lg md:text-base text-xs">
            gamor now has{" "}
            <span className="dark:text-orange-500 text-violet-600">
              stream party
            </span>{" "}
            platform{" "}
          </p>

          <span className="grid m-2 col-span-3 place-content-center">
            <SingButton />
          </span>
        </div>
        <div className="grid relative place-conte p-4  bg-violet-600 dark:bg-orange-500">
          <div className="content-start w-full">
            <header className="">
              <h2 className="mt-10 text-slate-200 capitalize font-bold sm:text-xl md:text-xl lg:text-2xl">
                Fortnite new season{" "}
              </h2>
              <h3 className="mt-10 text-slate-700 capitalize font-bold sm:text-sm md:text-base lg:text-lg">
                join live stream
              </h3>
            </header>

            <span className="absolute top-0 right-1/2 translate-x-1/2 md:translate-y-1/3 grid grid-cols-2 place-content-center gap-10 w-full mt-28">
              <Board username={username} />
            </span>
          </div>

          <img
            className="dark:hidden object-scale-down"
            src="../../public/fortnite.jpg"
            alt="fortnite game"
          />

          <img
            className="hidden dark:inline-block object-contain"
            src="../../public/fortnite2.jpg"
            alt="fortnite game"
          />
        </div>

        <ol className="grid list-none p-3">
          <li></li>
          <li>
            <Searching OnClick={handlerClick} />
          </li>
        </ol>
      </section>
    </>
  );
}
