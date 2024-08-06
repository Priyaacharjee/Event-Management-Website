import React from "react";
import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <>
      <nav className="bg-purple-900 h-10 flex">
        <ThemeButton />
      </nav>
    </>
  );
}
