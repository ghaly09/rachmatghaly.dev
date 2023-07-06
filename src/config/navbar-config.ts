export type navType = Array<{
  href: string;
  page: string;
}>;

export interface navProps {
  href: string;
  page: string;
}

export const navConfig: navType = [
  {
    href: "/",
    page: "Home",
  },
  {
    href: "/projects",
    page: "Projects",
  },
  {
    href: "/blog",
    page: "Blog",
  },
  {
    href: "/about",
    page: "About",
  },
];
