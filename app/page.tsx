import * as React from "react";
import { Metadata } from "next";
import { draftMode } from "next/headers";
import { projectPostsQuery, projectsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";

import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import Posts from "@/components/posts";
import PreviewPosts from "@/components/preview-posts";
import PreviewProjects from "@/components/preview-projects";
import PreviewProvider from "@/components/preview-provider";
import Projects from "@/components/projects";
import { A } from "@/components/typography/a";
import { H3 } from "@/components/typography/h3";
import { P } from "@/components/typography/p";

export const metadata: Metadata = {
  title: "Home // Portfolio | Luc Swinkels",
};

export default async function Home() {
  // const projects = await sanityFetch<SanityDocument[]>({
  //   query: projectsQuery,
  // });
  const posts = await sanityFetch<SanityDocument[]>({
    query: projectPostsQuery,
    params: { projectSlug: "masita" },
  });

  const isDraftMode = draftMode().isEnabled;
  const Content = () => (
    <div className="mb-16 xl:mb-24">
      <H3 className="w-full md:w-[500px] lg:w-[650px] mb-8">
        Welcome to my portfolio.
      </H3>
      <P className="w-full md:w-[500px] lg:w-[650px] text-lg text-balance">
        This is my graduation portfolio that documents the process of my
        graduation internship at Moonly Software, for my IT & Media Design study
        at the Fontys University of Applied Sciences. <br /> <br />
        Click on one of the project items below or read the full process of this
        internship <A href="/reading-guide">here</A>.
      </P>
    </div>
  );
  if (isDraftMode && token) {
    return (
      <Container>
        <FadeUp>
          <Content />
          <PreviewProvider token={token}>
            {/* <PreviewProjects projects={projects} /> */}
            <PreviewPosts posts={posts} />
          </PreviewProvider>
        </FadeUp>
      </Container>
    );
  }
  return (
    <Container>
      <FadeUp>
        <Content />
        {/* <Projects projects={projects} /> */}
        <Posts posts={posts} />
      </FadeUp>
    </Container>
  );
}
