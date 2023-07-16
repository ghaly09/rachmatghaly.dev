import { navConfig } from "@/src/config/navbar-config";
import { ModeToggle } from "../../Templates/Theme/ModeToggle";
import NavLink from "./NavLink";
import * as React from "react";

export default function Navbar() {
  const styleActive =
    "text-transparent bg-clip-text bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)]";

  const [active, setActive] = React.useState({
    style: styleActive,
    pageName: "Home",
  });

  return (
    <nav className="flex flex-row items-center justify-between dark:text-white font-semibold text-lg h-15 py-4 w-auto px-5 lg:px-0 max-w-[68rem] mx-auto">
      <div className="flex flex-row gap-4 lg:gap-6">
        {navConfig.map((link, index) => (
          <NavLink
            key={index}
            href={link.href}
            page={link.page}
            style={link.page != active.pageName ? "" : active.style}
            onclick={() => {
              setActive({
                ...active,
                pageName: link.page,
              });
            }}
          />
        ))}
      </div>
      <ModeToggle />
    </nav>
  );
}
