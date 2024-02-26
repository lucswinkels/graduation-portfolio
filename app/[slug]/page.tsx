import { Metadata } from "next";
import { draftMode } from "next/headers";
import { client } from "@/sanity/lib/client";
import { postPathsQuery, postQuery } from "@/sanity/lib/queries";
import { sanityFetch, token } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "@sanity/client";

import Post from "@/components/post";
import PreviewPost from "@/components/preview-post";
import PreviewProvider from "@/components/preview-provider";

export async function generateMetadata({ params, searchParams }: any) {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });
  return {
    title: post?.title ? post.title : "Page not found",
  };
}

export async function generateStaticParams() {
  const posts = await client.fetch(postPathsQuery);
  return posts;
}

export default async function Page({ params }: { params: any }) {
  const post = await sanityFetch<SanityDocument>({ query: postQuery, params });
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPost post={post} />
      </PreviewProvider>
    );
  }

  return <Post post={post} />;
}
