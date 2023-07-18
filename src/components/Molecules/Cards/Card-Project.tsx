import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { PropProjectTypes } from "@/src/lib/Types";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import SeeMore from "../../Atoms/Buttons/Button-SeeMore";
import { IconTech } from "../../Atoms/Icons/IconTech";

export default function CardProject({
  title,
  description,
  imgSrc,
  technologies,
  date,
  directLink,
}: PropProjectTypes): React.JSX.Element {
  const [lineHover, setLineHover] = React.useState("");

  const handleLinkClick = (url: string) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  };

  const handleDirectLink = () => {
    handleLinkClick(directLink);
  };

  return (
    <Card
      className="flex flex-col-reverse w-fit sm:max-w-[250px] lg:max-w-[350px] justify-between font-ghaly rounded-[6px] cursor-pointer active:scale-[0.90] border-gray-300 dark:border-gray-500 dark:bg-[#0e1111] hover:scale-[1.02] hover:duration-300 animate-shadow hover:shadow-lg"
      onMouseOver={() => setLineHover("line-effect")}
      onMouseLeave={() => setLineHover("")}
      onClick={handleDirectLink}
    >
      {" "}
      <CardHeader className="p-4">
        {/* Icons Tech */}
        <div className="flex flex-row">
          {technologies.map((tech: any, index: number) => (
            <IconTech key={index} icon={tech.icon} iconName={tech.iconName} />
          ))}
        </div>

        <CardTitle>{title}</CardTitle>

        <CardDescription className="w-auto dark:text-[#d3d4d6] line-clamp-3">
          {description}
        </CardDescription>
        <SeeMore directLink={directLink} lineEffect={lineHover} />
      </CardHeader>
      <CardContent className="p-0">
        <div className="w-fit">
          <Image
            className={`object-cover w-screen max-h-[400px] sm:w-[350px] sm:max-h-[180px] rounded-t-sm cursor-pointer`}
            src={imgSrc}
            width={350}
            height={300}
            alt={title}
          />
        </div>
      </CardContent>
    </Card>
  );
}
