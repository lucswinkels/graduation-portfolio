import * as React from "react";
import { Metadata } from "next";
import { headers } from "next/headers";
import { useSearchParams } from "next/navigation";
import { projectPostsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";

import FadeUp from "@/components/animation/fade-up";
import Container from "@/components/container";
import Posts from "@/components/posts";
import { A } from "@/components/typography/a";
import { H3 } from "@/components/typography/h3";
import { P } from "@/components/typography/p";

export const metadata: Metadata = {
  title: "Search // Portfolio | Luc Swinkels",
};

export default async function SearchComponent() {
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";
  const urlParams = new URLSearchParams(fullUrl.split("?")[1]);
  const searchQuery = urlParams.get("query") || "";
  // TODO: Add other content for results instead of just project posts based on project (also add posts based on post slug)
  const results = await sanityFetch<SanityDocument[]>({
    query: projectPostsQuery,
    params: { projectSlug: searchQuery },
  });
  const Content = () => (
    <div className="mb-16 xl:mb-24">
      <H3 className="w-full md:w-[500px] lg:w-[650px] mb-8">Search</H3>
      <P className="w-full md:w-[500px] lg:w-[650px] text-lg text-balance">
        Showing search results for: {searchQuery}
      </P>
    </div>
  );
  return (
    <Container>
      <FadeUp>
        <Content />
        {results.length === 0 ? (
          <P>No results found.</P>
        ) : (
          <Posts posts={results} />
        )}
      </FadeUp>
    </Container>
  );
}
