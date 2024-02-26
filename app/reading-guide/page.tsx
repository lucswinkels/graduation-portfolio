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
            <Link href="#assignments">Assignments</Link>
            <List>
              <li>
                <Link href="#assignment--individual-project">
                  Individual project
                </Link>
              </li>
              <li>
                <Link href="#assignment--group-project">Group project</Link>
              </li>
              <li>
                <Link href="#assignment--international-project">
                  International project
                </Link>
              </li>
            </List>
          </li>
          <li>
            <Link href="#process">Process</Link>
            <List>
              <li>
                <Link href="#process--individual-project">
                  Individual project
                </Link>
              </li>
              <li>
                <Link href="#process--group-project">Group project</Link>
              </li>
              <li>
                <Link href="#process--international-project">
                  International project
                </Link>
              </li>
              <li>
                <Link href="#process--side-project">
                  Side project (pub quiz)
                </Link>
              </li>
            </List>
          </li>
          <li>
            <Link href="#burden-of-proof">Burden of proof</Link>
          </li>
        </List>
        <div id="assignments" className="scroll-mt-32">
          <H2>The assignments</H2>
        </div>
        <div id="assignment--individual-project" className="scroll-mt-32">
          <H3>Individual project</H3>
          <P>
            The assignment for the individual project was to build a modern
            website or web app that would serve as a portfolio for all your
            deliverables for the semester. As we were free in how we approached
            the project, I based the assignment on the following research
            questions:
          </P>
          <Blockquote>
            How can I create a digital portfolio that showcases my work in a
            visually attractive way?
          </Blockquote>
          <List>
            <li>How can I make sure the portfolio is technologically solid?</li>
            <li>
              How can I make sure the portfolio is easily maintainable when
              adding new content?
            </li>
            <li>
              How can I make sure the portfolio is easy to navigate for users?
            </li>
          </List>
          <P>
            With these research questions in mind, the goal was to research and
            design a prototype, test this prototype, then develop it into a live
            high-fidelity website. A more detailed assignment description can be
            found in the{" "}
            <Link href="/portfolio-project-plan">project plan</Link>.
          </P>
        </div>
        <div id="assignment--group-project" className="scroll-mt-32">
          <H3>Group project</H3>
          <P>
            The assignment for this project was to aid the Grip On Sound team by
            answering the following research question:
          </P>
          <Blockquote>
            How can physical exercise teachers in primary school get more
            insight into the sound levels and stress during the class?
          </Blockquote>
          <P>
            To achieve this, we have to research a concept, and turn this
            concept into visualizations by designing a UI prototype that is
            validated by user tests. Our main focus will be on designing a UI
            for a mobile app. A more detailed assignment description can be
            found in the{" "}
            <Link href="/grip-on-sound-project-plan">project plan</Link>.
          </P>
        </div>
        <div id="assignment--international-project" className="scroll-mt-32">
          <H3>International project</H3>
          <P>
            The assignment for this project was to attend the 2023 Dutch Design
            Week while collaborating with Canadian export students that came to
            visit our school for the week. With the inspiration we gained from
            the DDW, we had to think of a concept within a specific area, in
            this case we chose “product design”, and build a prototype around
            this concept and make a video about it.
          </P>
          <P>
            The main goal of this week was not to create the prototype, but
            moreso explore everything the DDW has to offer and collaborate with
            the Canadian students and meet new people.
          </P>
        </div>
        <div id="process" className="scroll-mt-32">
          <H2>Process</H2>
        </div>
        <div id="process--individual-project" className="scroll-mt-32">
          <H3>Individual project</H3>
          <P>
            At the start of this project, I wrote a{" "}
            <Link href="/portfolio-project-plan">project plan</Link> to document
            my research questions, form a planning, and have a proper structure
            for the project.
          </P>
          <P>
            To answer the sub-question “How can I make sure the portfolio is
            technologically solid?”, I conducted library research (in the form
            of trend analysis and literature study) on{" "}
            <Link href="/web-technologies-research">
              modern web technologies
            </Link>{" "}
            to figure out which technologies I should use to develop the
            portfolio. I felt like a trend analysis is a great way to research
            technologies like these, because the world of technology is always
            changing. Literature study was used to gather insight in which
            technologies are available.
          </P>
          <P>
            To answer the sub-question “How can I make sure the portfolio is
            easily maintainable when adding new content?”, I conducted library
            research (in the form of an expert interview and literature study)
            on{" "}
            <Link href="/portfolio-content-research">
              different ways to write content for a portfolio
            </Link>
            . The literature study method was used to figure out which
            technologies are available to use, and I chose to conduct an expert
            interview because I knew an expert with first-hand experience with
            all the technologies I found during the literature study research.
          </P>
          <P>
            With the technological side of the research done, I still had to
            answer a very important research question: “How can I make sure the
            portfolio is easy to navigate for users?”, which I answered by
            designing wireframes and a UI prototype, and testing it using lab
            and showroom research methods such as A/B testing, peer reviews and
            usability testing. I chose these research methods because it allowed
            me to gather direct feedback from my target audience.
          </P>
          <P>
            The full process of designing and testing the wireframes/UI
            prototype can be found <Link href="/portfolio-ui-design">here</Link>
            .
          </P>
          <P>
            After validating my designs with these tests, I was able to develop
            my prototype into a live website, as documented{" "}
            <Link href="/portfolio-development">here</Link>. To help maintain a
            proper structure, I designed a{" "}
            <Link href="/portfolio-software-diagram">software diagram</Link> for
            this portfolio. Throughout this project I communicated with
            stakeholders and peers on how to adapt and improve the portfolio,
            and reflected on what went well or could&apos;ve gone better, which
            is documented in this{" "}
            <Link href="/individual-project-reflection">reflection</Link>.
          </P>
        </div>
        <div id="process--group-project" className="scroll-mt-32">
          <H3>Group project</H3>
          <P>
            Before the project started, I designed a{" "}
            <Link href="/grip-on-sound-poster">poster</Link> to raise awareness
            for the project, as well as visualizing it.
          </P>
          <P>
            We started off the project by creating a{" "}
            <Link href="/grip-on-sound-project-plan">project plan</Link> where
            we documented the issues and how we were going to tackle them. My
            responsibility for this project plan was to document the project
            assignment (Context, goal, scope, deliverables, products). As a
            group, we brainstormed about which research (sub) questions we
            wanted to tackle.
          </P>
          <P>
            With our project plan formed, we had to do research on specific sub
            questions to form a better concept before moving on to the designs.
          </P>
          <P>
            To maintain a proper structure during the project, we decided to use
            the agile working method with SCRUM. We rotated the scrum master
            role every sprint and held retrospectives during this process. I
            documented my experience as scrum master during sprint 4{" "}
            <Link href="/scrum-sprint-retrospectives">here</Link>.
          </P>
          <P>
            My research question was “Are there specific in-app features that
            can help teachers to organize PE classes with behavioural changes to
            decrease noise levels?”. To answer this research question, I
            conducted{" "}
            <Link href="/in-app-features-research">
              library research on in-app features
            </Link>
            , using the literature study CMD method.
          </P>
          <P>
            Because we wanted to visualize our ideas, we decided to each start
            designing our own vision in UI wireframes, so that we could then
            combine our favorite assets from each design into a final version. I
            did this in the form of some{" "}
            <Link href="/grip-on-sound-ui-design">
              high-fidelity wireframes/concept designs
            </Link>
            .
          </P>
          <P>
            To answer the question: “How can we sketch a corporate identity for
            the project that can be used as a design asset?”, I created a{" "}
            <Link href="/grip-on-sound-branding">brand guide</Link> to visualize
            the brand for our project and to help maintain a style structure
            within our app designs.
          </P>
          <P>
            Because we wanted to visualize our ideas, we decided to each start
            designing our own vision in UI wireframes, so that we could then
            combine our favorite assets from each design into a final version. I
            did this in the form of some highfidelity wireframes/concept
            designs.
          </P>
          <P>
            Since we were unsure on if we should go for a dark or light theme, I
            conducted{" "}
            <Link href="/light-dark-mode-research">
              research on light vs dark themes
            </Link>{" "}
            and which one we should create the primary design with.
          </P>
          <P>
            During this project, we had 2 moments for{" "}
            <Link href="/peer-feedback">peer reviews</Link> to assess how we
            worked in a group, which helped me reflect on how I was able to
            collaborate in a group context.
          </P>
          <P>
            To visualize how the architecture of the application would look, I
            designed a{" "}
            <Link href="/grip-on-sound-software-diagram">software diagram</Link>
            .
          </P>
          <P>
            These designs were then tested and validated with{" "}
            <Link href="/grip-on-sound-usability-testing">usability tests</Link>
            .
          </P>
          <P>
            After the project concluded, I wrote a{" "}
            <Link href="/group-project-reflection">reflection</Link> on what
            went well and what could&apos;ve gone better. We combined our
            efforts into an{" "}
            <Link href="/grip-on-sound-advisory-report">advisory report</Link>,
            where I contributed to explaining my personal research during the
            project.
          </P>
        </div>
        <div id="process--international-project" className="scroll-mt-32">
          <H3>International project</H3>
          <P>
            The first day we met with our Canadian student, Helena, and explored
            the DDW together. We saw tons of inspirational concepts here.
          </P>
          <P>
            Since we chose product design as a category, we were mainly
            interested in products. Because we saw a lot of sustainable
            practices, we decided to create a product based on sustainable
            material, ultimately deciding on a shopping bag made of orange peel
            fibers called “bag2nature”.
          </P>
          <P>
            We brainstormed the concept as a group, and my part in building the
            prototype was helping research how orange fibers work based on the
            research question “How can we use sustainable materials to create a
            bag that is compostable?”
          </P>
          <P>
            I documented the process of how we thought of a concept and built a
            prototype further <Link href="/ddw-collaboration">here</Link>.
          </P>
          <P>
            Afterwards, I wrote a{" "}
            <Link href="/international-project-reflection">reflection</Link> on
            what went well and what could’ve gone better during this week.
          </P>
        </div>
        <div id="process--side-project" className="scroll-mt-32">
          <H3>Side project (pub quiz)</H3>
          <P>
            To further prove the software, I worked on a side-project with
            Bardt, which was a full-stack pub quiz app built with vanilla
            JavaScript to enhance my back-end skills and learn about class
            components in JavaScript.
          </P>
          <P>
            The full process is described{" "}
            <Link href="/pub-quiz-development">here</Link>.
          </P>
        </div>
        <div id="burden-of-proof" className="scroll-mt-32">
          <H2>Burden of proof</H2>
          <div className="mt-4 xl:mt-8 not-prose">
            <BurdenOfProof />
          </div>
        </div>
      </div>
    </>
  );
  return (
    <Container>
      <FadeUp>
        <Content />
      </FadeUp>
    </Container>
  );
}
