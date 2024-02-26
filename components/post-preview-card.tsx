"use client";

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { motion } from "framer-motion";

import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "./ui/badge";

const builder = imageUrlBuilder(client);
export function PostPreviewCard({ ...props }) {
  return (
    <Link href={`/${props.href}`} className="group">
      <motion.div
        key={props.slug}
        initial="hidden"
        animate="show"
        exit="hidden"
        variants={FADE_UP_ANIMATION_VARIANTS}
      >
        <Card
          {...props}
          className="group-hover:-translate-y-2 transition-transform bg-muted-foreground/5"
        >
          <CardHeader>
            <Image
              src={builder.image(props.image).width(1024).height(1024).url()}
              className="border-b"
              width={1024}
              height={1024}
              alt={props.image.alt}
              quality={100}
            />
          </CardHeader>
          <CardContent className="relative pt-1.5">
            <div className="absolute -top-9 z-10 left-6 flex gap-2 mb-6 flex-wrap">
              {props.categories.map((category: string, i: number) => (
                <Badge key={i} variant="card" className="capitalize">
                  {category}
                </Badge>
              ))}
            </div>
            <CardTitle className="mb-2">{props.title}</CardTitle>
            <CardDescription className="line-clamp-2">
              {props.description}
            </CardDescription>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  );
}
