import AboutDesc from "../components/Atoms/Descriptions/AboutDesc";
import AboutTitle from "../components/Atoms/Descriptions/AboutTitle";
import ContactDesc from "../components/Atoms/Descriptions/ContactDesc";
import GhalyPhoto from "../components/Atoms/Photos/Ghaly";
import SkillsIcon from "../components/Molecules/ChildContainers/SkillsIcon-container";
import { TabEduCertificates } from "../components/Molecules/Tabs/TabEduCertificates";
import AboutContainer from "../components/Templates/Containers/About-Page/AboutContainer";
import ContactContainer from "../components/Templates/Containers/About-Page/ContactContainer";
import SkillsContainer from "../components/Templates/Containers/About-Page/SkillsContainer";
import EducationWrapper from "../components/Templates/Wrappers/About-Wrappers/EducationWrapper";
import AboutDescMotion from "../components/ui/FramerMotion/aboutDesc-motion";
import AboutTitleMotion from "../components/ui/FramerMotion/aboutTitle-motion";
import { aboutConfig } from "../config/about-config";

export default function About() {
  return (
    <section id="about" className="overflow-x-hidden relative">
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

      {/* Educations and Certificates*/}
      <EducationWrapper>
        <TabEduCertificates
          educations={aboutConfig.sortBy.education}
          certificates={aboutConfig.sortBy.certificate}
        />
      </EducationWrapper>

      {/* Contact Me */}
      <ContactContainer>
        <ContactDesc />
      </ContactContainer>
    </section>
  );
}
