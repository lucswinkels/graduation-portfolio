"use client";

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/constants";
import { Card, CardContent } from "@/components/ui/card";

import { CategoryIcon } from "./category-icon";
import { GradientCategoryBackground } from "./gradient-category-background";
import { Logo } from "./logo";
import { Badge } from "./ui/badge";

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
              <GradientCategoryBackground
                className="min-h-40 p-4"
                category={props.categories[0].toLowerCase()}
              >
                <div className="flex flex-row gap-2 flex-wrap absolute">
                  {props.categories.map((category: string, i: number) => (
                    <Badge key={i} variant="card">
                      <CategoryIcon
                        category={category.toLowerCase()}
                        className="w-3 h-3 mr-1"
                      />
                      {category}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-center w-full h-full">
                  {/* <Logo className="w-10 h-10 text-white opacity-20" noLink /> */}
                  <CategoryIcon
                    category={props.categories[0].toLowerCase()}
                    className="w-12 h-12 text-white opacity-20 group-hover:scale-110 transition-transform"
                  />
                </div>
              </GradientCategoryBackground>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
