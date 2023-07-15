import { Tabs, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import { aboutTypes } from "@/src/config/about-config";
import * as React from "react";
import EduCertificateDesc from "../../Atoms/Descriptions/EduCertificate";
import { Reveal } from "../../ui/FramerMotion/onReveal";
import CardCertificate from "../Cards/Card-Certificate";

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
    <section className="flex flex-col items-center justify-center font-ghaly">
      <Reveal delay={0.2} duration={0.5}>
        <Tabs defaultValue={active} className="w-[300px] sm:w-[400px]">
          <TabsList className="grid w-full grid-cols-2 h-[50px] sm:h-[38px] bg-transparent">
            <TabsTrigger
              className={`h-[40px] sm:h-[47px] text-xl lg:text-2xl font-bold`}
              value="Educations"
              onClick={() => {
                setData(educations);
                setActive("Educations");
              }}
            >
              Educations
            </TabsTrigger>
            <TabsTrigger
              className={`h-[40px] sm:h-[47px] text-xl lg:text-2xl font-bold`}
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
        <div className="w-screen h-[18px] mx-auto bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[rgba(0,255,247,0.42)] dark:from-[rgb(0,218,210)] via-white to-white dark:via-[#0e1111] dark:to-[#0e1111] "></div>
      </Reveal>

      {/* Contents */}
      <Reveal delay={0.3} duration={0.8}>
        <EduCertificateDesc desc={data?.description} />
      </Reveal>
      <div className="flex flex-row flex-wrap gap-4 justify-center md:justify-normal">
        {data.type == "certificate" &&
          data?.certificates.map((data: aboutTypes) => (
            <CardCertificate
              title={data?.title}
              description={data?.description}
              imgLink={data?.imgLink}
              directLink={data?.directLink}
            />
          ))}
      </div>
    </section>
  );
}
