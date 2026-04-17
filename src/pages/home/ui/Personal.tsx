import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Colors } from "shared/styles/colors";
import {
  SectionWrapper,
  SectionContent as Content,
  SectionSubtitle as Subtitle,
  SectionText as Description,
  CardBase,
  IconContainer as IconContainerBase,
  SmartHomeIcon,
  ModelingIcon,
  WoodworkingIcon,
} from "shared/ui";

interface Interest {
  title: string;
  description: string;
}

export function Personal() {
  const { t } = useTranslation();
  const interests = t("personal.interests", { returnObjects: true }) as Interest[];

  const icons = [
    <SmartHomeIcon key="smart-home" />,
    <ModelingIcon key="modeling" />,
    <WoodworkingIcon key="woodworking" />,
  ];

  return (
    <SectionWrapper background="surface">
      <Content>
        <Subtitle>{t("personal.title")}</Subtitle>

        <Description>{t("personal.description")}</Description>

        <Grid>
          {interests.map((interest, index) => (
            <Card
              key={interest.title}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <IconContainer>{icons[index]}</IconContainer>

              <Title>{interest.title}</Title>

              <Text>{interest.description}</Text>
            </Card>
          ))}
        </Grid>
      </Content>
    </SectionWrapper>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled(CardBase)`
  &:hover {
    background-color: ${Colors.primaryTint10};
  }
`;

const IconContainer = styled(IconContainerBase)`
  width: 3rem;
  height: 3rem;
  border-radius: 14px;
  background-color: ${Colors.surface};
  color: ${Colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: transform 0.5s;

  svg {
    width: 24px;
    height: 24px;
  }

  ${Card}:hover & {
    transform: scale(1.1);
  }
`;

const Title = styled.h3`
  font-size: 17px;
  margin-bottom: 0.5rem;
  font-family: var(--font-display);
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 15px;
  color: ${Colors.muted};
`;
