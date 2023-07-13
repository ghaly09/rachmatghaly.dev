import AboutDesc from "../components/Atoms/Descriptions/AboutDesc";
import AboutTitle from "../components/Atoms/Descriptions/AboutTitle";
import ContactDesc from "../components/Atoms/Descriptions/ContactDesc";
import GhalyPhoto from "../components/Atoms/Photos/Ghaly";
import SkillsIcon from "../components/Molecules/ChildContainers/SkillsIcon-container";
import AboutContainer from "../components/Templates/Containers/About-Page/AboutContainer";
import ContactContainer from "../components/Templates/Containers/About-Page/ContactContainer";
import SkillsContainer from "../components/Templates/Containers/About-Page/SkillsContainer";
import AboutDescMotion from "../components/ui/FramerMotion/aboutDesc-motion";
import AboutTitleMotion from "../components/ui/FramerMotion/aboutTitle-motion";

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
