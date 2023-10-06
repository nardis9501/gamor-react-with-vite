import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
const handlerCilck = () => {
  document.documentElement.classList.toggle("dark");
};
function App() {
  return (
    <>
      <div className="conteiner flex flex-col justify-between  dark:bg-gray-800/80 bg-slate-200 shadow-lg dark:shadow-lg h-full w-full rounded-xl p-3">
        <div className="flex flex-row items-center justify-between h-1/5 w-full">
          <section className="flex items-center">
            <h2 className="text-2xl p-2">Home</h2>
            <div className="flex">
              <ol>Streams</ol>
              <ol>Party</ol>
              <ol>Premium</ol>
            </div>
          </section>
          <section>
            <h1 className="flex items-center justify-center">Gamor</h1>
          </section>
          <section className="flex items-center justify-between">
            <button>Sign in</button>
            <button>Create account</button>
            <button onClick={handlerCilck}>change theme</button>
          </section>
        </div>
        <div>hola</div>
        <div>hola de nuevo</div>
      </div>
    </>
  );
}

export default App;
