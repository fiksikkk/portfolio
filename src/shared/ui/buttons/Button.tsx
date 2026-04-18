import styled from "styled-components";
import { Colors } from "shared/styles/colors";

export const ButtonBase = styled.button`
  padding: 1rem 2rem;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
`;

export const PrimaryButton = styled(ButtonBase)`
  background: ${Colors.primary};
  color: ${Colors.surface};

  &:hover {
    background: ${Colors.primaryHover};
    box-shadow: 0 8px 24px ${Colors.primaryTint25};
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  background: ${Colors.surface};
  color: ${Colors.foreground};
  box-shadow: 0 1px 3px ${Colors.foregroundTint08};

  &:hover {
    background: ${Colors.surfaceAlt};
    box-shadow: 0 4px 16px ${Colors.foregroundTint12};
    transform: translateY(-2px);
  }
`;
