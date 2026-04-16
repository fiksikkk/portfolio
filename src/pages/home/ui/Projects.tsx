import styled from "styled-components";
import {
  WideSection as BaseSection,
  SectionContainer as Container,
  HeaderSection as SharedHeaderSection,
  SectionSubtitle as Title,
  Tag,
} from "../../../shared/ui";

export function Projects() {
  const projects = [
    {
      name: "Muffins",
      description: `Developed and maintained a B2B medical benefits platform across web, mobile, and backend.
                    Refactored legacy code and wrote tests (Jest, Detox) to improve performance and stability.
                    Used AI tools and prompt engineering to streamline development and ensure reliable results.`,
      tags: ["React", "Node.js", "GraphQL", "AI Integration", "PostgreSQL"],
      highlight: "B2B Platform",
    },
    {
      name: "JetRuby Mobile",
      description: `Built a fitness and health mobile app from scratch using React Native.
                    Implemented UI from designs, integrated REST APIs, and managed state and navigation.
                    Optimized performance and stability, and contributed to code reviews and planning.`,
      tags: ["React Native", "TypeScript", "Redux", "Detox", "Performance"],
      highlight: "Mobile App",
    },
  ];

  return (
    <Section id="projects">
      <Container>
        <HeaderSection>
          <Title>Featured Projects</Title>
          <Description>
            Selected work showcasing expertise in fullstack development, mobile
            architecture, and performance optimization.
          </Description>
        </HeaderSection>

        <ProjectsList>
          {projects.map((project) => (
            <ProjectCard key={project.name}>
              <GradientBackground />
              <DecorativeElement />

              <CardContent>
                <ProjectHeader>
                  <ProjectInfo>
                    <HighlightBadge>{project.highlight}</HighlightBadge>
                    <ProjectName>{project.name}</ProjectName>
                  </ProjectInfo>

                  <ArrowIcon>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </ArrowIcon>
                </ProjectHeader>

                <ProjectDescription>{project.description}</ProjectDescription>

                <TagsList>
                  {project.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </TagsList>
              </CardContent>
            </ProjectCard>
          ))}
        </ProjectsList>
      </Container>
    </Section>
  );
}

const Section = styled(BaseSection)`
  background: #f5f1e8;
`;

const HeaderSection = styled(SharedHeaderSection)`
  margin: 0 0 64px;
  text-align: left;
`;

const Description = styled.p`
  font-size: 17px;
  color: #6f6b63;
  max-width: 600px;
  margin: 0;
`;

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const ProjectCard = styled.div`
  position: relative;
  background: #ffffff;
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 2px 16px rgba(43, 43, 43, 0.06);
  transition: all 0.5s ease;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    box-shadow: 0 12px 48px rgba(43, 43, 43, 0.12);
    transform: translateY(-8px);
  }
`;

const GradientBackground = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(225deg, rgba(200, 169, 126, 0.05), transparent);
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
  background: rgba(200, 169, 126, 0.05);
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

const HighlightBadge = styled.div`
  display: inline-block;
  padding: 6px 16px;
  background: rgba(200, 169, 126, 0.1);
  color: #c8a97e;
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 16px;
`;

const ProjectName = styled.h3`
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 32px;
  margin: 0 0 12px 0;
`;

const ArrowIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #f5f1e8;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;

  svg {
    width: 20px;
    height: 20px;
    color: #c8a97e;
    transition: color 0.5s ease;
  }

  ${ProjectCard}:hover & {
    background: #c8a97e;

    svg {
      color: #ffffff;
    }
  }
`;

const ProjectDescription = styled.p`
  font-size: 17px;
  color: #6f6b63;
  line-height: 1.75;
  margin: 0 0 32px 0;
  max-width: 800px;
`;

const TagsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;
