"use client";

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { MoveRight } from "lucide-react";
import { SanityDocument } from "next-sanity";

import { CategoryIcon } from "./category-icon";
import { GradientCategoryBackground } from "./gradient-category-background";
import { Logo } from "./logo";
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
            className="bg-background hover:bg-accent-subtle lg:basis-1/2 basis-full w-full p-8 border-b lg:border-b-0 lg:border-r transition-colors group relative"
          >
            <span className="-translate-x-4 group-hover:translate-x-0 absolute top-4 right-4 size-12 border bg-background opacity-0 group-hover:opacity-100 font-semibold text-sm items-center justify-center rounded-full flex transition-all">
              <MoveRight className="size-4" />
            </span>
            <div>
              {/* <Image
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
              /> */}
              <GradientCategoryBackground
                category={previousPost.categories[0].toLowerCase()}
                className="border flex items-center justify-center shadow-lg rounded-lg mb-8 w-32 h-32 lg:w-48 lg:h-48"
              >
                {/* <Logo className="w-10 h-10 opacity-20 text-white" /> */}
                <CategoryIcon
                  category={previousPost.categories[0].toLowerCase()}
                  className="w-12 h-12 lg:w-16 lg:h-16 text-white opacity-20 group-hover:scale-110 transition-transform"
                />
              </GradientCategoryBackground>
              <div className="flex flex-col gap-1 lg:gap-1 transition-transform">
                <P className="text-muted-foreground">Previous post</P>
                <H3 className="line-clamp-1">{previousPost.title}</H3>
              </div>
            </div>
          </Link>
          <Link
            href={`/${nextPost.slug.current}`}
            className="bg-background hover:bg-accent-subtle lg:basis-1/2 basis-full w-full p-8 transition-colors group relative"
          >
            <span className="-translate-x-4 group-hover:translate-x-0 absolute top-4 right-4 size-12 border bg-background opacity-0 group-hover:opacity-100 font-semibold text-sm items-center justify-center rounded-full flex transition-all">
              <MoveRight className="size-4" />
            </span>
            <div>
              {/* <Image
                src={builder
                  .image(nextPost.mainImage)
                  .width(1000)
                  .height(1000)
                  .url()}
                className="border shadow-lg rounded-lg mb-8"
                width={200}
                height={200}
                quality={100}
                alt={nextPost.mainImage.alt}
              /> */}
              <GradientCategoryBackground
                category={nextPost.categories[0].toLowerCase()}
                className="border flex items-center justify-center shadow-lg rounded-lg mb-8 w-32 h-32 lg:w-48 lg:h-48"
              >
                {/* <Logo className="w-10 h-10 opacity-20 text-white" /> */}
                <CategoryIcon
                  category={nextPost.categories[0].toLowerCase()}
                  className="w-12 h-12 lg:w-16 lg:h-16 text-white opacity-20 group-hover:scale-110 transition-transform"
                />
              </GradientCategoryBackground>
              <div className="flex flex-col gap-1 lg:gap-1 transition-transform">
                <P className="text-muted-foreground">Next post</P>
                <H3 className="line-clamp-1">{nextPost.title}</H3>
              </div>
            </div>
          </Link>
        </div>
      </Card>
    </div>
  );
}
