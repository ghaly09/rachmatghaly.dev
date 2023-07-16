import { container } from "@/src/lib/Types";
import React from "react";

export default function AboutContainer(props: container) {
  const { children } = props;

  return (
    <div className="flex flex-col-reverse md:flex-row gap-5 justify-around items-center md:items-start px-5 lg:px-0 pb-8">
      {children}
    </div>
  );
}
