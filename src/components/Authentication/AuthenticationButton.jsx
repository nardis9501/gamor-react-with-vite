import React from "react";
import { Link } from "react-router-dom";

export default function AuthenticationButton({ displayHidden }) {
  if (displayHidden) {
    return (
      <>
        <div className="relative inline-block text-xs   sm:w-56 sm:text-sm shadow bg-slate-400 px-4 sm:p-1 rounded-full">
          <Link
            to={"/login"}
            className="flex items-start rounded-full sm:pl-3 py-4  text-slate-200 dark:hover:bg-orange-600 hover:bg-violet-500"
          >
            Sign in
          </Link>
          <Link
            to={"/login/create-account"}
            className="hidden sm:inline-block absolute bg-black text-slate-200 dark:hover:bg-orange-600 hover:bg-violet-500 rounded-full py-4 px-4  top-1 right-1"
          >
            Create account
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <div className="relative inline-block text-xs w-48  sm:w-56 sm:text-sm shadow bg-slate-400  p-1 rounded-full">
        <Link
          to={"/login"}
          className="flex items-start rounded-full pl-3 py-4  text-slate-200 dark:hover:bg-orange-600 hover:bg-violet-500"
        >
          Sign in
        </Link>
        <Link
          to={"/login/create-account"}
          className="absolute  bg-black text-slate-200 dark:hover:bg-orange-600 hover:bg-violet-500 rounded-full py-4 px-4  top-1 right-1"
        >
          Create account
        </Link>
      </div>
    </>
  );
}
