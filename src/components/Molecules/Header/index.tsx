import React from "react";
import Navbar from "../Navbar";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-max backdrop-blur-sm">
      <div className="sticky top-0 z-50 w-full h-2 color-ghaly" />
      <Navbar />
    </header>
  );
}
