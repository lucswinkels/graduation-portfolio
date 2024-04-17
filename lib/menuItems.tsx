import { Book, Contact, Github, Grid3X3, Home, Mail, User } from "lucide-react";
import { BiLogoLinkedin } from "react-icons/bi";

const mainMenuItemsIconSize = "size-6";
export const mainMenuItems = [
  {
    icon: <Home className={mainMenuItemsIconSize} />,
    title: "Home",
    href: "/",
    external: false,
  },
  // {
  //   icon: <User className={mainMenuItemsIconSize} />,
  //   title: "About me",
  //   href: "/about-me",
  //   external: false,
  // },
  // {
  //   icon: <Contact className={mainMenuItemsIconSize} />,
  //   title: "Contact",
  //   href: "/contact",
  //   external: false,
  // },
  {
    icon: <Book className={mainMenuItemsIconSize} />,
    title: "Reading guide",
    href: "/reading-guide",
    external: false,
  },
  {
    icon: <Grid3X3 className={mainMenuItemsIconSize} />,
    title: "Burden of proof",
    href: "/burden-of-proof",
    external: false,
  },
  {
    icon: <Github className={mainMenuItemsIconSize} />,
    title: "Source code",
    href: "https://github.com/lucswinkels/graduation-portfolio",
    external: true,
  },
];

const socialsIconSize = "size-5";
export const socials = [
  {
    icon: <Github className={socialsIconSize} />,
    title: "GitHub",
    href: "https://github.com/lucswinkels",
    external: true,
  },
  {
    icon: <BiLogoLinkedin className={socialsIconSize} />,
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/luc-swinkels-42a775157/",
    external: true,
  },
  {
    icon: <Mail className={socialsIconSize} />,
    title: "E-mail",
    href: "mailto:lucswinkelsweb@gmail.com",
    external: true,
  },
];

export const projects = [
  {
    title: "Masita",
    href: "/projects/masita",
    external: false,
  },
];
