import { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Colors } from "shared/styles/colors";
import {
  WideSection as BaseSection,
  SectionContainer as Container,
  HeaderSection as SharedHeaderSection,
  SectionSubtitle as Title,
  ArrowButton,
  PillBadge,
} from "shared/ui";
import {
  ProjectDetailsModal,
  type ProjectDetails,
} from "./ProjectDetailsModal";
import { TagsList } from "./TagsList";

export function Projects() {
  const { t } = useTranslation();
  const projects = t("projects.items", {
    returnObjects: true,
  }) as ProjectDetails[];
  const [selectedProject, setSelectedProject] = useState<ProjectDetails | null>(
    null,
  );

  return (
    <Section id="projects">
      <Container>
        <HeaderSection>
          <Title>{t("projects.title")}</Title>
          <Description>{t("projects.description")}</Description>
        </HeaderSection>

        <ProjectsList>
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              onClick={() => setSelectedProject(project)}
            >
              <GradientBackground />
              <DecorativeElement />

              <CardContent>
                <ProjectHeader>
                  <ProjectInfo>
                    <HighlightBadge>{project.highlight}</HighlightBadge>
                    <ProjectName>{project.name}</ProjectName>
                  </ProjectInfo>

                  <ArrowButton reactToParentHover />
                </ProjectHeader>

                <ProjectDescription>{project.description}</ProjectDescription>

                <TagsList tags={project.tags} />
              </CardContent>
            </ProjectCard>
          ))}
        </ProjectsList>
      </Container>

      {selectedProject && (
        <ProjectDetailsModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </Section>
  );
}

const Section = styled(BaseSection)`
  background: ${Colors.base};
`;

const HeaderSection = styled(SharedHeaderSection)`
  margin: 0 0 64px;
  text-align: left;
`;

const Description = styled.p`
  font-size: 17px;
  color: ${Colors.muted};
  max-width: 600px;
  margin: 0;
`;

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ProjectCard = styled.button`
  position: relative;
  width: 100%;
  border: none;
  text-align: left;
  background: ${Colors.surface};
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 2px 16px ${Colors.foregroundTint06};
  transition: all 0.5s ease;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0 12px 48px ${Colors.foregroundTint12};
    transform: translateY(-8px);
  }
`;

const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    225deg,
    ${Colors.primaryTint05},
    ${Colors.transparent}
  );
  opacity: 0;
  transition: opacity 0.5s ease;

  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const DecorativeElement = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 192px;
  height: 192px;
  background: ${Colors.primaryTint05};
  border-radius: 50%;
  filter: blur(48px);
  transform: translate(96px, -96px);
  transition: transform 0.7s ease;

  ${ProjectCard}:hover & {
    transform: translate(96px, -96px) scale(2.5);
  }
`;

const CardContent = styled.div`
  position: relative;
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const ProjectInfo = styled.div``;

const HighlightBadge = styled(PillBadge)`
  margin-bottom: 16px;
`;

const ProjectName = styled.h3`
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 32px;
  margin: 0 0 12px 0;
`;

const ProjectDescription = styled.p`
  font-size: 17px;
  color: ${Colors.muted};
  line-height: 1.75;
  margin: 0 0 32px 0;
  max-width: 800px;
`;
