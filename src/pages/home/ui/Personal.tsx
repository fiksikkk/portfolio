import styled from "styled-components";
import { Colors } from "shared/styles/colors";
import {
  SectionWrapper,
  SectionContent as Content,
  SectionSubtitle as Subtitle,
  SectionText as Description,
  CardBase,
  IconContainer as IconContainerBase,
} from "shared/ui";

export function Personal() {
  const interests = [
    {
      title: "Smart Home",
      description: "Building and optimizing home automation systems",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      title: "3D Modeling",
      description: "Creating digital designs and prototypes",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
    },
    {
      title: "Woodworking",
      description: "Crafting functional objects with attention to detail",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <SectionWrapper background="surface">
      <Content>
        <Subtitle>Beyond Code</Subtitle>

        <Description>
          When I'm not building software, I enjoy working with my hands and
          exploring the intersection of engineering and craftsmanship. These
          pursuits inform my approach to development — attention to detail,
          systematic thinking, and an appreciation for well-built systems.
        </Description>

        <Grid>
          {interests.map((interest, index) => (
            <Card
              key={interest.title}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <IconContainer>{interest.icon}</IconContainer>

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
