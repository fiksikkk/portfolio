import styled from "styled-components";

export const ButtonBase = styled.button`
  padding: 1rem 2rem;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
`;

export const PrimaryButton = styled(ButtonBase)`
  background: #c8a97e;
  color: #ffffff;

  &:hover {
    background: #b8996e;
    box-shadow: 0 8px 24px rgba(200, 169, 126, 0.25);
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled(ButtonBase)`
  background: #ffffff;
  color: #2b2b2b;
  box-shadow: 0 1px 3px rgba(43, 43, 43, 0.08);

  &:hover {
    background: #fafafa;
    box-shadow: 0 4px 16px rgba(43, 43, 43, 0.12);
    transform: translateY(-2px);
  }
`;
