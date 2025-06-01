"use client";
import React from "react";
import { HoverBorderGradient } from "@/src/components/ui/hover-border-gradient";

export function HoverBorderGradientWrapper({
  children,
}: React.PropsWithChildren<{}>) {
  return (
    <HoverBorderGradient
      containerClassName="rounded-full"
      as="button"
      className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
    >
      <span>{children}</span>
    </HoverBorderGradient>
  );
}
