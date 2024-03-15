import * as React from "react";
import { Metadata } from "next";
import { headers } from "next/headers";
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
import Posts from "@/components/posts";
import { SearchForm } from "@/components/search-form";
import { H1 } from "@/components/typography/h1";
import { Lead } from "@/components/typography/lead";
import { P } from "@/components/typography/p";

export const metadata: Metadata = {
  title: "Search // Portfolio | Luc Swinkels",
};

export default async function SearchPage() {
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";
  const urlParams = new URLSearchParams(fullUrl.split("?")[1]);
  const searchQuery = urlParams.get("query") || "";
  // TODO: Add other content for results instead of just project posts based on project (also add posts based on post slug)
  const results = await sanityFetch<SanityDocument[]>({
    query: projectPostsQuery,
    params: { projectSlug: searchQuery },
  });
  return (
    <Container>
      <FadeUp>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Burden of proof</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mb-8 xl:mb-16">
          <H1 className="mb-4">Search</H1>
          {searchQuery ? (
            <Lead> Showing search results for: {searchQuery}</Lead>
          ) : (
            <div className="w-full max-w-lg">
              <SearchForm />
            </div>
          )}
        </div>
        {searchQuery && results.length === 0 ? (
          <P>No results found.</P>
        ) : (
          <Posts posts={results} />
        )}
      </FadeUp>
    </Container>
  );
}
