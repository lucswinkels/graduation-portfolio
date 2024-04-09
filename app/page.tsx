import * as React from "react";
import { Metadata } from "next";
import { projectPostsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";

import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import Posts from "@/components/posts";
import { A } from "@/components/typography/a";
import { H1 } from "@/components/typography/h1";
import { Lead } from "@/components/typography/lead";
import { P } from "@/components/typography/p";

export const metadata: Metadata = {
  title: "Home // Portfolio | Luc Swinkels",
};

export default async function Home() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: projectPostsQuery,
    params: { projectSlug: "masita" },
  });
  const Content = () => (
    <div className="mb-16 xl:mb-24 flex justify-between items-center">
      <div>
        <H1 className="w-full md:w-[500px] lg:w-[650px] mb-2">
          Hey! I&apos;m Luc.
        </H1>
        <Lead className="w-full md:w-[500px] lg:w-[650px] mb-8 lg:mb-12">
          Front-end developer and UX/UI designer.
        </Lead>
        <P className="w-full md:w-[500px] lg:w-[650px] text-lg text-balance">
          This is my graduation portfolio that documents the process of my
          graduation internship at Moonly Software, for my IT & Media Design
          study at the Fontys University of Applied Sciences. <br /> <br />
          Click on one of the project items below or read the full process of
          this internship <A href="/reading-guide">here</A>.
        </P>
      </div>
    </div>
  );
  return (
    <>
      <Container>
        <FadeUp>
          <Content />
          <Posts posts={posts} />
        </FadeUp>
      </Container>
    </>
  );
}
