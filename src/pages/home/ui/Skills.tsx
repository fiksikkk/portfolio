import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Colors } from "shared/styles/colors";
import {
  SectionWrapper,
  SectionSubtitle,
  CardBase,
  IconContainer as IconContainerBase,
  SkillFrontendIcon,
  SkillBackendIcon,
  SkillStateDataIcon,
  SkillTestingIcon,
  SkillDevToolsIcon,
  SkillArchitectureIcon,
} from "shared/ui";

interface SkillCategory {
  title: string;
  skills: string[];
}

export function Skills() {
  const { t } = useTranslation();
  const skillCategories = t("skills.categories", {
    returnObjects: true,
  }) as SkillCategory[];

  const icons = [
    <SkillFrontendIcon key="frontend" />,
    <SkillBackendIcon key="backend" />,
    <SkillStateDataIcon key="state" />,
    <SkillTestingIcon key="testing" />,
    <SkillDevToolsIcon key="devtools" />,
    <SkillArchitectureIcon key="architecture" />,
  ];

  return (
    <SectionWrapper wide background="surface">
      <Title>{t("skills.title")}</Title>

      <Grid>
        {skillCategories.map((category, index) => (
          <Card
            key={category.title}
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            <IconContainer>{icons[index]}</IconContainer>

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
