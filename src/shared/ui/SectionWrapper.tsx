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
}

function SectionWrapperComponent(
  { children, wide = false, background = "transparent", id, className }: SectionWrapperProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  const SectionComponent = wide ? WideSection : Section;

  return (
    <SectionComponent
      ref={ref}
      id={id}
      className={className}
      $background={background}
    >
      <SectionContainer>{children}</SectionContainer>
    </SectionComponent>
  );
}

SectionWrapperComponent.displayName = "SectionWrapper";

export const SectionWrapper = React.forwardRef(SectionWrapperComponent);
