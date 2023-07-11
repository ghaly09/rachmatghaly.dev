import * as React from "react";
import AboutContainer from "../components/Molecules/Containers/AboutContainer";
import AboutDescMotion from "../components/ui/FramerMotion/aboutDesc-motion";
import AboutDesc from "../components/Atoms/Descriptions/AboutDesc";
import GhalyPhoto from "../components/Atoms/Photos/Ghaly";

export default function About() {
  return (
    <section>
      <AboutContainer>
        <AboutDescMotion>
          <AboutDesc />
        </AboutDescMotion>
        <AboutDescMotion>
          <GhalyPhoto />
        </AboutDescMotion>
      </AboutContainer>
    </section>
  );
}
