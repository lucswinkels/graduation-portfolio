"use client";

import Link from "next/link";
import { MoveUpRight } from "lucide-react";

import { mainMenuItems, projects, socials } from "@/lib/menuItems";
import { cn } from "@/lib/utils";

import Container from "./container";
import { Logo } from "./logo";
import { H5 } from "./typography/h5";

export default function Footer() {
  const menus = [
    { title: "Menu", items: mainMenuItems },
    { title: "Projects", items: projects },
    { title: "Connect", items: socials },
  ];
  const menuLinkStyles =
    "text-sm hover:border-foreground border-b transition-colors border-transparent pb-0.5 hover:text-foreground text-foreground/80";

  return (
    <>
      {/* <div className="w-full py-16 lg:py-24 xl:py-32 bg-accent-subtle border-t">
        <Container>
          <div className="flex flex-col gap-8 md:gap-16">
            <Logo iconSize="w-12 h-12" />
            <div className="flex gap-8 md:gap-16 lg:gap-24 xl:gap-32 w-full flex-wrap md:flex-nowrap">
              {menus.map((menu) => (
                <ul
                  className="flex flex-col gap-2 md:w-max w-full"
                  key={menu.title}
                >
                  <H5>{menu.title}</H5>
                  {menu.items.map((link) => (
                    <li key={link.href} className="group">
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          className={cn(
                            "flex items-center gap-1 w-max",
                            menuLinkStyles
                          )}
                        >
                          {link.title}
                          <MoveUpRight className="size-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </a>
                      ) : (
                        <Link href={link.href} className={menuLinkStyles}>
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
      </div> */}
      <div className="bg-background w-full border-t h-20 flex justify-center items-center">
        <Container className="flex flex-col gap-1 md:flex-row md:justify-between">
          <span className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Luc Swinkels. All rights reserved.
          </span>
          {/* <span className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Luc Swinkels.
          </span> */}
          {/* <span className="text-sm text-muted-foreground">
            All rights reserved.
          </span> */}
        </Container>
      </div>
    </>
  );
}
