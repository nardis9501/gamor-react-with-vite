import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <main className="h-[900px] w-[1200px] p-2">{children}</main>
    </>
  );
}
