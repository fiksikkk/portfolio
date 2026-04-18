import { HEADER_NAV_ITEMS } from "../model/navItems";
import {
  DesktopNavButton,
  MobileNavButton,
  MobileNavList,
  NavItem,
  NavList,
} from "./Header.styles";

interface NavLinksProps {
  onNavigate: (sectionId: string) => void;
  getLabel: (translationKey: string) => string;
  mobile?: boolean;
}

export function NavLinks({
  onNavigate,
  getLabel,
  mobile = false,
}: NavLinksProps) {
  const List = mobile ? MobileNavList : NavList;

  return (
    <List>
      {HEADER_NAV_ITEMS.map((item) => (
        <NavItem key={item.sectionId}>
          {mobile ? (
            <MobileNavButton
              type="button"
              onClick={() => onNavigate(item.sectionId)}
            >
              {getLabel(item.translationKey)}
            </MobileNavButton>
          ) : (
            <DesktopNavButton
              type="button"
              onClick={() => onNavigate(item.sectionId)}
            >
              {getLabel(item.translationKey)}
            </DesktopNavButton>
          )}
        </NavItem>
      ))}
    </List>
  );
}
