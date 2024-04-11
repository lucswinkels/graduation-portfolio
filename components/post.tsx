"use client";

import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { ExternalLink } from "lucide-react";

import { slugify } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import NotFoundPage from "@/app/not-found";

import FadeUp from "./animation/fade-up";
import { CodeBlock } from "./code-block";
import Container from "./container";
import NextPreviousPost from "./next-previous-post";
import { Blockquote } from "./typography/blockquote";
import { H1 } from "./typography/h1";
import { H2 } from "./typography/h2";
import { H3 } from "./typography/h3";
import { H4 } from "./typography/h4";
import { Lead } from "./typography/lead";
import { List } from "./typography/list";
import { MutedText } from "./typography/muted-text";
import { P } from "./typography/p";
import { Prose } from "./typography/prose";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

const builder = imageUrlBuilder(client);

export default function Post({
  post,
  previousPost,
  nextPost,
}: {
  post: SanityDocument;
  previousPost: SanityDocument;
  nextPost: SanityDocument;
}) {
  const ImageComponent = ({ value }: SanityAsset) => {
    const { width, height } = getImageDimensions(value);
    return (
      <div className="my-8 flex justify-center flex-col w-max max-w-full">
        <Image
          src={builder.image(value).width(width).height(height).url()}
          alt={value.alt}
          width={width}
          height={height}
          loading="lazy"
          className="rounded-lg border mb-2 shadow-lg max-h-[80dvh] max-w-full w-max h-auto"
        />
        <MutedText className="mx-auto my-0 italic">{value.alt}</MutedText>
      </div>
    );
  };

  const VideoComponent = ({ value }: SanityAsset) => {
    const asset = value.asset._ref; // Returns "type-assetId-fileType"
    const assetParts = asset.split("-");
    const assetId = assetParts[1];
    const assetFileType = assetParts[2];
    return (
      <div className="my-8 flex justify-center flex-col w-max max-w-full">
        <video
          className="w-max h-auto max-h-[80dvh] max-w-full rounded-lg border shadow-lg mb-2"
          autoPlay
          loop
          controls
          playsInline
          muted
          src={`https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${assetId}.${assetFileType}`}
        ></video>
        <MutedText className="mx-auto my-0 italic">{value.alt}</MutedText>
      </div>
    );
  };

  const CodeComponent = ({ value }: SanityAsset) => {
    return (
      <div className="my-8 w-max max-w-full">
        <CodeBlock language={value.language} value={value.code} />
      </div>
    );
  };

  const ButtonComponent = ({ value }: SanityAsset) => {
    return (
      <Button asChild className="no-underline">
        <a href={value.href} target="_blank">
          {value.text} <ExternalLink className="ml-2 size-4" />
        </a>
      </Button>
    );
  };

  const AccordionTextComponent = ({ value }: SanityAsset) => {
    return (
      <Accordion type="single" collapsible className="my-8 max-w-[75ch]">
        <AccordionItem value="text-accordion">
          <AccordionTrigger className="text-base py-2 font-semibold">
            {value.title}
          </AccordionTrigger>
          <AccordionContent>
            {value.content.map((item: SanityAsset, i: number) => (
              <P key={i} className="text-base">
                {item.children[0].text}
              </P>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  };

  const AccordionBulletListComponent = ({ value }: SanityAsset) => {
    return (
      <Accordion type="single" collapsible className="my-8 max-w-[75ch]">
        <AccordionItem value="list-accordion">
          <AccordionTrigger className="text-base py-2 font-semibold">
            {value.title}
          </AccordionTrigger>
          <AccordionContent>
            <List>
              {value.content.map((item: SanityAsset, i: number) => (
                <li key={i} className="text-base">
                  {item.children[0].text}
                </li>
              ))}
            </List>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  };

  const components = {
    types: {
      image: ImageComponent,
      video: VideoComponent,
      code: CodeComponent,
      button: ButtonComponent,
      accordionText: AccordionTextComponent,
      accordionBulletList: AccordionBulletListComponent,
    },
    block: {
      normal: ({ children }: SanityAsset) => <P>{children}</P>,
      blockquote: ({ children }: SanityAsset) => (
        <Blockquote>{children}</Blockquote>
      ),
      h1: ({ children }: SanityAsset) => <H1>{children}</H1>,
      h2: ({ children }: SanityAsset) => <H2>{children}</H2>,
      h3: ({ children }: SanityAsset) => <H3>{children}</H3>,
      h4: ({ children }: SanityAsset) => <H4>{children}</H4>,
    },
  };

  return post ? (
    <FadeUp>
      <Container>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/projects/${slugify(post.project)}`}>
                {post.project}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{post.title}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <H1 className="mb-4">{post.title}</H1>
        <Lead>{post.description}</Lead>
        {post.categories || post.researchMethods ? (
          <div className="flex gap-2 xl:gap-4 flex-wrap mt-8">
            {post.categories &&
              post.categories.map((category: string) => (
                <Badge variant="secondary" key={category}>
                  {category}
                </Badge>
              ))}
            {post.researchMethods &&
              post.researchMethods.map((method: { title: string }) => (
                <Badge variant="secondary" key={method.title}>
                  {method.title}
                </Badge>
              ))}
          </div>
        ) : null}
        <Image
          src={builder.image(post.mainImage).width(1024).height(1024).url()}
          className="rounded-lg my-16 shadow-lg"
          quality={100}
          width={512}
          height={512}
          alt={post.mainImage.alt}
          priority
        />
        <Prose>
          <PortableText value={post.body} components={components} />
        </Prose>
        <NextPreviousPost previousPost={previousPost} nextPost={nextPost} />
      </Container>
    </FadeUp>
  ) : (
    <NotFoundPage />
  );
}
