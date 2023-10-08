import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <div className="conteiner flex flex-col justify-between  dark:bg-gray-800/80 bg-slate-200 shadow-lg dark:shadow-lg h-full w-full rounded-xl p-3">
          <div className="flex flex-row items-center justify-between h-1/5 w-full">
            <section className="flex items-center">
              <h2 className="text-2xl p-2">Home</h2>
              <div className="grid grid-cols-3">
                <a>Streams</a>
                <a>Party</a>
                <a>Premium</a>
              </div>
            </section>
            <section>
              <h1 className="flex items-center justify-center">Gamor</h1>
            </section>
            <section className="flex items-center justify-between">
              <div className="m-1">
                <Link to={"/login"}>Sign in</Link>
              </div>
              <button className="m-1">
                <Link to={"/login/create-acount"}>Create acount</Link>
              </button>
            </section>
          </div>
          <div>hola</div>
          <div>hola de nuevo</div>
        </div>
      </Layout>
    </>
  );
}

export default App;
