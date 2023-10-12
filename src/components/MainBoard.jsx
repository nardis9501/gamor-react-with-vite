import React from "react";
import SingButton from "./SingButton";
import Searching from "./Searching";

export default function MainBoard(props) {
  return (
    <>
      <section className="grid md:grid-cols-3 bg-slate-100 dark:bg-secondary shadow rounded-xl  h-4/5">
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
        <div className="bg-violet-600 dark:bg-orange-500">
          <h2 className="mt-10 text-slate-200 capitalize font-bold sm:text-xl md:text-xl lg:text-2xl">
            Fortnite new season{" "}
          </h2>
          {/* <img
            className="object-cover filter h-full bg-gradient-to-r from-cyan-500 to-blue-500"
            src="../../public/fortnite.jpg"
            alt="fortnite game"
          /> */}
        </div>

        <ol type="1" className="grid list-inside p-3">
          <li>Eat</li>
          <li>
            <Searching />
          </li>
          <li>Sleep</li>
        </ol>
      </section>
    </>
  );
}
