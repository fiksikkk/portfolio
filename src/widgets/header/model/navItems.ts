export interface HeaderNavItem {
  sectionId: string;
  translationKey: string;
}

export const HEADER_NAV_ITEMS: HeaderNavItem[] = [
  { sectionId: "about", translationKey: "header.nav.about" },
  { sectionId: "projects", translationKey: "header.nav.projects" },
  { sectionId: "contact", translationKey: "header.nav.contact" },
];
