import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import Image from "next/image";
import * as React from "react";
import { BadgeSkills } from "../../Atoms/Badges/BadgeSkills";
import { Reveal } from "../../ui/FramerMotion/onReveal";

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
  style,
  skills,
}: propType): React.JSX.Element {
  return (
    <Card className="flex flex-row-reverse max-w-[536px] justify-end font-ghaly rounded-[6px] border-gray-300 dark:border-gray-500 dark:bg-[#0e1111] hover:scale-[1.02] hover:duration-300 animate-shadow hover:shadow-lg">
      <Reveal delay={0.05} duration={0.8}>
        <CardHeader className="py-5 pr-3">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="w-auto font-semibold bg-gradient-to-r from-[rgb(146,245,242)] dark:text-transparent dark:bg-clip-text dark:color-base-ghaly">
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
