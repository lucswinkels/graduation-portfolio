"use client";

import Link from "next/link";
import { Github } from "lucide-react";

import Container from "./container";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";
import { SearchFormComponent } from "./search-form";
import { Button } from "./ui/button";

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
  ];
  return (
    <>
      {/* <div className="w-full py-16 lg:py-24 xl:py-32 bg-accent-subtle border-t">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <Logo className="size-12 lg:size-14 xl:size-16" />
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8 md:items-center w-max text-sm font-medium">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkStyles}>
                    {link.text}
                  </Link>
                </li>
              ))}
              <div className="flex gap-1">
                <Button variant="ghost" size="icon">
                  <a
                    href="https://github.com/lucswinkels/graduation-portfolio"
                    target="_blank"
                  >
                    <Github className="size-[1.2rem]" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
                <ModeToggle variant="ghost" />
                <SearchFormComponent iconOnly />
              </div>
            </ul>
          </div>
        </Container>
      </div> */}

      {/* OLD: <div className="w-full py-8 bg-accent-subtle border-t">*/}
      <div className="bg-background w-full border-t h-16 flex justify-center items-center">
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
