import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex select-none items-center  h-screen w-[1200px] p-2">
        {children}
      </div>
    </>
  );
}
