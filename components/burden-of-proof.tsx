import * as React from "react";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";

import Posts from "@/components/posts";

export default async function BurdenOfProof() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: postsQuery,
  });

  return <Posts posts={posts} />;
}
