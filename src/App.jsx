import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Link } from "react-router-dom";
import Layout from "./components/Layout";
import MainBoard from "./components/MainBoard";
import Navbar from "./components/Navbar";
import AuthenticationButton from "./components/Authentication/AuthenticationButton";

function App() {
  return (
    <>
      <Layout>
        <main className="conteiner flex flex-col justify-between  dark:bg-primary bg-slate-200 shadow-lg dark:shadow-lg h-full w-full rounded-xl p-3">
          <header className="flex flex-row items-center justify-between h-1/6  lg:h-1/5 w-full">
            <section className="flex flex-col  md:flex-row md:items-center">
              <h2 className="text-2xl md:p-2">Home</h2>
              <Navbar />
            </section>
            <section>
              <h1 className="flex text-2xl items-center justify-center">
                Gamor
              </h1>
            </section>
            <div className="">
              <AuthenticationButton displayHidden />
            </div>
          </header>
          <MainBoard />
          <footer></footer>
        </main>
      </Layout>
    </>
  );
}

export default App;
