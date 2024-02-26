import * as React from "react";
import { draftMode } from "next/headers";
import { postsQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "next-sanity";

import Posts from "@/components/posts";
import PreviewPosts from "@/components/preview-posts";
import PreviewProvider from "@/components/preview-provider";

export default async function BurdenOfProof() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: postsQuery,
  });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPosts posts={posts} />
      </PreviewProvider>
    );
  }
  return <Posts posts={posts} />;
}
