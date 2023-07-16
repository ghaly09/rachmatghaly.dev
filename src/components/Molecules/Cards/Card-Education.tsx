import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import Image from "next/image";
import * as React from "react";
import { Reveal } from "../../ui/FramerMotion/onReveal";
import Link from "next/link";
import { BadgeSkills } from "../../Atoms/Badges/BadgeSkills";

interface propType {
  title: string;
  major: string;
  imgLink: string;
  directLink: string;
  style: string;
  skills: string[];
}

export default function CardEducation({
  title,
  major,
  imgLink,
  directLink,
  style,
  skills,
}: propType): React.JSX.Element {
  const [effect, setEffect] = React.useState({
    hover: "opacity-0",
    offset: "opacity-100",
  });

  return (
    <Card className="flex flex-row-reverse max-w-[536px] justify-end font-ghaly rounded-[6px] border-gray-300 dark:border-gray-500 dark:bg-[#0e1111] hover:scale-[1.02] hover:duration-300 animate-shadow hover:shadow-lg">
      <Reveal delay={0.05} duration={0.8}>
        <CardHeader className="py-5 pr-3">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="w-auto font-semibold bg-gradient-to-r from-[rgb(146,245,242)] dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-[rgb(0,218,210)] dark:to-[rgb(61,224,102)]">
            {major}
          </CardDescription>
          <div className="flex flex-row flex-wrap gap-1">
            {skills.map((value: string, index: number) => (
              <BadgeSkills key={index} skill={value} />
            ))}
          </div>
        </CardHeader>
      </Reveal>
      <CardContent className="p-0">
        <Reveal delay={0.1} duration={0.8}>
          <Image
            className={style}
            src={imgLink}
            width={200}
            height={200}
            alt={title}
          />
        </Reveal>
      </CardContent>
    </Card>
  );
}
