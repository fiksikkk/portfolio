import styled from "styled-components";
import { Colors } from "shared/styles/colors";

export const PillBadge = styled.span`
  display: inline-block;
  padding: 6px 16px;
  background: ${Colors.primaryTint10};
  color: ${Colors.primary};
  border-radius: 9999px;
  font-size: 13px;
  font-weight: 600;
`;
