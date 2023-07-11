import React from "react";
import Navbar from "../Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-15 dark:bg-[#0e1111]">
      <div className="sticky top-0 z-50 w-full h-2 bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)]"></div>
      <Navbar />
    </header>
  );
}
