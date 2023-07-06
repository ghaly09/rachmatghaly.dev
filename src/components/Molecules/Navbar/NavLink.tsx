import { navProps } from "@/src/config/navbar-config";
import Link from "next/link";
import React from "react";

export default function NavLink({ href, page }: navProps) {
  return (
    <Link
      className="hover:text-transparent focus:text-transparent focus:bg-clip-text hover:bg-clip-text hover:bg-[rgb(61,224,102)] focus:bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)]"
      href={href}
    >
      {page}
    </Link>
  );
}
