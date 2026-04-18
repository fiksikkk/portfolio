import styled from "styled-components";
import { Colors } from "shared/styles/colors";
import { SectionContainer } from "shared/ui";

export const HeaderWrapper = styled.header<{
  backgroundColor: string;
  $forceSolidBackground: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease,
    backdrop-filter 0.3s ease;
  background-color: ${({ backgroundColor, $forceSolidBackground }) =>
    $forceSolidBackground ? Colors.surfaceTint80 : backgroundColor};
  backdrop-filter: ${({ backgroundColor, $forceSolidBackground }) =>
    backgroundColor === Colors.transparent && !$forceSolidBackground
      ? "none"
      : "blur(20px)"};
  box-shadow: ${({ backgroundColor, $forceSolidBackground }) =>
    backgroundColor === Colors.transparent && !$forceSolidBackground
      ? "none"
      : `0 1px 0 ${Colors.foregroundTint06}`};

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    backdrop-filter: none;
    transition: none;
  }
`;

export const HeaderContainer = styled(SectionContainer)`
  padding: 24px 32px;

  @media (max-width: 768px) {
    padding: 10px 16px;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const DesktopNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LogoButton = styled.button`
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
    color: ${Colors.primary};
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const NavItem = styled.li``;

const BaseNavButton = styled.button`
  font-size: 15px;
  color: ${Colors.muted};
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
`;

export const DesktopNavButton = styled(BaseNavButton)`
  &:hover {
    color: ${Colors.foreground};
  }
`;

export const MobileNavButton = styled(BaseNavButton)`
  width: 100%;
  text-align: left;
  color: ${Colors.foreground};
  font-size: 16px;
  padding: 10px 0;
`;

export const MobileMenuButton = styled.button`
  display: none;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 1px solid ${Colors.foregroundTint10};
  border-radius: 9999px;
  background: ${Colors.surfaceTint60};
  color: ${Colors.foreground};
  cursor: pointer;

  @media (max-width: 768px) {
    display: inline-flex;
  }
`;

export const MobileMenuRoot = styled.div`
  position: relative;
  display: inline-flex;
`;

export const MobileControls = styled.div`
  display: none;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const MobileMenuIcon = styled.span<{ $open: boolean }>`
  position: relative;
  width: 14px;
  height: 12px;
  display: inline-block;

  span {
    position: absolute;
    left: 0;
    width: 14px;
    height: 1.5px;
    border-radius: 9999px;
    background: currentColor;
    transition: transform 0.28s ease, opacity 0.22s ease;
  }

  span:nth-child(1) {
    top: 1px;
    transform: ${({ $open }) =>
      $open ? "translateY(4px) rotate(45deg)" : "none"};
  }

  span:nth-child(2) {
    top: 5px;
    opacity: ${({ $open }) => ($open ? 0 : 1)};
    transform: ${({ $open }) => ($open ? "scaleX(0.2)" : "none")};
  }

  span:nth-child(3) {
    top: 9px;
    transform: ${({ $open }) =>
      $open ? "translateY(-4px) rotate(-45deg)" : "none"};
  }
`;

export const MobileMenuPanel = styled.div<{
  $open: boolean;
  $forceSolidBackground: boolean;
}>`
  display: none;

  @media (max-width: 768px) {
    position: fixed;
    top: 60px;
    left: auto;
    right: 0;
    z-index: 60;
    display: grid;
    gap: ${({ $open }) => ($open ? "14px" : "0")};
    width: 40vw;
    min-width: 220px;
    padding: ${({ $open }) => ($open ? "14px 20px 12px" : "0 20px")};
    border: 1px solid
      ${({ $open }) => ($open ? Colors.foregroundTint10 : Colors.transparent)};
    border-right: none;
    border-radius: 16px 0 0 16px;
    background: ${({ $forceSolidBackground }) =>
      $forceSolidBackground ? Colors.surfaceTint80 : Colors.transparent};
    box-shadow: ${({ $open }) =>
      $open ? `0 12px 30px ${Colors.foregroundTint10}` : "none"};
    overflow: hidden;
    max-height: ${({ $open }) => ($open ? "260px" : "0")};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    transform: ${({ $open }) =>
      $open ? "translateY(0)" : "translateY(-8px)"};
    pointer-events: ${({ $open }) => ($open ? "auto" : "none")};
    transition:
      max-height 0.3s ease,
      opacity 0.2s ease,
      transform 0.25s ease,
      border-color 0.2s ease,
      padding 0.25s ease,
      gap 0.25s ease;
  }
`;

export const MobileNavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

export const LanguageSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem;
  border: 1px solid ${Colors.foregroundTint10};
  border-radius: 9999px;
  background: ${Colors.surfaceTint60};
`;

export const MobileLanguageSwitcher = styled(LanguageSwitcher)`
  display: none;
  padding: 0.2rem;
  gap: 0.2rem;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const LanguageButton = styled.button<{ $active: boolean }>`
  min-width: 40px;
  border: none;
  border-radius: 9999px;
  background: ${({ $active }) =>
    $active ? Colors.primary : Colors.transparent};
  color: ${({ $active }) => ($active ? Colors.surface : Colors.muted)};
  font-size: 12px;
  font-weight: 600;
  line-height: 1;
  padding: 6px 10px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ $active }) => ($active ? Colors.surface : Colors.foreground)};
  }
`;
