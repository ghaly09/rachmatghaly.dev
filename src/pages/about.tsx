import * as React from "react";
import AboutContainer from "../components/Templates/Containers/AboutContainer";
import AboutDescMotion from "../components/ui/FramerMotion/aboutDesc-motion";
import AboutDesc from "../components/Atoms/Descriptions/AboutDesc";
import GhalyPhoto from "../components/Atoms/Photos/Ghaly";
import AboutTitle from "../components/Atoms/Descriptions/AboutTitle";
import AboutTitleMotion from "../components/ui/FramerMotion/aboutTitle-motion";
import SkillsContainer from "../components/Templates/Containers/SkillsContainer";
import SkillsIcon from "../components/Molecules/ChildContainers/SkillsIcon-container";
import ContactContainer from "../components/Templates/Containers/ContactContainer";
import ContactDesc from "../components/Atoms/Descriptions/ContactDesc";

export default function About() {
  return (
    <section id="about">
      {/* About Me */}
      <AboutTitleMotion>
        <AboutTitle />
      </AboutTitleMotion>
      <AboutContainer>
        <AboutDescMotion>
          <AboutDesc />
        </AboutDescMotion>
        <AboutDescMotion>
          <GhalyPhoto />
        </AboutDescMotion>
      </AboutContainer>

      {/* Current favorite tech stack/tools */}
      <SkillsContainer>
        <SkillsIcon />
      </SkillsContainer>

      {/* Educations */}

      {/* Contact Me */}
      <ContactContainer>
        <ContactDesc />
      </ContactContainer>
    </section>
  );
}
