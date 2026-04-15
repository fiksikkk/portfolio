import styled from "styled-components";

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <HeaderWrapper scrolled={scrolled}>
      <HeaderContainer>
        <HeaderNav>
          <LogoButton
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            YV.
          </LogoButton>

          <NavList>
            <NavItem>
              <NavButton type="button" onClick={() => scrollToSection("about")}>
                About
              </NavButton>
            </NavItem>
            <NavItem>
              <NavButton
                type="button"
                onClick={() => scrollToSection("projects")}
              >
                Projects
              </NavButton>
            </NavItem>
            <NavItem>
              <NavButton
                type="button"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </NavButton>
            </NavItem>
          </NavList>
        </HeaderNav>
      </HeaderContainer>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition: all 0.5s;
  background: ${({ scrolled }) =>
    scrolled ? "rgba(255, 255, 255, 0.8)" : "transparent"};
  backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(20px)" : "none")};
  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 1px 0 rgba(43, 43, 43, 0.06)" : "none"};
`;

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px 32px;
`;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoButton = styled.button`
  font-size: 1.5rem;
  letter-spacing: -0.025em;
  color: inherit;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
  font-family: var(--font-display);
  font-weight: 600;

  &:hover {
    color: #c8a97e;
  }
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavItem = styled.li``;

const NavButton = styled.button`
  font-size: 15px;
  color: #6f6b63;
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #2b2b2b;
  }
`;
