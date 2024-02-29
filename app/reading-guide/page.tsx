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
          <li>
            <Link href="#burden-of-proof">Burden of proof</Link>
          </li>
        </List>
        <div id="assignment" className="scroll-mt-32">
          <H2>The assignment</H2>
          <H3>Context</H3>
          <P>
            Masita, a leading Dutch sportswear brand, had a Magento webshop
            developed a few years ago. However, it turned out that there were a
            lot of different requirements and desires that were built as
            extensions to Magento by various developers, including Moonly.
            Additionally, Masita worked with other parties for tasks such as
            order picking and shipping, the ability to customise items, and
            selling products on other channels (such as bol.com, etc.). To
            integrate these software systems with the Magento webshop, a number
            of connections were written.
          </P>
          <P>
            Due to insufficient consideration for future-proofing, scalability,
            and the Magento framework as a basis when creating these
            integrations, they did not function properly, leading to more and
            more cracks in the system. Whenever an external integration was
            updated, the entire order process behind the store would come to a
            halt.
          </P>
          <P>
            Ultimately, Masita chose to cease operations, and the webshop was
            taken offline due to escalating problems with the website.
            Currently, these integrations no longer work, and they have not been
            updated for over a year.
          </P>
          <P>
            Last year, Masita was acquired by the current owner, and they are in
            the process of completely redesigning their webshops. Subsequently,
            Moonly was asked to start developing a B2B store so that they could
            begin selling items to businesses.
          </P>
          <P>
            Now that Moonly is working on completing this B2B store, we want to
            think ahead and commission a study on the development of a brand new
            B2C store.
          </P>
          <P>
            The current problem analysis is as follows: Masita is currently
            unable to sell products to B2C customers because all integrations
            are disabled on the current website (masita.com, which is often
            inaccessible), and it is not possible to order products.
            Additionally, this website, having not been updated for over a year,
            often experiences downtime and has low speed. Since the Magento
            store is currently unusable, and Masita does want to sell products
            again, we need to explore how a new B2C store can be realised.
          </P>
          <H3>Design challenge</H3>
          <Blockquote>
            Design a new e-commerce platform that enables Masita, a leading
            Dutch sportswear brand, to sell products to individual customers
            (B2C) in a seamless and reliable manner, considering past
            integration issues and system failures.
          </Blockquote>
          <H3>Assignment summary</H3>
          <P>
            The assignment is to research which technologies can and should be
            used for the project, create user-friendly designs that are
            optimised for UX and conversion, validate these designs with user
            tests, then develop these validated designs into a working prototype
            by using the earlier researched technologies.
          </P>
        </div>
        <div id="process" className="scroll-mt-32">
          <H2>Process</H2>
          <P>
            To start off, I wrote a <A href="/project-plan">project plan</A>{" "}
            documenting the project&apos;s goals, problem statement, scope and
            time plan. In ths project plan, I also defined the main research
            question and which sub questions are needed to support it:
          </P>
          <H3>Main research question</H3>
          <List>
            <li>
              How can a new, user-friendly B2C webshop be built and validated by
              research?
            </li>
          </List>
          <H3>Sub questions</H3>
          <List>
            <li>
              Which problems did the old magento-based B2C-webshop face and how
              can I avoid them?
            </li>
            <li>
              Which technologies can and should be used to develop the new
              webshop?
            </li>
            <li>How can Masita’s technical requirements be integrated?</li>
            <li>
              How can I make sure the new webshop is user-friendly and optimised
              for conversion?
            </li>
          </List>
          <P>
            With these questions in mind, I started conducting research on which
            technologies could be used.
          </P>
        </div>
      </div>
    </>
  );
  return (
    <Container>
      <FadeUp>
        <Content />
        <div
          id="burden-of-proof"
          className="mt-16 xl:mt-32 mb-8 xl:mb-16 scroll-mt-32"
        >
          <H1 className="mb-4">Burden of proof</H1>
          <Lead>A collection of everything I did during this internship.</Lead>
        </div>
        <BurdenOfProof />
      </FadeUp>
    </Container>
  );
}
