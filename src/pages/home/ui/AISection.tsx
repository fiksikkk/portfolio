import styled from "styled-components";
import { Colors } from "../../../shared/styles/colors";
import {
  WideSection as BaseWideSection,
  SectionContainer as Container,
  HeaderSection,
  SectionSubtitle as Subtitle,
  SectionParagraph as Description,
} from "../../../shared/ui";

export function AISection() {
  const aiCapabilities = [
    {
      title: "Code Generation",
      description:
        "Accelerate development with AI-assisted code generation and boilerplate reduction",
    },
    {
      title: "Automation",
      description:
        "Streamline workflows through intelligent automation and tooling",
    },
    {
      title: "Code Review",
      description:
        "Enhance code quality with AI-powered analysis and suggestions",
    },
  ];

  return (
    <Section>
      <DecorativeCircle1 />
      <DecorativeCircle2 />

      <Container>
        <HeaderSection>
          <Subtitle>AI-Enhanced Development</Subtitle>
          <Title>Building smarter, faster</Title>
          <Description>
            I integrate AI tools throughout the development process to enhance
            productivity, improve code quality, and solve complex problems more
            efficiently. This allows me to deliver exceptional results while
            maintaining high standards of craftsmanship.
          </Description>
        </HeaderSection>

        <CapabilitiesGrid>
          {aiCapabilities.map((capability, index) => (
            <CapabilityCard
              key={capability.title}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <IconContainer>
                <IconDot />
              </IconContainer>

              <CapabilityTitle>{capability.title}</CapabilityTitle>

              <CapabilityDescription>
                {capability.description}
              </CapabilityDescription>
            </CapabilityCard>
          ))}
        </CapabilitiesGrid>
      </Container>
    </Section>
  );
}

const Section = styled(BaseWideSection)`
  background: linear-gradient(
    225deg,
    ${Colors.primaryTint08},
    ${Colors.base},
    ${Colors.transparent}
  );
  position: relative;
  overflow: hidden;
`;

const DecorativeCircle = styled.div`
  position: absolute;
  width: 384px;
  height: 384px;
  background: ${Colors.primaryTint10};
  border-radius: 50%;
  filter: blur(96px);
`;

const DecorativeCircle1 = styled(DecorativeCircle)`
  top: 0;
  left: 0;
  transform: translate(-192px, -192px);
`;

const DecorativeCircle2 = styled(DecorativeCircle)`
  bottom: 0;
  right: 0;
  transform: translate(192px, 192px);
`;

const Title = styled.h3`
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 40px;
  line-height: 1.2;
  margin: 0 0 24px 0;
`;

const CapabilitiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const CapabilityCard = styled.div`
  background: ${Colors.surfaceTint60};
  backdrop-filter: blur(8px);
  border-radius: 24px;
  padding: 32px;
  transition: all 0.5s ease;

  &:hover {
    background: ${Colors.surface};
    box-shadow: 0 8px 32px ${Colors.primaryTint15};
  }
`;

const IconContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: ${Colors.primaryTint10};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const IconDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${Colors.primary};
`;

const CapabilityTitle = styled.h4`
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 18px;
  margin: 0 0 12px 0;
`;

const CapabilityDescription = styled.p`
  font-size: 15px;
  color: ${Colors.muted};
  line-height: 1.75;
  margin: 0;
`;
