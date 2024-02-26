"use client";

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

import { CardPattern } from "./card-pattern";

const builder = imageUrlBuilder(client);
export function ProjectPreviewCard({ ...props }) {
  return (
    <Link href={`/projects/${props.href}`} className="group">
      <motion.div
        key={props.slug}
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        <Card
          {...props}
          className="group-hover:-translate-y-2 transition-transform relative bg-muted-foreground/5"
        >
          <CardPattern />
          <div className="flex flex-row items-center p-6 justify-between relative z-20">
            <div>
              <span className="text-muted-foreground">{props.year}</span>
              <span className="text-muted-foreground mx-2">/</span>
              <span className="font-semibold">{props.title}</span>
            </div>
            <span className="opacity-0 group-hover:opacity-100 font-semibold text-sm hidden 2xl:flex items-center transition-opacity">
              View project <MoveRight className="size-4 ml-2" />
            </span>
          </div>
          <CardContent className="pt-2 pl-8 pb-0 pr-0 relative z-20">
            <Image
              src={builder.image(props.image).width(1920).height(1080).url()}
              className="border-l border-t shadow-xl rounded-tl-xl"
              width={1920}
              height={1080}
              quality={100}
              alt={props.image.alt}
            />
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
