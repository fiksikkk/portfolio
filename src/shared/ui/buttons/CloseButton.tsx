import type { ButtonHTMLAttributes } from "react";
import styled from "styled-components";
import { Colors } from "shared/styles/colors";
import { CloseIcon } from "../icons";

type CloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function CloseButton({ className, ...props }: CloseButtonProps) {
  return (
    <CloseButtonContainer type="button" className={className} {...props}>
      <CloseIcon />
    </CloseButtonContainer>
  );
}

const CloseButtonContainer = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  background: ${Colors.base};
  color: ${Colors.muted};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background 0.3s ease,
    color 0.3s ease;

  &:hover {
    background: ${Colors.primary};
    color: ${Colors.surface};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;
