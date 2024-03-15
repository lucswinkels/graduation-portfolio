"use client";

import Link from "next/link";

import Container from "./container";
import { Logo } from "./logo";
import { H4 } from "./typography/h4";

export default function Footer() {
  const linkStyles =
    "hover:border-foreground border-b transition-colors border-transparent pb-0.5";
  const links = [
    {
      href: "/reading-guide",
      text: "Reading guide",
    },
    {
      href: "/burden-of-proof",
      text: "Burden of proof",
    },
    {
      href: "https://github.com/lucswinkels/graduation-portfolio",
      text: "Source code",
      external: true,
    },
  ];
  const menus = [
    {
      title: "Projects",
      links: [
        {
          href: "/projects/masita",
          text: "Masita",
        },
        {
          href: "/projects/masita",
          text: "Project 2",
        },
      ],
    },
    {
      title: "Portfolio",
      links: [
        {
          href: "/reading-guide",
          text: "Reading guide",
        },
        {
          href: "/burden-of-proof",
          text: "Burden of proof",
        },
        {
          href: "https://github.com/lucswinkels/graduation-portfolio",
          text: "Source code",
          external: true,
        },
      ],
    },
    {
      title: "About",
      links: [
        {
          href: "/about-me",
          text: "About me",
        },
        {
          href: "/contact",
          text: "Contact",
        },
      ],
    },
  ];
  return (
    <>
      <div className="w-full py-16 lg:py-24 xl:py-32 bg-accent-subtle border-t">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <Logo className="size-12 lg:size-14 xl:size-16" />
            {/* <div className="flex gap-8 lg:gap-16 xl:gap-32">
              {menus.map((menu) => (
                <div key={menu.title}>
                  <H4 className="text-lg mb-2">{menu.title}</H4>
                  <ul className="flex flex-col gap-2">
                    {menu.links.map((link) => (
                      <li key={link.href}>
                        {link.external ? (
                          <a href={link.href} className={linkStyles}>
                            {link.text}
                          </a>
                        ) : (
                          <Link href={link.href} className={linkStyles}>
                            {link.text}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div> */}
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-center w-max text-sm font-medium">
              {links.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a href={link.href} className={linkStyles}>
                      {link.text}
                    </a>
                  ) : (
                    <Link href={link.href} className={linkStyles}>
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
      <div className="bg-accent-subtle w-full border-t py-8">
        <Container className="flex justify-between flex-col md:flex-row ">
          <span className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Luc Swinkels.
          </span>
          <span className="text-sm text-muted-foreground">
            All rights reserved.
          </span>
        </Container>
      </div>
    </>
  );
}
