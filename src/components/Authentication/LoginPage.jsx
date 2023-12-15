import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
const handlerClick = (event) => {
  //event.preventDefault();
  console.log(event);
};
export default function LoginPage(props) {
  return (
    <>
      <main className="w-screen h-screen bg-gradient-to-br from-purple-500 to-blue-500">
        <div className="absolute rotate-45 top-0 left-1/2  w-28 h-28 md:w-44 md:h-44 lg:w-72  lg:h-72 bg-white/40"></div>
        <div className="absolute rotate-45 top-1/2 left-0   w-28 h-28 md:w-44 md:h-44 lg:w-72  lg:h-72 bg-white/20"></div>
        <div className="absolute rotate-45 bottom-1/4 right-20 w-28 h-28 md:w-44 md:h-44 lg:w-72  lg:h-72 bg-black/20"></div>

        <section className="h-full w-full select-none dark:bg-slate-500/50 backdrop-blur-sm">
          <div className="grid absolute z-10 bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 dark:bg-gray-800/80 backdrop-blur-sm bg-white/80  dark:text-slate-200  text-slate-700 h-full w-full sm:w-5/6 md:h-5/6 md:w-1/2  lg:h-5/6 lg:w-[500px] sm:rounded-xl lg:rounded-2xl shadow-2xl p-10">
            <h1 className="font-semibold">Login</h1>

            <form className="h-full">
              <label className="block">
                <span className="block text-sm font-medium ">Email</span>

                <input
                  type="email"
                  required
                  placeholder="example@email.com"
                  className="text-slate-700 mt-1 block peer  w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
      "
                />
                <p className="mt-2 invisible peer-invalid:visible  text-pink-600 text-sm">
                  Please provide a valid email address.
                </p>
              </label>

              <label className="block py-5">
                <span className="block text-sm font-medium">Password</span>

                <input
                  type="password"
                  required
                  placeholder="************"
                  className="text-slate-700 mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
                "
                />
              </label>

              <button
                type="submit"
                onClick={handlerClick}
                className="w-full rounded-full dark:text-slate-200 text-white font-semibold text-base uppercase bg-gradient-to-br from-purple-500 to-blue-500 shadow-purple-400 hover:opacity-70"
              >
                Login
              </button>
            </form>

            <section>
              <h2 className="mb-2">Or Sign up using</h2>
              <div className="flex flex-row items-center justify-center gap-2">
                <Logo url={"./facebook.png"} />
                <Logo url={"./google.png"} />
                <Logo url={"./twitter.png"} />
              </div>
            </section>

            <section>
              <h2 className="mb-2">Or Sign up using</h2>
              <Link to={"create-account"}>Create Account</Link>
            </section>
          </div>
        </section>
      </main>
      {/* */}
    </>
  );
}
