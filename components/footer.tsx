"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { CardPattern } from "./card-pattern";
import Container from "./container";
import { Logo } from "./logo";

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
  return (
    <>
      <div className="w-full py-16 lg:py-24 xl:py-32 bg-accent-subtle border-t relative overflow-hidden">
        {/* <CardPattern className="opacity-5" /> */}
        <Container className="relative z-20">
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-8">
            <Logo className="size-12 lg:size-14 xl:size-18" />
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-center w-max">
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
