import * as React from "react";
import { headers } from "next/headers";
import { postsMatchingSearchQuery } from "@/sanity/lib/queries";
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
  // TODO: fix search showing previous query results (e.g. search for masita, then search for masita2, it will show masita results after sending the masita2 query)
  const results = await sanityFetch<SanityDocument[]>({
    query: postsMatchingSearchQuery,
    params: { query: searchQuery },
  });
  const filteredResults = results.filter(
    (result) =>
      result.title !== null &&
      result.slug.current !== null &&
      result.description !== null &&
      result.project !== null &&
      result.categories !== null &&
      result.mainImage !== null
  );
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
          <P className="mt-4 text-red-500">
            Please note: you have to submit your query twice, I am working on
            fixing this bug.
          </P>
        </div>
        {searchQuery &&
          searchQuery.trim() !== "" &&
          filteredResults.length === 0 && <P>No results found.</P>}
        {searchQuery &&
          searchQuery.trim() !== "" &&
          filteredResults.length > 0 && <Posts posts={filteredResults} />}
      </FadeUp>
    </Container>
  );
}
