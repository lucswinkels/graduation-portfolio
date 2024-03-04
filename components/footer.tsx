"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

import { CardPattern } from "./card-pattern";
import Container from "./container";
import { Logo } from "./logo";

export default function Footer() {
  return (
    <>
      <div className="w-full py-16 lg:py-24 xl:py-32 bg-background border-t relative overflow-hidden">
        <CardPattern className="h-screen w-screen opacity-5" />
        <Container className="relative z-20">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-8">
            <Logo className="size-12 lg:size-14 xl:size-18" />
            <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 lg:items-center w-max">
              <li>
                <Link
                  href="/reading-guide"
                  className="hover:border-foreground border-b transition-colors border-transparent pb-0.5"
                >
                  Reading guide
                </Link>
              </li>
              <li>
                <Link
                  href="/burden-of-proof"
                  className="hover:border-foreground border-b transition-colors border-transparent pb-0.5"
                >
                  Burden of proof
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/lucswinkels/graduation-portfolio"
                  className="flex items-center hover:border-foreground border-b transition-colors border-transparent pb-0.5"
                >
                  Source code <ExternalLink className="size-4 ml-2" />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
      <div className="bg-background w-full border-t py-8">
        <Container>
          <span className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Luc Swinkels.
          </span>
        </Container>
      </div>
    </>
  );
}
