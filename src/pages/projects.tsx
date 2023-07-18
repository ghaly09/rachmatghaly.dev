import ProjectsDesc from "../components/Atoms/Descriptions/ProjectsDesc";
import CardProject from "../components/Molecules/Cards/Card-Project";
import ProjectsContainer from "../components/Templates/Containers/Projects-Page/ProjectsContainer";
import ProjectsWrapper from "../components/Templates/Wrappers/Projects-Wrappers/ProjectsWrapper";
import { projectsConfig } from "../config/projects-config";

export default function Projects() {
  return (
    <section id="projects">
      {/* Title */}
      <ProjectsDesc />

      {/* Showcase my Propjects */}
      <ProjectsContainer>
        {projectsConfig.dataProjects.map((data, index) => {
          return (
            <ProjectsWrapper key={index}>
              <CardProject
                title={data?.title}
                imgSrc={data?.imgSrc}
                description={data?.description}
                technologies={data?.technologies}
                date={data?.date}
                directLink={data?.directLink}
              />
            </ProjectsWrapper>
          );
        })}
      </ProjectsContainer>
    </section>
  );
}
