import * as React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
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
import { Prose } from "@/components/typography/prose";

export const metadata: Metadata = {
  title: "Reading guide",
};

export default function ReadingGuide() {
  const Content = () => (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Reading guide</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="lg:flex justify-between mb-8 xl:mb-16">
        <div>
          <H1 className="mb-4">Reading guide</H1>
          <Lead>A summary of this portfolio.</Lead>
        </div>
        <Button asChild className="mt-4 lg:mt-0">
          <a href="/files/reading-guide.pdf" target="_blank">
            PDF version <ExternalLink className="ml-2 size-4" />
          </a>
        </Button>
      </div>
      <Prose>
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
            halt. These technical problems alongside a lack of priority from the
            owner due to upcoming ownership changes, meant the webshop kept
            declining.
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
          <H3>Full assignment</H3>
          <P>
            Moonly and Masita have decided to collaborate on a new B2B and B2C
            store so that Masita can resume selling their products. Since it was
            important for Masita to start selling to businesses first, a B2B
            store is currently in development. In the future, a B2C store will
            also need to be developed.
          </P>
          <P>
            For the B2C store, Masita has provided several requirements. There
            must be the ability to sell printed shirts, customers must be able
            to manage orders, and it should be possible to sell products through
            external stores. The B2C store should have similar styling to the
            already in development B2B store, as it is based on Masita’s
            branding. The lay-out, however, can be changed freely to cater
            towards individual customers instead of businesses.
          </P>
          <P>
            Since Moonly wants to avoid the same pitfalls and problems
            encountered with the Magento store when developing this new store,
            we want to first conduct research into the best solution for
            developing this new store. This research should not only consider
            Masita&apos;s various requirements but also focus on how the B2C
            shop can encourage customers to start ordering from Masita again.
            While the B2B shop primarily focuses on functionality for retailers,
            the B2C shop needs to be optimised for UX and conversion to help
            Masita regain its position in the market.
          </P>
          <P>
            Additionally, the results of this research are intended to be
            translated into a proof of concept/prototype of a B2C store so that
            Moonly can develop a new B2C shop with a validated foundation.
          </P>
          <P>
            To validate the designs and/or prototypes, user tests should be
            set-up that can be done in-house, or through personal connections
            and social media channels as the target audience is not very niche.
            In this case, the target audience is anyone who wants to buy clothes
            for working out. While there is access to user databases with
            previous Masita customers, this project does not yet include global
            testing for the prototype.
          </P>
          <P>
            The research will be conducted with Moonly as the client and has
            been initiated by Moonly in preparation for developing the B2C shop.
            Masita is not the client in this case (though they may be a
            stakeholder).
          </P>
        </div>
        <div id="process" className="scroll-mt-32">
          <H2>Process</H2>
          <P>
            To start off, I wrote a <A href="/project-plan">project plan</A>{" "}
            documenting the project&apos;s goals, problem statement, scope and
            time plan. In this project plan, I also defined the main research
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
              Which features are needed for the B2C-webshop and with which
              priority should they be implemented?
            </li>
            <li>
              Which platforms can and should be used to develop the new webshop?
            </li>
            <li>How can Masita&apos;s technical requirements be integrated?</li>
            <li>
              How can I make sure the new webshop is user-friendly and optimised
              for conversion?
            </li>
          </List>
          <P>
            To further identify the requirements of the project, I made a list
            of{" "}
            <A href="/requirements-prioritisation">
              requirements and user stories
            </A>{" "}
            ordered by priority using the requirements prioritisation method.
          </P>
          <P>
            Throughout the project, I worked with{" "}
            <A href="/agile-methodology">agile methodology</A> by planning
            sprints and holding sprint demo&apos;s and retrospectives.
          </P>
          <P>
            To find out where it went wrong for the previous Masita B2C store,
            and to document possible pitfalls for the project, I conducted a{" "}
            <A href="/previous-issues-research">previous issues research</A>{" "}
            where I interviewed developers who worked on the previous store.
          </P>
          <P>
            To figure out which platform would be best suited to build the new
            store on, I conducted{" "}
            <A href="/e-commerce-platforms-research">
              e-commerce platforms research
            </A>
            , where I looked at possible e-commerce solutions and their pros and
            cons.
          </P>
          <P>
            I also researched how I could implement Masita&apos;s pre-existing
            technical requirements for integrations such as external sales
            platform integrations in this{" "}
            <A href="/technical-requirement-integration-research">
              technical requirement integration research
            </A>
            .
          </P>
          <P>
            To figure out how I could design the new store to be user friendly
            with validated designs, I conducted{" "}
            <A href="/ux-and-conversion-optimization-research">
              UX & conversion optimization research
            </A>
            , where I analysed similar online stores and their designs, and then
            based my designs on these findings.
          </P>
          <P>
            These designs were then validated with{" "}
            <A href="/user-tests">user tests</A>.
          </P>
          <P>
            With my designs done, I had a good feeling of how the new store would
            look and what would be required to build it. To figure out how I was
            going to develop the front-end of the new store and translate my
            designs into code, I conducted{" "}
            <A href="/frontend-frameworks-research">
              front-end frameworks research
            </A>
            , where I analysed different front-end frameworks and their pros and
            cons.
          </P>
          <P>
            After picking a suitable front-end framework, I looked at different
            UI libraries to see if and which UI libraries could be used to
            develop the front-end in this{" "}
            <A href="/ui-libraries-research">UI libraries research</A>.
          </P>
          <P>
            After validating my designs with research and user tests, and having
            picked all the relevant technologies, I started developing. I
            documented the entire development process here:{" "}
            <A href="/store-development">store development</A>
          </P>
        </div>
      </Prose>
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
