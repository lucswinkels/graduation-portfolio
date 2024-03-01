"use client";

import Link from "next/link";

import { CardPattern } from "./card-pattern";
import Container from "./container";
import { Logo } from "./logo";

export default function Footer() {
  return (
    <div className="w-full py-16 lg:py-24 xl:py-32 bg-background border-t relative overflow-hidden">
      <CardPattern className="h-screen w-auto opacity-5" />
      <Container className="relative z-20">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
          <Logo className="size-12 xl:size-16" />
          <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center">
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
          </ul>
        </div>
      </Container>
    </div>
  );
}
