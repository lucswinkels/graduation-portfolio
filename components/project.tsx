import * as React from "react";
import { draftMode } from "next/headers";
import Link from "next/link";
import { projectPostsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { ChevronRight, ExternalLink } from "lucide-react";
import { SanityDocument } from "next-sanity";

import { slugify } from "@/lib/utils";
import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import PreviewProvider from "@/components/preview-provider";
import { H1 } from "@/components/typography/h1";

import Posts from "./posts";
import PreviewPosts from "./preview-posts";
import { Lead } from "./typography/lead";
import { SmallText } from "./typography/small-text";
import { Button } from "./ui/button";

export default async function Project({
  project,
}: {
  project: SanityDocument;
}) {
  const posts = await sanityFetch<SanityDocument[]>({
    query: projectPostsQuery,
    params: { projectSlug: project.slug.current },
  });
  const isDraftMode = draftMode().isEnabled;

  const Content = () => (
    <>
      <div className="md:flex hidden items-center mb-8 text-muted-foreground">
        <SmallText>
          <Link href="/">Home</Link>
        </SmallText>
        <ChevronRight className="mx-1 h-4 w-4" />
        <SmallText className="text-foreground">{project.title}</SmallText>
      </div>
      <div className="lg:flex justify-between mb-8 xl:mb-16">
        <div>
          <H1 className="mb-4">{project.title}</H1>
          <Lead>{project.description}</Lead>
        </div>
        <Button asChild className="mt-4 lg:mt-0">
          <Link href="/reading-guide">Reading Guide</Link>
        </Button>
      </div>
    </>
  );

  if (isDraftMode && token) {
    return (
      <Container>
        <FadeUp>
          <Content />
          <PreviewProvider token={token}>
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
        <Posts posts={posts} />
      </FadeUp>
    </Container>
  );
}
