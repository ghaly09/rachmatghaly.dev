import { navConfig } from "@/src/config/navbar-config";
import { ModeToggle } from "../../Templates/Theme/ModeToggle";
import NavLink from "./NavLink";
import * as React from "react";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const styleActive = "text-transparent bg-clip-text color-secondary-ghaly";

  const [active, setActive] = React.useState({
    style: styleActive,
    pageName: router.pathname,
  });

  React.useEffect(() => {
    setActive({
      ...active,
      pageName: router.pathname,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname]);

  // console.log(router.pathname);

  return (
    <nav className="flex flex-row flex-wrap items-center justify-between dark:text-white font-semibold text-lg h-max py-2 w-auto px-5 lg:px-0 max-w-[68rem] mx-auto">
      <div className="flex flex-row gap-4 lg:gap-6">
        {navConfig.map((link, index) => (
          <NavLink
            key={index}
            href={link.href}
            page={link.page}
            style={link.href != active.pageName ? "" : active.style}
          />
        ))}
      </div>
      <ModeToggle />
    </nav>
  );
}
