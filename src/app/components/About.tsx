import styled from "styled-components";

export default function About() {
  return (
    <Section id="about">
      <Container>
        <Content>
          <Subtitle>About</Subtitle>

          <Description>
            I'm a fullstack developer specializing in building high-performance
            mobile and web applications. With deep expertise in React Native and
            modern backend technologies, I create seamless user experiences
            backed by robust, scalable architecture.
          </Description>

          <Description>
            I leverage AI tools to accelerate development workflows, automate
            repetitive tasks, and enhance code quality — allowing me to focus on
            solving complex problems and delivering exceptional results.
          </Description>
        </Content>
      </Container>
    </Section>
  );
}

const Section = styled.section`
  padding: 8rem 2rem;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Subtitle = styled.h2`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #c8a97e;
  margin-bottom: 1.5rem;
  font-family: var(--font-display);
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 21px;
  line-height: 1.7;
  color: #2b2b2b;

  &:not(:first-of-type) {
    margin-top: 2rem;
  }
`;
