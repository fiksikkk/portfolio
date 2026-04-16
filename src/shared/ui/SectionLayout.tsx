import styled from "styled-components";

export type SectionBackground = "transparent" | "surface" | "base";

const resolveSectionBackground = (background: SectionBackground) => {
  if (background === "surface") {
    return "#ffffff";
  }

  if (background === "base") {
    return "#f5f1e8";
  }

  return "transparent";
};

export const Section = styled.section<{ $background?: SectionBackground }>`
  padding: 8rem 2rem;
  background: ${({ $background = "transparent" }) =>
    resolveSectionBackground($background)};
`;

export const WideSection = styled(Section)`
  padding: 128px 32px;
`;

export const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const CenteredSectionContent = styled(SectionContent)`
  text-align: center;
`;

export const HeaderSection = styled.div`
  max-width: 800px;
  margin: 0 auto 64px;
  text-align: center;
`;
