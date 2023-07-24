import React from "react";
import Navbar from "../Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-15 bg-white dark:bg-[#0e1111]">
      <div className="sticky top-0 z-50 w-full h-2 color-ghaly"></div>
      <Navbar />
    </header>
  );
}
