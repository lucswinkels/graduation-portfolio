import * as React from "react";
import Link from "next/link";
import { projectPostsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import { H1 } from "@/components/typography/h1";

import Posts from "./posts";
import { Lead } from "./typography/lead";
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

  const Content = () => (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{project.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
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

  return (
    <Container>
      <FadeUp>
        <Content />
        <Posts posts={posts} />
      </FadeUp>
    </Container>
  );
}
