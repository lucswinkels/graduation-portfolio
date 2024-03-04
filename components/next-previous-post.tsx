"use client";

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityDocument } from "next-sanity";

import { CardPattern } from "./card-pattern";
import { H3 } from "./typography/h3";
import { H4 } from "./typography/h4";
import { P } from "./typography/p";
import { Card } from "./ui/card";

const builder = imageUrlBuilder(client);

export default function NextPreviousPost({
  nextPost,
  previousPost,
}: {
  nextPost: SanityDocument;
  previousPost: SanityDocument;
}) {
  return (
    <div className="mt-32">
      <H4 className="mb-4">Want to see more?</H4>
      <Card>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <Link
            href={`/${previousPost.slug.current}`}
            className="bg-background hover:bg-accent lg:basis-1/2 basis-full w-full p-8 border-b lg:border-b-0 lg:border-r transition-colors relative overflow-hidden"
          >
            {/* <CardPattern /> */}
            <div className="relative z-20">
              <Image
                src={builder
                  .image(previousPost.mainImage)
                  .width(1000)
                  .height(1000)
                  .url()}
                className="border shadow-lg rounded-lg mb-8"
                width={200}
                height={200}
                quality={100}
                alt={previousPost.mainImage.alt}
              />
              <div className="flex flex-col gap-1 lg:gap-2 transition-transform">
                <P className="text-muted-foreground">Previous</P>
                <H3 className="line-clamp-1">{previousPost.title}</H3>
              </div>
            </div>
          </Link>
          <Link
            href={`/${nextPost.slug.current}`}
            className="lg:basis-1/2 basis-full w-full p-8 transition-colors relative overflow-hidden bg-background hover:bg-accent"
          >
            {/* <CardPattern /> */}
            <div className="relative z-20">
              <Image
                src={builder
                  .image(nextPost.mainImage)
                  .width(1000)
                  .height(1000)
                  .url()}
                className="border shadow-lg rounded-xl mb-8"
                width={200}
                height={200}
                quality={100}
                alt={nextPost.mainImage.alt}
              />
              <div className="flex flex-col gap-1 lg:gap-2 transition-transform">
                <P className="text-muted-foreground">Next</P>
                <H3 className="line-clamp-1">{nextPost.title}</H3>
              </div>
            </div>
          </Link>
        </div>
      </Card>
    </div>
  );
}
