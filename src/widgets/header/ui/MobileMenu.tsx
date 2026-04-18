import { NavLinks } from "./NavLinks";
import {
  MobileMenuButton,
  MobileMenuIcon,
  MobileMenuPanel,
} from "./Header.styles";

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (sectionId: string) => void;
  getLabel: (translationKey: string) => string;
  openLabel: string;
  closeLabel: string;
}

export function MobileMenu({
  isOpen,
  onToggle,
  onNavigate,
  getLabel,
  openLabel,
  closeLabel,
}: MobileMenuProps) {
  return (
    <>
      <MobileMenuButton
        type="button"
        aria-expanded={isOpen}
        aria-label={isOpen ? closeLabel : openLabel}
        onClick={onToggle}
      >
        <MobileMenuIcon aria-hidden="true" $open={isOpen}>
          <span />
          <span />
          <span />
        </MobileMenuIcon>
      </MobileMenuButton>

      <MobileMenuPanel $open={isOpen} $forceSolidBackground={isOpen}>
        <NavLinks mobile onNavigate={onNavigate} getLabel={getLabel} />
      </MobileMenuPanel>
    </>
  );
}
