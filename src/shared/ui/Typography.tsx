import styled from "styled-components";

export const SectionSubtitle = styled.h2`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #c8a97e;
  margin-bottom: 1.5rem;
  font-family: var(--font-display);
  font-weight: 600;
`;

export const SectionParagraph = styled.p`
  font-size: 19px;
  color: #6f6b63;
  line-height: 1.75;
  margin: 0;
`;

export const SectionText = styled.p`
  font-size: 21px;
  line-height: 1.7;
  color: #2b2b2b;
  margin: 0;

  &:not(:first-of-type) {
    margin-top: 2rem;
  }
`;
