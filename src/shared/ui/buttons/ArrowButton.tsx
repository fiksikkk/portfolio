import styled, { css } from "styled-components";
import { Colors } from "shared/styles/colors";
import { ArrowRightIcon } from "../icons";

interface ArrowButtonProps {
  className?: string;
  reactToParentHover?: boolean;
}

export function ArrowButton({
  className,
  reactToParentHover = false,
}: ArrowButtonProps) {
  return (
    <ArrowButtonContainer
      className={className}
      $reactToParentHover={reactToParentHover}
    >
      <ArrowRightIcon />
    </ArrowButtonContainer>
  );
}

const ArrowButtonContainer = styled.div<{ $reactToParentHover: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${Colors.base};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;

  svg {
    width: 20px;
    height: 20px;
    color: ${Colors.primary};
    transition: color 0.5s ease;
  }

  ${({ $reactToParentHover }) =>
    $reactToParentHover &&
    css`
      button:hover &,
      a:hover & {
        background: ${Colors.primary};
      }

      button:hover & svg,
      a:hover & svg {
        color: ${Colors.surface};
      }
    `}
`;
