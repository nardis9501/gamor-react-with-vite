import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Layout from "./components/Layout";
import MainBoard from "./components/MainBoard";

function App() {
  return (
    <>
      <Layout>
        <main className="conteiner flex flex-col justify-between  dark:bg-gray-800/80 bg-slate-200 shadow-lg dark:shadow-lg h-full w-full rounded-xl p-3">
          <header className="flex md:flex-row flex-wrap items-center md:justify-between h-1/5 w-full">
            <section className="flex items-center">
              <h2 className="text-2xl p-2">Home</h2>
              <nav className="grid grid-cols-3">
                <a>Streams</a>
                <a>Party</a>
                <a>Premium</a>
              </nav>
            </section>
            <section>
              <h1 className="flex items-center justify-center">Gamor</h1>
            </section>
            <div className="flex items-center justify-between">
              <p className="m-1">
                <Link className="text-" to={"/login"}>
                  Sign in
                </Link>
              </p>
              <p className="m-1">
                <Link
                  className="text-slate-200 bg-black/90 dark:bg-black/80 hover:bg-slate-700 dark:border dark:border-slate-500 rounded-full px-4 py-3"
                  to={"/login/create-acount"}
                >
                  Create acount
                </Link>
              </p>
            </div>
          </header>
          <MainBoard />
          <footer>hola de nuevo</footer>
        </main>
      </Layout>
    </>
  );
}

export default App;
