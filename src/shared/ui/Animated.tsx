import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AnimatedBlock = styled.div<{ delay?: string }>`
  animation: ${fadeInUp} 0.8s ease-out forwards;
  opacity: 0;
  animation-delay: ${({ delay }) => delay ?? "0ms"};
`;
