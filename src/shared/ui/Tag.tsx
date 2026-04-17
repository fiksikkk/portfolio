import styled from "styled-components";
import { Colors } from "../styles/colors";

export const Tag = styled.span`
  padding: 8px 16px;
  background: ${Colors.base};
  color: ${Colors.foreground};
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.3s ease;

  &:hover {
    background: ${Colors.primaryTint10};
  }
`;
