import { draftMode } from "next/headers";
import { client } from "@/sanity/lib/client";
import {
  firstPostQuery,
  lastPostQuery,
  nextPostQuery,
  postPathsQuery,
  postQuery,
  previousPostQuery,
} from "@/sanity/lib/queries";
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
  let previousPost = await sanityFetch<SanityDocument>({
    query: previousPostQuery,
    params: { currentPostPublishedAt: post.publishedAt },
  });
  if (!previousPost) {
    previousPost = await sanityFetch<SanityDocument>({ query: lastPostQuery });
  }
  let nextPost = await sanityFetch<SanityDocument>({
    query: nextPostQuery,
    params: { currentPostPublishedAt: post.publishedAt },
  });
  if (!nextPost) {
    nextPost = await sanityFetch<SanityDocument>({ query: firstPostQuery });
  }
  const isDraftMode = draftMode().isEnabled;
  if (isDraftMode && token) {
    return (
      <PreviewProvider token={token}>
        <PreviewPost post={post} />
      </PreviewProvider>
    );
  }

  return <Post post={post} nextPost={nextPost} previousPost={previousPost} />;
}
