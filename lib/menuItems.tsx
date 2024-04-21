import { Book, Contact, Github, Grid3X3, Home, Mail, User } from "lucide-react";
import { BiLogoLinkedin } from "react-icons/bi";

export type menuItem = {
  icon?: JSX.Element;
  title: string;
  href: string;
  external?: boolean;
};

export const mainMenuItems: menuItem[] = [
  {
    icon: <Home />,
    title: "Home",
    href: "/",
  },
  {
    icon: <User />,
    title: "About me",
    href: "/about-me",
  },
  {
    icon: <Contact />,
    title: "Contact",
    href: "/contact",
  },
  {
    icon: <Book />,
    title: "Reading guide",
    href: "/reading-guide",
  },
  {
    icon: <Grid3X3 />,
    title: "Burden of proof",
    href: "/burden-of-proof",
  },
  {
    icon: <Github />,
    title: "Source code",
    href: "https://github.com/lucswinkels/graduation-portfolio",
    external: true,
  },
];

export const socials: menuItem[] = [
  {
    icon: <Github />,
    title: "GitHub",
    href: "https://github.com/lucswinkels",
    external: true,
  },
  {
    icon: <BiLogoLinkedin />,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/luc-swinkels-42a775157/",
    external: true,
  },
  {
    icon: <Mail />,
    title: "E-mail",
    href: "mailto:lucswinkelsweb@gmail.com",
    external: true,
  },
];

// TODO: get projects from Sanity
export const projects: menuItem[] = [
  {
    title: "Masita",
    href: "/project/masita",
  },
];
