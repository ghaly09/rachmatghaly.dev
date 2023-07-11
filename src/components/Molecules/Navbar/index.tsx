import { navConfig } from "@/src/config/navbar-config";
import { ModeToggle } from "../../Templates/Theme/ModeToggle";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="flex flex-row items-center justify-between dark:text-white font-semibold text-lg h-15 py-4 w-auto px-5 lg:px-0 lg:mx-auto">
      <div className="flex flex-row gap-4 lg:gap-6">
        {navConfig.map((link, index) => (
          <NavLink href={link.href} page={link.page} key={index} />
        ))}
      </div>
      <ModeToggle />
    </nav>
  );
}
