import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex items-center  h-screen w-[1200px] p-2">
        {children}
      </div>
    </>
  );
}
