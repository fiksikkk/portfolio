import styled from "styled-components";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <Container>
        <Content>
          <LogoSection>
            <Logo>YV.</Logo>
            <Dot />
            <Title>Fullstack Developer</Title>
          </LogoSection>

          <Copyright>
            © {currentYear} Yakov Varenik. Crafted with care.
          </Copyright>
        </Content>
      </Container>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  padding: 4rem 2rem;
  background-color: #ffffff;
  border-top: 1px solid rgba(43, 43, 43, 0.06);
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Logo = styled.div`
  font-size: 20px;
  letter-spacing: -0.025em;
  font-family: var(--font-display);
  font-weight: 600;
`;

const Dot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #c8a97e;
`;

const Title = styled.div`
  font-size: 14px;
  color: #6f6b63;
`;

const Copyright = styled.div`
  font-size: 14px;
  color: #6f6b63;
`;
