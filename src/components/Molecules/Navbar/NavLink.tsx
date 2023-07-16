import { navProps } from "@/src/config/navbar-config";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import * as React from "react";

export default function NavLink({ href, page, style, onclick }: navProps) {
  return (
    <Link
      className={cn(
        "hover:text-transparent hover:bg-clip-text hover:bg-[rgb(61,224,102)]",
        style
      )}
      onClick={onclick}
      href={href}
    >
      {page}
    </Link>
  );
}
