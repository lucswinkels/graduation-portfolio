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

function getSearchQuery(): string {
  const headersList = headers();
  const fullUrl = headersList.get("referer") || "";
  const urlParams = new URLSearchParams(fullUrl.split("?")[1]);
  return urlParams.get("query") || "";
}

export async function generateMetadata() {
  const searchQuery = getSearchQuery();
  return {
    title: searchQuery ? `Showing results for: ${searchQuery}` : "Search",
  };
}

export default async function SearchPage() {
  const searchQuery = getSearchQuery();
  // TODO: Fix search showing previous query results (e.g. search for masita, then search for masita2, it will show masita results after sending the masita2 query)
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
              <BreadcrumbPage>Search</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <div className="mb-8 xl:mb-16">
          <H1 className="mb-4">Search</H1>
          {searchQuery && searchQuery.trim() !== "" && (
            <Lead> Showing search results for: {searchQuery}</Lead>
          )}
          <div className="max-w-full lg:max-w-sm mt-8">
            <SearchForm />
          </div>
        </div>
        {searchQuery && searchQuery.trim() !== "" && results.length === 0 && (
          <P>No results found.</P>
        )}
        {searchQuery && searchQuery.trim() !== "" && results.length > 0 && (
          <Posts posts={results} />
        )}
      </FadeUp>
    </Container>
  );
}
