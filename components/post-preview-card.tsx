"use client";

import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";

import { FADE_UP_ANIMATION_VARIANTS } from "@/lib/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CardPattern } from "./card-pattern";
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
          className="group-hover:-translate-y-2 transition-transform relative bg-background"
        >
          <CardPattern />
          <div className="flex flex-row items-center p-6 justify-between relative z-20">
            <div>
              <span className="text-muted-foreground">{props.project}</span>
              <span className="text-muted-foreground mx-2">/</span>
              <span className="font-semibold">{props.title}</span>
            </div>
            <span className="opacity-0 group-hover:opacity-100 font-semibold text-sm hidden xl:flex items-center transition-opacity">
              View <MoveRight className="size-4 ml-2" />
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
    // <Link href={`/${props.href}`} className="group">
    //   <motion.div
    //     key={props.slug}
    //     initial="hidden"
    //     animate="show"
    //     exit="hidden"
    //     variants={FADE_UP_ANIMATION_VARIANTS}
    //   >
    //     <Card
    //       {...props}
    //       className="group-hover:-translate-y-2 transition-transform bg-muted-foreground/5"
    //     >
    //       <CardHeader>
    //         <Image
    //           src={builder.image(props.image).width(1024).height(1024).url()}
    //           className="border-b"
    //           width={1024}
    //           height={1024}
    //           alt={props.image.alt}
    //           quality={100}
    //         />
    //       </CardHeader>
    //       <CardContent className="relative pt-1.5">
    //         <div className="absolute -top-9 z-10 left-6 flex gap-2 mb-6 flex-wrap">
    //           {props.categories.map((category: string, i: number) => (
    //             <Badge key={i} variant="card" className="capitalize">
    //               {category}
    //             </Badge>
    //           ))}
    //         </div>
    //         <CardTitle className="mb-2">{props.title}</CardTitle>
    //         <CardDescription className="line-clamp-2">
    //           {props.description}
    //         </CardDescription>
    //       </CardContent>
    //     </Card>
    //   </motion.div>
    // </Link>
  );
}
