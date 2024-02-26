import * as React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import FadeUp from "@/components/animation/fade-up";
import BurdenOfProof from "@/components/burden-of-proof";
import Container from "@/components/container";
import { H1 } from "@/components/typography/h1";
import { Lead } from "@/components/typography/lead";
import { SmallText } from "@/components/typography/small-text";

export const metadata: Metadata = {
  title: "Burden of proof",
};

export default function BurdenOfProofPage() {
  const Content = () => (
    <>
      <div className="md:flex hidden items-center mb-8 text-muted-foreground">
        <SmallText>
          <Link href="/">Home</Link>
        </SmallText>
        <ChevronRight className="mx-1 size-4" />
        <SmallText className="text-foreground">Burden of proof</SmallText>
      </div>
      <div className="mb-8 xl:mb-16">
        <H1 className="mb-4">Burden of proof</H1>
        <Lead>A collection of everything I did during the semester.</Lead>
      </div>
    </>
  );

  return (
    <Container>
      <FadeUp>
        <Content />
        <BurdenOfProof />
      </FadeUp>
    </Container>
  );
}
