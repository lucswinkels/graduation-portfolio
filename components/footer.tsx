"use client";

import Link from "next/link";

import { mainMenuItems, projects, socials } from "@/lib/menuItems";

import Container from "./container";
import { Logo } from "./logo";
import { H5 } from "./typography/h5";

export default function Footer() {
  const linkStyles =
    "hover:border-foreground border-b transition-colors border-transparent pb-0.5";
  const menuItems = [
    { title: "Menu", items: mainMenuItems },
    { title: "Connect", items: socials },
    { title: "Projects", items: projects },
  ];
  return (
    <>
      <div className="w-full py-16 lg:py-24 xl:py-32 bg-accent-subtle border-t">
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <Logo iconSize="size-12 lg:size-14 xl:size-16" />
            <div className="flex gap-8 md:gap-16 w-full flex-wrap md:flex-nowrap lg:justify-end">
              {menuItems.map((menu) => (
                <ul
                  className="flex flex-col gap-2 md:w-max text-sm w-full"
                  key={menu.title}
                >
                  <H5>{menu.title}</H5>
                  {menu.items.map((link) => (
                    <li key={link.href}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          className={linkStyles}
                        >
                          {link.title}
                        </a>
                      ) : (
                        <Link href={link.href} className={linkStyles}>
                          {link.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-accent-subtle w-full border-t h-16 flex justify-center items-center">
        <Container className="flex justify-between">
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
