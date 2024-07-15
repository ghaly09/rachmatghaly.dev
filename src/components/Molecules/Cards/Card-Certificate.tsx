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
import { Skeleton } from "../../ui/skeleton";

interface propType {
  title: string;
  description: string;
  imgLink: string;
  directLink: string;
}

export default function CardCertificate({
  title,
  description,
  imgLink,
  directLink,
}: propType): React.JSX.Element {
  const [effect, setEffect] = React.useState({
    hover: "opacity-0",
    offset: "opacity-100",
  });
  const [imageLoaded, setImageLoaded] = React.useState(false);

  return (
    <Card className="flex flex-col w-[260px] justify-between font-ghaly rounded-[6px] border-gray-300 dark:border-gray-500 dark:bg-[#0e1111] hover:scale-[1.02] hover:duration-300 animate-shadow hover:shadow-lg">
      <Reveal delay={0.05} duration={0.8}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="w-auto font-semibold bg-gradient-to-r from-[rgb(146,245,242)] dark:text-transparent dark:bg-clip-text dark:color-base-ghaly">
            {description}
          </CardDescription>
        </CardHeader>
      </Reveal>
      <CardContent>
        <Reveal delay={0.1} duration={0.8}>
          <Link href={directLink} target="_blank" rel="noreferrer" passHref>
            <div
              className="relative h-[120px] w-[220px] rounded-sm hover:bg-black hover:duration-300"
              onMouseOver={() => {
                setEffect({ hover: "opacity-100", offset: "opacity-75" });
              }}
              onMouseLeave={() => {
                setEffect({ hover: "opacity-0", offset: "opacity-100" });
              }}
            >
              {!imageLoaded && (
                <Skeleton className="absolute top-0 z-30 w-full h-[120px] rounded-sm cursor-pointer" />
              )}
              <Image
                className={`object-fill h-[120px] rounded-sm cursor-pointer ${effect.offset}`}
                src={imgLink}
                width={220}
                height={200}
                alt={title}
                onLoad={() => setImageLoaded(true)}
              />{" "}
              <h5
                className={`absolute top-12 left-[80px] cursor-pointer font-bold text-white ${effect.hover} opacity-0 duration-300`}
              >
                View{" "}
                <i
                  className="fa-solid fa-arrow-up-right-from-square"
                  aria-hidden="true"
                ></i>
              </h5>
            </div>
          </Link>
        </Reveal>
      </CardContent>
    </Card>
  );
}
