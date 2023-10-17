import React from "react";

export default function Logo({ url, handlerSignUp }) {
  const handlerClick = () => {
    {
      handlerSignUp;
      console.log(
        "manage registration according to the provider for example Firebase"
      );
    }
  };
  return (
    <>
      <img
        src={`${url}`}
        onClick={handlerClick}
        className="cursor-pointer h-10 w-10 rounded-full bg-slate-200 border border-white"
      />
    </>
  );
}
