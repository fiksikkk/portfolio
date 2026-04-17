import styled from "styled-components";
import { Colors } from "shared/styles/colors";
import {
  SectionWrapper,
  SectionSubtitle,
  CardBase,
  IconContainer as IconContainerBase,
} from "shared/ui";

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "React Native", "TypeScript"],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Backend",
      skills: ["Node.js", "Nest.js", "GraphQL"],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
    },
    {
      title: "State & Data",
      skills: ["Redux", "Effector", "REST APIs"],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
    },
    {
      title: "Testing",
      skills: ["Jest", "Detox", "Unit & E2E"],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Dev Tools",
      skills: ["Sentry", "CI/CD", "Git"],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Architecture",
      skills: ["Clean Code", "Design Patterns", "Feature Sliced Design"],
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
  ];

  return (
    <SectionWrapper wide background="surface">
      <Title>Skills & Expertise</Title>

      <Grid>
        {skillCategories.map((category, index) => (
          <Card
            key={category.title}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <IconContainer>{category.icon}</IconContainer>

            <CardTitle>{category.title}</CardTitle>

            <SkillList>
              {category.skills.map((skill) => (
                <SkillItem key={skill}>{skill}</SkillItem>
              ))}
            </SkillList>
          </Card>
        ))}
      </Grid>
    </SectionWrapper>
  );
}

const Title = styled(SectionSubtitle)`
  margin: 0 0 48px 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const Card = styled(CardBase)`
  padding: 32px;
  border-radius: 24px;
  cursor: pointer;

  &:hover {
    background: ${Colors.surface};
    box-shadow: 0 8px 32px ${Colors.foregroundTint08};
    transform: translateY(-4px);
  }
`;

const IconContainer = styled(IconContainerBase)`
  width: 48px;
  height: 48px;
  border-radius: 16px;
  background: ${Colors.surface};
  color: ${Colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  transition: all 0.5s ease;
  box-shadow: 0 2px 8px ${Colors.foregroundTint06};

  svg {
    width: 24px;
    height: 24px;
  }

  ${Card}:hover & {
    background: ${Colors.primary};
    color: ${Colors.surface};
  }
`;

const CardTitle = styled.h3`
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 20px;
  margin: 0 0 16px 0;
`;

const SkillList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const SkillItem = styled.li`
  font-size: 15px;
  color: ${Colors.muted};
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;
