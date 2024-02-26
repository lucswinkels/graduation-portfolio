"use client";

import Link from "next/link";
import { SanityDocument } from "next-sanity";

import { H3 } from "./typography/h3";
import { P } from "./typography/p";
import { Card } from "./ui/card";

export default function NextPreviousPost({
  currentPost,
}: {
  currentPost: SanityDocument;
}) {
  console.log(currentPost);
  return (
    <Card className="mt-16 xl:mt-32">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <Link
          href=""
          className="group lg:basis-1/2 basis-full align-end text-start lg:text-end w-full p-8 hover:bg-accent border-b lg:border-b-0 lg:border-r transition-colors"
        >
          <div className="flex flex-col gap-1 lg:gap-2 transition-transform group-hover:-translate-x-2">
            <P>Previous</P>
            <H3>Portfolio UI Design</H3>
          </div>
        </Link>
        <Link
          href=""
          className="group lg:basis-1/2 basis-full align-start w-full p-8 hover:bg-accent transition-colors"
        >
          <div className="flex flex-col gap-1 lg:gap-2 transition-transform group-hover:translate-x-2">
            <P>Next</P>
            <H3>Portfolio UI Design</H3>
          </div>
        </Link>
      </div>
    </Card>
  );
}
