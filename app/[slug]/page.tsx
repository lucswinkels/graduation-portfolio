import { client } from "@/sanity/lib/client";
import {
  firstPostQuery,
  lastPostQuery,
  nextPostQuery,
  postPathsQuery,
  postQuery,
  previousPostQuery,
} from "@/sanity/lib/queries";
import { sanityFetch } from "@/sanity/lib/sanityFetch";
import { SanityDocument } from "@sanity/client";

import Post from "@/components/post";

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

  return <Post post={post} nextPost={nextPost} previousPost={previousPost} />;
}
