import * as React from "react";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { projectsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";

import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import PreviewProjects from "@/components/preview-projects";
import PreviewProvider from "@/components/preview-provider";
import Projects from "@/components/projects";
import { A } from "@/components/typography/a";
import { H3 } from "@/components/typography/h3";
import { P } from "@/components/typography/p";

export const metadata: Metadata = {
  title: "Home // Portfolio S6",
};

export default async function Home() {
  const projects = await sanityFetch<SanityDocument[]>({
    query: projectsQuery,
  });
  const isDraftMode = draftMode().isEnabled;
  const Content = () => (
    <div className="mb-16 xl:mb-24">
      {/* <H3 className="w-full md:w-[500px] mb-8">
        I&apos;m Luc, a front-end developer based in The Netherlands.
      </H3>
      <P className="w-full md:w-[500px] text-lg">
        I focus on designing and building modern and detailed websites and apps.
        This is my portfolio for semester 6 of my IT & Media Design study at the
        Fontys University of Applied Sciences.
      </P> */}
      <H3 className="w-full md:w-[500px] mb-8">Welcome to my portfolio.</H3>
      <P className="w-full md:w-[500px] text-lg">
        This is my portfolio for semester 6 of my IT & Media Design study at the
        Fontys University of Applied Sciences. <br /> <br />
        Click on one of the projects below or read the full process of this
        semester <A href="/reading-guide">here</A>.
      </P>
    </div>
  );
  if (isDraftMode && token) {
    return (
      <Container>
        <FadeUp>
          <Content />
          <PreviewProvider token={token}>
            <PreviewProjects projects={projects} />
          </PreviewProvider>
        </FadeUp>
      </Container>
    );
  }
  return (
    <Container>
      <FadeUp>
        <Content />
        <Projects projects={projects} />
      </FadeUp>
    </Container>
  );
}
