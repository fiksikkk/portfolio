import heroPhoto from "../../../shared/assets/hero-photo.png";
import styled from "styled-components";
import {
  AnimatedBlock,
  PrimaryButton,
  SecondaryButton,
} from "../../../shared/ui";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Section>
      <Content>
        <Columns>
          <LeftColumn>
            <TextBlock delay="100ms">
              <Title>Yakov Varenik</Title>
              <Subtitle>Fullstack Developer</Subtitle>
            </TextBlock>

            <Description delay="300ms">
              Building fast and reliable applications — from mobile interfaces
              to backend architecture
            </Description>

            <ButtonRow delay="400ms">
              <PrimaryButton
                type="button"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </PrimaryButton>
              <SecondaryButton
                type="button"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </SecondaryButton>
            </ButtonRow>
          </LeftColumn>

          <RightColumn delay="500ms">
            <ImageCard>
              <Overlay />
              <HeroImage
                src={heroPhoto}
                alt="Yakov Varenik"
                loading="eager"
                decoding="async"
              />
            </ImageCard>
          </RightColumn>
        </Columns>
      </Content>
    </Section>
  );
}

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: #f5f1e8;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 192px 32px 32px;
  width: 100%;
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const TextBlock = styled(AnimatedBlock)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h1`
  font-family: var(--font-display);
  font-weight: 600;
  font-size: 56px;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin: 0;
`;

const Subtitle = styled.p`
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 24px;
  line-height: 1.4;
  color: #6f6b63;
  margin: 0;
`;

const Description = styled(AnimatedBlock)`
  font-size: 17px;
  color: #6f6b63;
  line-height: 1.75;
  max-width: 520px;
  margin: 0;
`;

const ButtonRow = styled(AnimatedBlock)`
  display: flex;
  gap: 1rem;
  padding-top: 1rem;
`;

const RightColumn = styled(AnimatedBlock)`
  display: flex;
  justify-content: center;

  @media (min-width: 1024px) {
    justify-content: flex-end;
  }
`;

const ImageCard = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  aspect-ratio: 3 / 4;
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(43, 43, 43, 0.08);
  overflow: hidden;

  &:hover > div {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(225deg, rgba(200, 169, 126, 0.1), transparent);
  opacity: 0;
  transition: opacity 0.5s ease;
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: bottom;
`;
