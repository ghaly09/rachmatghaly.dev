import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import React from "react";
import EducationDesc from "../../Atoms/Descriptions/EducationDesc";
import { Reveal } from "../../ui/FramerMotion/onReveal";

interface Types {
  educations: {
    description?: string;
    bootCamp?: object;
    university?: object;
  };
  certificates: {
    description?: string;
    certificates?: object;
  };
}

export function TabEduCertificates({ educations, certificates }: Types) {
  const [data, setData] = React.useState(educations);
  // const [colorTrend, setColorTrend] = React.useState("");
  // const [colorFire, setColorFire] = React.useState("");

  return (
    <section className="flex flex-col items-center">
      <Reveal delay={0.2} duration={0.5}>
        <Tabs defaultValue="Educations" className="w-[300px] sm:w-[400px] mb-2">
          <TabsList className="grid w-full grid-cols-2 h-[50px] sm:h-[55px] bg-[rgb(0,218,210)] dark:bg-gray-800">
            <TabsTrigger
              className="h-[40px] sm:h-[47px] text-xl lg:text-2xl text-black dark:text-white font-bold"
              value="Educations"
              onClick={() => {
                setData(educations);
                // setColorTrend("text-[#D1512D]");
                // setColorFire("");
              }}
            >
              {/* <i
              className={`fa-solid fa-pizza-slice ${colorTrend} pr-2`}
              aria-hidden="true"
            ></i>{" "} */}
              Educations
            </TabsTrigger>
            <TabsTrigger
              className="h-[40px] sm:h-[47px] text-xl lg:text-2xl text-black dark:text-white font-bold"
              value="Certificates"
              onClick={() => {
                setData(certificates);
                // setColorFire("text-[#F5D97E]");
                // setColorTrend("");
              }}
            >
              {/* <i
              className={`fa-solid fa-bolt-lightning ${colorFire} pr-2`}
              aria-hidden="true"
            ></i>{" "} */}
              Certificates
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </Reveal>

      {/* Contents */}
      <Reveal delay={0.3} duration={0.8}>
        <EducationDesc desc={data?.description} />
      </Reveal>
    </section>
  );
}
