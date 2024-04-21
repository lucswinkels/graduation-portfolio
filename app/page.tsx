import * as React from "react";
import { Metadata } from "next";
import { postsQuery } from "@/sanity/lib/queries";
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
    query: postsQuery,
  });
  const Content = () => (
    <div className="flex justify-between items-center">
      <div className="text-balance">
        <H1 className="w-full md:w-[500px] lg:w-[650px] mb-2">
          Hey! I&apos;m Luc.
        </H1>
        <Lead className="w-full md:w-[500px] lg:w-[650px] mb-8 lg:mb-12">
          Front-end developer and UX/UI designer.
        </Lead>
        <P className="w-full md:w-[500px] lg:w-[650px] text-lg text-foreground/70 dark:text-foreground/90">
          This is my graduation portfolio that documents the process of my
          graduation internship at Moonly Software, for my IT & Media Design
          study at the Fontys University of Applied Sciences. <br /> <br />
          Click on one of the project items below or read the full process of
          this internship in my <A href="/reading-guide">reading guide</A>.
        </P>
      </div>
    </div>
  );
  return (
    <>
      <FadeUp>
        <Container className="lg:border-b pb-16">
          <Content />
        </Container>
        <Container className="lg:pt-16">
          <Posts posts={posts} />
        </Container>
      </FadeUp>
    </>
  );
}
