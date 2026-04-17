import styled from "styled-components";
import { Colors } from "../styles/colors";

export const CardBase = styled.div`
  padding: 1.5rem;
  background-color: ${Colors.base};
  border-radius: 20px;
  transition: all 0.5s ease;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const IconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 14px;
  background-color: ${Colors.surface};
  color: ${Colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  transition: transform 0.5s;

  svg {
    width: 24px;
    height: 24px;
  }
`;
