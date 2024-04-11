"use client";

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { motion } from "framer-motion";
import { AirVent, MoveRight } from "lucide-react";

import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

import { Logo } from "./logo";

const builder = imageUrlBuilder(client);

export function PostPreviewCard({ ...props }) {
  return (
    <Link href={`/${props.href}`} className="group post-preview flex">
      <motion.div
        key={props.slug}
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="w-full"
      >
        <Card
          {...props}
          className="group-hover:-translate-y-1 relative transition-all bg-background hover:bg-accent-subtle h-full flex flex-col"
        >
          <div className="flex flex-row items-center p-6 justify-between">
            <div className="line-clamp-2">
              <span className="text-muted-foreground">{props.project}</span>
              <span className="text-muted-foreground mx-2">/</span>
              <span className="font-semibold">{props.title}</span>
            </div>
            <span className="-translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 font-semibold text-sm hidden xl:flex items-center transition-all">
              <MoveRight className="size-4 ml-2" />
            </span>
          </div>
          <CardContent className="pt-2 pl-8 pb-0 pr-0 h-full flex">
            <div className="overflow-hidden relative border-l border-t shadow-lg rounded-tl-xl h-full flex w-full">
              {/* <Image
                src={builder.image(props.image).width(1920).height(1080).url()}
                className="group-hover:scale-105 transition-transform object-cover object-center"
                width={1920}
                height={1080}
                quality={100}
                alt={props.image.alt}
              /> */}
              {/* TODO: Add image? Change colors based on post? */}
              <div className="flex justify-center items-center min-h-40 w-full h-full p-8 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                <div className="text-center flex flex-col items-center justify-center space-y-4">
                  <Logo className="size-8 text-white" noLink />
                  <span className="text-white text-sm font-medium line-clamp-1">
                    {props.title}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
