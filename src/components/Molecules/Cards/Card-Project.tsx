import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import Image from "next/image";
import * as React from "react";
import { Reveal } from "../../ui/FramerMotion/onReveal";
import Link from "next/link";
import { PropProjectTypes } from "@/src/lib/Types";
import SeeMore from "../../Atoms/Buttons/Button-SeeMore";

export default function CardProject({
  title,
  description,
  imgSrc,
  technologies,
  date,
  directLink,
}: PropProjectTypes): React.JSX.Element {
  const [lineHover, setLineHover] = React.useState("");

  return (
    <Card
      className="flex flex-col-reverse w-fit sm:max-w-[250px] lg:max-w-[350px] justify-between font-ghaly rounded-[6px] active:scale-[0.90] border-gray-300 dark:border-gray-500 dark:bg-[#0e1111] hover:scale-[1.02] hover:duration-300 animate-shadow hover:shadow-lg"
      onMouseOver={() => setLineHover("line-effect")}
      onMouseLeave={() => setLineHover("")}
    >
      <CardHeader className="p-4">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="w-auto dark:text-[#d3d4d6]">
          {description}
        </CardDescription>
        <SeeMore directLink={directLink} lineEffect={lineHover} />
      </CardHeader>

      <CardContent className="p-0">
        <Image
          className={`object-cover w-screen max-h-[400px] sm:w-[350px] sm:max-h-[200px] rounded-t-sm cursor-pointer`}
          src={imgSrc}
          width={350}
          height={300}
          alt={title}
        />
      </CardContent>
    </Card>
  );
}
