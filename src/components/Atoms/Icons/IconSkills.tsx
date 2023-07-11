import { aboutTypes } from "@/src/config/about-config";
import Image from "next/image";
import React from "react";

export default function IconSkill({
  style,
  src,
  width,
  height,
  alt,
  title,
}: aboutTypes) {
  return (
    <div className={style}>
      {" "}
      <Image src={src} width={width} height={height} alt={alt} title={title} />
    </div>
  );
}
