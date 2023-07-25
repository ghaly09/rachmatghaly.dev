import React from "react";
import Image from "next/image";
import ovalVector from "@/public/metamorp01.svg";

export default function VectorBackground() {
  return (
    <Image
      className="absolute right-0 top-80 w-[300px] sm:w-[1000px] sm:h-[1000px] h-[300px] sm:top-20 -z-10 opacity-80"
      src={ovalVector}
      width={500}
      height={500}
      alt={"oval vector"}
    />
  );
}
