import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { navConfig } from "@/src/config/navbar-config";

export default function Navbar() {
  return (
    <nav>
      <div className="flex flex-row gap-4 items-center bg-[#0e1111] text-white font-semibold text-lg h-12 py-4 w-auto lg:max-w-5xl px-5 lg:px-0 lg:mx-auto">
        {navConfig.map((link, index) => (
          <NavLink href={link.href} page={link.page} key={index} />
        ))}
      </div>
    </nav>
  );
}
