import { navProps } from "@/src/config/navbar-config";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import * as React from "react";

export default function NavLink({ href, page, style }: navProps) {
  return (
    <Link
      className={cn(
        "hover:text-transparent hover:bg-clip-text hover:bg-teal-300",
        style
      )}
      href={href}
    >
      {page}
    </Link>
  );
}
