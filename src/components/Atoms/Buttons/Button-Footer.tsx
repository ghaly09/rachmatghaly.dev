import Link from "next/link";
import * as React from "react";

interface ButtonProps {
  icon: string;
  href: string;
  title: string;
}

export const ButtonIconFooter = ({ icon, href, title }: ButtonProps) => {
  return (
    <button
      className="hover:color-ghaly text-current hover:text-transparent hover:bg-clip-text shadow-lg text-2xl lg:text-3xl h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none lg:mr-2"
      type="button"
    >
      <Link href={href} target="_blank" rel="noreferrer" title={title} passHref>
        <i className={icon} aria-hidden="true"></i>
      </Link>
    </button>
  );
};
