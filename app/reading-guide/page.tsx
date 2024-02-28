import * as React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import FadeUp from "@/components/animation/fade-up";
import BurdenOfProof from "@/components/burden-of-proof";
import Container from "@/components/container";
import { A } from "@/components/typography/a";
import { Blockquote } from "@/components/typography/blockquote";
import { H1 } from "@/components/typography/h1";
import { H2 } from "@/components/typography/h2";
import { H3 } from "@/components/typography/h3";
import { Lead } from "@/components/typography/lead";
import { List } from "@/components/typography/list";
import { P } from "@/components/typography/p";
import { SmallText } from "@/components/typography/small-text";

export const metadata: Metadata = {
  title: "Reading guide",
};

export default function ReadingGuide() {
  const Content = () => (
    <>
      <div className="md:flex hidden items-center mb-8 text-muted-foreground">
        <SmallText>
          <Link href="/">Home</Link>
        </SmallText>
        <ChevronRight className="mx-1 size-4" />
        <SmallText className="text-foreground">Reading guide</SmallText>
      </div>
      <div className="lg:flex justify-between mb-8 xl:mb-16">
        <div>
          <H1 className="mb-4">Reading guide</H1>
          <Lead>A summary of this portfolio.</Lead>
        </div>
        <Button asChild className="mt-4 lg:mt-0">
          <a href="/files/reading-guide.pdf" target="_blank">
            <ExternalLink className="mr-2 size-4" /> PDF version
          </a>
        </Button>
      </div>
      <div className="prose dark:prose-invert max-w-full">
        <H2>Table of contents</H2>
        <List>
          <li>
            <Link href="#assignment">Assignment</Link>
          </li>
          <li>
            <Link href="#process">Process</Link>
          </li>
        </List>
        <div id="assignment" className="scroll-mt-32">
          <H2>The assignment</H2>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            voluptate?
          </P>
          <Blockquote>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
            culpa.
          </Blockquote>
        </div>
        <div id="process" className="scroll-mt-32">
          <H2>Process</H2>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            voluptate?
          </P>
          <Blockquote>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque,
            culpa.
          </Blockquote>
        </div>
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
