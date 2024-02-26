import Link from "next/link";

import { Button } from "@/components/ui/button";
import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import { H1 } from "@/components/typography/h1";
import { Lead } from "@/components/typography/lead";

export default function NotFoundPage() {
  return (
    <FadeUp>
      <Container>
        <H1 className="mb-4">Uh.. I&apos;ve got bad news.</H1>
        <Lead>This page doesn&apos;t exist!</Lead>
        <Button className="mt-8" asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </Container>
    </FadeUp>
  );
}
