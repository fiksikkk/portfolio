import styled from "styled-components";
import { Colors } from "shared/styles/colors";

export const SectionSubtitle = styled.h2`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${Colors.primary};
  margin-bottom: 1.5rem;
  font-family: var(--font-display);
  font-weight: 600;
`;

export const SectionParagraph = styled.p`
  font-size: 19px;
  color: ${Colors.muted};
  line-height: 1.75;
  margin: 0;
`;

export const SectionText = styled.p`
  font-size: 21px;
  line-height: 1.7;
  color: ${Colors.foreground};
  margin: 0;

  &:not(:first-of-type) {
    margin-top: 2rem;
  }
`;
