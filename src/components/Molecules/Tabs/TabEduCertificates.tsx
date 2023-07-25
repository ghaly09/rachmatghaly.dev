import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { aboutTypes } from "@/src/config/about-config";
import * as React from "react";
import EduCertificateDesc from "../../Atoms/Descriptions/EduCertificate";
import { Reveal } from "../../ui/FramerMotion/onReveal";
import CardCertificate from "../Cards/Card-Certificate";
import CardEducation from "../Cards/Card-Education";

interface Types {
  certificates: {
    type?: string;
    description?: string;
    certificates?: object;
  };

  educations: any;
}

export function TabEduCertificates({ educations, certificates }: Types) {
  const [data, setData] = React.useState(educations);
  const [active, setActive] = React.useState("Educations");

  return (
    <section className="flex flex-col items-center justify-center font-ghaly ">
      <Reveal delay={0.2} duration={0.5}>
        <Tabs defaultValue={active} className="w-[300px] sm:w-[350px]">
          <TabsList className="grid w-full grid-cols-2 h-[50px] sm:h-[38px] bg-transparent text-gray-400 dark:text-gray-500">
            <TabsTrigger
              className={`h-[40px] sm:h-[47px] text-xl lg:text-2xl font-bold data-[state=active]:bg-transparent data-[state=active]:dark:bg-[#0e111100]`}
              value="Educations"
              onClick={() => {
                setData(educations);
                setActive("Educations");
              }}
            >
              Educations
            </TabsTrigger>
            <TabsTrigger
              className={`h-[40px] sm:h-[47px] text-xl lg:text-2xl font-bold data-[state=active]:bg-transparent data-[state=active]:dark:bg-[#0e111100]`}
              value="Certificates"
              onClick={() => {
                setData(certificates);
                setActive("Certificates");
              }}
            >
              Certificates
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </Reveal>
      <Reveal delay={0.2} duration={0.5}>
        <div className="overflow-x-hidden max-w-[1500px] flex justify-center">
          <div className="w-screen h-[18px] mx-auto bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[rgba(0,255,247,0.42)] dark:from-[rgb(0,218,210)] via-white to-white dark:via-[#0e111100] dark:to-[#0e111100] "></div>
        </div>
      </Reveal>

      {/* Contents */}
      <Reveal delay={0.3} duration={0.8}>
        <EduCertificateDesc desc={data?.description} />
      </Reveal>
      <div className="flex flex-row flex-wrap gap-4 justify-center lg:justify-normal">
        {data.type == "certificate"
          ? data?.certificates.map((value: aboutTypes, index: number) => (
              <CardCertificate
                key={index}
                title={value?.title}
                description={value?.description}
                imgLink={value?.imgLink}
                directLink={value?.directLink}
              />
            ))
          : data?.bootCamp.map((value: aboutTypes, index: number) => (
              <CardEducation
                key={index}
                title={value?.eduTitle}
                major={value?.major}
                imgLink={value?.imgLink}
                directLink={value?.directLink}
                style={value?.style}
                skills={value?.skills}
              />
            ))}
      </div>
    </section>
  );
}
