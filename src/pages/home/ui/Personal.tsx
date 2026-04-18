import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Colors } from "shared/styles/colors";
import {
  SectionWrapper,
  SectionContent,
  SectionSubtitle,
  SectionText,
  CardBase,
  Grid,
  IconContainer,
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
      <SectionContent>
        <SectionSubtitle>{t("personal.title")}</SectionSubtitle>

        <SectionText>{t("personal.description")}</SectionText>

        <Grid>
          {interests.map((interest, index) => (
            <Card
              key={interest.title}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <PersonalIconContainer>{icons[index]}</PersonalIconContainer>

              <Title>{interest.title}</Title>

              <Text>{interest.description}</Text>
            </Card>
          ))}
        </Grid>
      </SectionContent>
    </SectionWrapper>
  );
}

const Card = styled(CardBase)`
  &:hover {
    background-color: ${Colors.primaryTint10};
  }
`;

const PersonalIconContainer = styled(IconContainer)`
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
