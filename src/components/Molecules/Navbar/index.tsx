import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { navConfig } from "@/src/config/navbar-config";
import { ModeToggle } from "../../Templates/Theme/ModeToggle";

export default function Navbar() {
  return (
    <nav>
      <div className="flex flex-row gap-4 items-center dark:text-white font-semibold text-lg h-12 py-4 w-auto lg:max-w-5xl px-5 lg:px-0 lg:mx-auto">
        {navConfig.map((link, index) => (
          <NavLink href={link.href} page={link.page} key={index} />
        ))}
        <ModeToggle />
      </div>
    </nav>
  );
}
