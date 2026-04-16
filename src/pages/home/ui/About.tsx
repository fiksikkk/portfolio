import {
  SectionWrapper,
  SectionContent as Content,
  SectionSubtitle as Subtitle,
  SectionText as Description,
} from "../../../shared/ui";

export function About() {
  return (
    <SectionWrapper id="about" background="base">
      <Content>
        <Subtitle>About</Subtitle>

        <Description>
          I'm a fullstack developer specializing in building high-performance
          mobile and web applications. With deep expertise in React Native and
          modern backend technologies, I create seamless user experiences backed
          by robust, scalable architecture.
        </Description>

        <Description>
          I leverage AI tools to accelerate development workflows, automate
          repetitive tasks, and enhance code quality — allowing me to focus on
          solving complex problems and delivering exceptional results.
        </Description>
      </Content>
    </SectionWrapper>
  );
}
