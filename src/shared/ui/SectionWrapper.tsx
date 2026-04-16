import React from "react";
import {
  Section,
  WideSection,
  SectionContainer,
  type SectionBackground,
} from "./SectionLayout";

interface SectionWrapperProps {
  children: React.ReactNode;
  wide?: boolean;
  background?: SectionBackground;
  id?: string;
  className?: string;
  ref?: React.ComponentProps<typeof Section>["ref"];
}

export function SectionWrapper({
  children,
  wide = false,
  background = "transparent",
  id,
  className,
  ref,
}: SectionWrapperProps) {
  if (wide) {
    return (
      <WideSection
        ref={ref}
        id={id}
        className={className}
        $background={background}
      >
        <SectionContainer>{children}</SectionContainer>
      </WideSection>
    );
  }

  return (
    <Section ref={ref} id={id} className={className} $background={background}>
      <SectionContainer>{children}</SectionContainer>
    </Section>
  );
}
