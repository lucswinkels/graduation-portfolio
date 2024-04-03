"use client";

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

const builder = imageUrlBuilder(client);

export function PostPreviewCard({ ...props }) {
  return (
    <Link href={`/${props.href}`} className="group post-preview">
      <motion.div
        key={props.slug}
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        <Card
          {...props}
          className="group-hover:-translate-y-1 transition-all relative bg-background hover:bg-accent-subtle"
        >
          <div className="flex flex-row items-center p-6 justify-between">
            <div>
              <span className="text-muted-foreground">{props.project}</span>
              <span className="text-muted-foreground mx-2">/</span>
              <span className="font-semibold">{props.title}</span>
            </div>
            <span className="opacity-0 group-hover:opacity-100 font-semibold text-sm hidden xl:flex items-center transition-opacity">
              <MoveRight className="size-4 ml-2" />
            </span>
          </div>
          <CardContent className="pt-2 pl-8 pb-0 pr-0">
            <div className="overflow-hidden relative border-l border-t shadow-lg rounded-tl-xl">
              <Image
                src={builder.image(props.image).width(960).height(540).url()}
                className="group-hover:scale-105 transition-transform"
                width={960}
                height={540}
                quality={100}
                alt={props.image.alt}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
