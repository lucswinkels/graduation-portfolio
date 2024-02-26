"use client";

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { ChevronRight } from "lucide-react";

import { slugify } from "@/lib/utils";
import NotFoundPage from "@/app/not-found";

import FadeUp from "./animation/fade-up";
import Container from "./container";
import { Blockquote } from "./typography/blockquote";
import { H1 } from "./typography/h1";
import { H2 } from "./typography/h2";
import { H3 } from "./typography/h3";
import { H4 } from "./typography/h4";
import { Lead } from "./typography/lead";
import { MutedText } from "./typography/muted-text";
import { P } from "./typography/p";
import { SmallText } from "./typography/small-text";
import { Badge } from "./ui/badge";

const builder = imageUrlBuilder(client);

export default function Post({ post }: { post: SanityDocument }) {
  //TODO: Fix typing
  const ImageComponent = ({ value }: any) => {
    const { width, height } = getImageDimensions(value);
    return (
      <div className="my-16">
        <Image
          src={builder.image(value).width(width).height(height).url()}
          alt={value.alt}
          width={width}
          height={height}
          loading="lazy"
          className="rounded-lg border mb-2"
        />
        <MutedText className="m-0 italic">{value.alt}</MutedText>
      </div>
    );
  };

  const components = {
    types: {
      image: ImageComponent,
    },
    block: {
      normal: ({ children }: any) => <P>{children}</P>,
      blockquote: ({ children }: any) => <Blockquote>{children}</Blockquote>,
      h1: ({ children }: any) => <H1>{children}</H1>,
      h2: ({ children }: any) => <H2>{children}</H2>,
      h3: ({ children }: any) => <H3>{children}</H3>,
      h4: ({ children }: any) => <H4>{children}</H4>,
    },
  };

  return post ? (
    <FadeUp>
      <Container>
        <div className="md:flex hidden items-center mb-8 text-muted-foreground">
          <SmallText>
            <Link href="/">Home</Link>
          </SmallText>
          <ChevronRight className="mx-1 size-4" />
          <SmallText>
            <Link href={`/projects/${slugify(post.project)}`}>
              {post.project}
            </Link>
          </SmallText>
          <ChevronRight className="mx-1 size-4" />
          <SmallText className="text-foreground">{post.title}</SmallText>
        </div>
        <H1 className="mb-4">{post.title}</H1>
        <Lead>{post.description}</Lead>
        {post.categories || post.researchMethods ? (
          <div className="flex gap-2 xl:gap-4 flex-wrap mt-8">
            {post.categories &&
              post.categories.map((category: any) => (
                <Badge variant="secondary" key={category}>
                  {category}
                </Badge>
              ))}
            {post.researchMethods &&
              post.researchMethods.map((method: any) => (
                <Badge variant="secondary" key={method}>
                  {method.title}
                </Badge>
              ))}
          </div>
        ) : null}
        <Image
          src={builder.image(post.mainImage).width(1024).height(1024).url()}
          className="rounded-lg my-16"
          quality={100}
          width={512}
          height={512}
          alt={post.mainImage.alt}
          priority
        />
        <div className="prose dark:prose-invert max-w-full">
          <PortableText value={post.body} components={components} />
        </div>
      </Container>
    </FadeUp>
  ) : (
    <NotFoundPage />
  );
}
