"use client";

import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { getImageDimensions } from "@sanity/asset-utils";
import { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityAsset } from "@sanity/image-url/lib/types/types";
import { ExternalLink, LucideAlertTriangle } from "lucide-react";

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
import { CategoryIcon } from "./category-icon";
import { CodeBlock } from "./code-block";
import Container from "./container";
import { GradientCategoryBackground } from "./gradient-category-background";
import NextPreviousPost from "./next-previous-post";
import { Blockquote } from "./typography/blockquote";
import { H1 } from "./typography/h1";
import { H2 } from "./typography/h2";
import { H3 } from "./typography/h3";
import { H4 } from "./typography/h4";
import { H5 } from "./typography/h5";
import { Lead } from "./typography/lead";
import { List } from "./typography/list";
import { MutedText } from "./typography/muted-text";
import { P } from "./typography/p";
import { Prose } from "./typography/prose";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import Fancybox from "./ui/fancybox";

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
    const assetUrl = builder.image(value).width(width).height(height).url();
    return (
      <div className="my-8 flex justify-center flex-col w-max max-w-full">
        <a data-fancybox="gallery" href={assetUrl}>
          <Image
            src={assetUrl}
            alt={value.alt}
            width={width}
            height={height}
            loading="lazy"
            className="rounded-lg border mb-2 shadow-lg max-h-[80dvh] max-w-full w-max h-auto"
          />
        </a>
        <MutedText className="mx-auto my-0 italic">{value.alt}</MutedText>
      </div>
    );
  };

  const VideoComponent = ({ value }: SanityAsset) => {
    const asset = value.asset._ref; // Returns "type-assetId-fileType"
    const assetParts = asset.split("-");
    const assetId = assetParts[1];
    const assetFileType = assetParts[2];
    const assetUrl = `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${assetId}.${assetFileType}`;
    return (
      <div className="my-8 flex justify-center flex-col w-max max-w-full">
        <a data-fancybox="gallery" href={assetUrl}>
          <video
            src={assetUrl}
            className="w-max h-auto max-h-[80dvh] max-w-full rounded-lg border shadow-lg mb-2"
            autoPlay
            loop
            controls
            playsInline
            muted
          ></video>
        </a>
        <MutedText className="mx-auto my-0 italic">{value.alt}</MutedText>
      </div>
    );
  };

  const CodeComponent = ({ value }: SanityAsset) => {
    return (
      <div className="my-8 w-full lg:w-max max-w-full">
        <CodeBlock
          language={value.language}
          value={value.code}
          filename={value.filename}
          highlightedLines={value.highlightedLines}
        />
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

  const accordionTriggerStyles =
    "p-4 text-base font-semibold border-b border-border/0 data-[state=open]:border-border bg-accent-subtle hover:bg-accent hover:no-underline";
  const accordionContentStyles = "p-4 bg-background";
  const AccordionTextComponent = ({ value }: SanityAsset) => {
    return (
      <Accordion type="single" collapsible className="my-8 max-w-[75ch]">
        <Card>
          <AccordionItem
            value="list-accordion"
            className="[&>h3]:m-0 border-b-0"
          >
            <AccordionTrigger className={accordionTriggerStyles}>
              {value.title}
            </AccordionTrigger>
            <AccordionContent className={accordionContentStyles}>
              {value.content.map((item: SanityAsset) => (
                <P key={item._id} className="text-base">
                  {item.children[0].text}
                </P>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Card>
      </Accordion>
    );
  };

  const AccordionBulletListComponent = ({ value }: SanityAsset) => {
    return (
      <Accordion type="single" collapsible className="my-8 max-w-[75ch]">
        <Card>
          <AccordionItem
            value="list-accordion"
            className="[&>h3]:m-0 border-b-0"
          >
            <AccordionTrigger className={accordionTriggerStyles}>
              {value.title}
            </AccordionTrigger>
            <AccordionContent className={accordionContentStyles}>
              <List className="my-0">
                {value.content.map((item: SanityAsset) => (
                  <li key={item._id} className="text-base">
                    {item.children[0].text}
                  </li>
                ))}
              </List>
            </AccordionContent>
          </AccordionItem>
        </Card>
      </Accordion>
    );
  };

  // TODO: fix accordion component to be more flexible allowing all types of content as PortableText
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

  return post.description && post.project && post.title && post.categories ? (
    <FadeUp>
      <Container className="border-b bg-accent-subtle py-8 lg:py-32 flex items-center justify-center relative -top-16 lg:-top-32">
        <GradientCategoryBackground
          category={post.categories[0].toLowerCase()}
          className="flex items-center justify-center w-max h-max border rounded-lg p-4 lg:p-16 shadow-lg relative"
        >
          <CategoryIcon
            category={post.categories[0].toLowerCase()}
            className="lg:w-20 lg:h-20 h-10 w-10 text-white opacity-20"
          />
          <Badge className="absolute -bottom-[10px]" variant="card">
            {post.categories[0]}
          </Badge>
        </GradientCategoryBackground>
      </Container>
      <Container className="border-b pb-16 relative lg:-top-16">
        {post.draft && (
          <div className="text-foreground dark:text-amber-300 mb-8 lg:mb-16 rounded-lg border p-4 flex space-x-2 w-full items-center bg-amber-300/20 border-amber-300">
            <LucideAlertTriangle className="size-6 mr-2 text-amber-300" />
            This post is still being updated and may have placeholder content.
          </div>
        )}
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/project/${slugify(post.project)}`}>
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
        <GradientCategoryBackground
          category={post.categories[0].toLowerCase()}
          className="w-full border rounded-lg p-4 lg:p-8 mt-8 lg:mt-16"
        >
          {post.categories || post.researchMethods || post.researchQuestion ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8">
              <Card>
                <CardContent className="p-4 space-y-2">
                  <H5>Categories</H5>
                  <div className="flex flex-row gap-2 flex-wrap">
                    {post.categories ? (
                      post.categories.map((category: string) => (
                        <Badge key={category}>
                          <CategoryIcon
                            category={category.toLowerCase()}
                            className="w-3 h-3 mr-1"
                          />
                          {category}
                        </Badge>
                      ))
                    ) : (
                      <P>There is no categories for this deliverable.</P>
                    )}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 space-y-2">
                  <H5>Research methods</H5>
                  <div className="flex flex-row gap-2 flex-wrap">
                    {post.researchMethods ? (
                      post.researchMethods.map((method: { title: string }) => (
                        <Badge key={method.title}>{method.title}</Badge>
                      ))
                    ) : (
                      <P>There are no research methods for this deliverable.</P>
                    )}
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 space-y-2">
                  <H5>Research question</H5>
                  {post.researchQuestion ? (
                    <P>{post.researchQuestion}</P>
                  ) : (
                    <P>There is no research question for this deliverable.</P>
                  )}
                </CardContent>
              </Card>
            </div>
          ) : null}
        </GradientCategoryBackground>
      </Container>
      <Container className="pt-16 relative lg:-top-16">
        <Prose className="first:[&>div>h2]:mt-0">
          <Fancybox>
            <PortableText value={post.body} components={components} />
          </Fancybox>
        </Prose>
        <NextPreviousPost previousPost={previousPost} nextPost={nextPost} />
      </Container>
    </FadeUp>
  ) : (
    <NotFoundPage />
  );
}
