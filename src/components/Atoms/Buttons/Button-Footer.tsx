import * as React from "react";

interface ButtonProps {
  className: string;
  href: string;
  target: string;
  rel: string;
  alt: string;
  title: string;
}

export const ButtonIconFooter = ({
  className,
  href,
  alt,
  title,
}: ButtonProps) => {
  return (
    <button
      className="hover:bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)] text-slate-200 hover:text-transparent hover:bg-clip-text shadow-lg text-2xl lg:text-3xl h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none lg:mr-2"
      type="button"
    >
      <a href={href} target="_blank" rel="noreferrer" alt={alt} title={title}>
        <i className={className} aria-hidden="true"></i>
      </a>
    </button>
  );
};
