"use client";

import Container from "./container";
import { Logo } from "./logo";

export default function Footer() {
  return (
    <div className="w-full py-16 xl:py-32 bg-background border-t">
      <Container>
        <div className="flex flex-col xl:flex-row justify-between">
          <Logo className="size-16" />
          <ul className="flex gap-8">
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
