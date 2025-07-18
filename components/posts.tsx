"use client";

import * as React from "react";
import { SanityDocument } from "@sanity/client";
import { AnimatePresence, motion } from "framer-motion";
import { RotateCcw } from "lucide-react";

import { categories } from "@/lib/categories";
import { learningOutcomes } from "@/lib/learningOutcomes";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { PostPreviewCard } from "./post-preview-card";
import { P } from "./typography/p";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface LearningOutcome {
  slug: {
    current: string;
  };
}

export default function Posts({
  posts = [],
  className,
}: {
  posts: SanityDocument[];
  className?: string;
}) {
  const [selectedLearningOutcome, setSelectedLearningOutcome] = React.useState(
    "all-learning-outcomes"
  );
  const [selectedCategory, setSelectedCategory] =
    React.useState("all-categories");

  const filteredPosts = posts.filter((post) => {
    return (
      (selectedLearningOutcome === "all-learning-outcomes" ||
        post?.learningOutcomes?.some(
          (outcome: LearningOutcome) =>
            outcome.slug.current === selectedLearningOutcome
        )) &&
      (selectedCategory === "all-categories" ||
        post?.categories[0]?.toLowerCase() === selectedCategory)
    );
  });

  const handleResetFilters = () => {
    setSelectedLearningOutcome("all-learning-outcomes");
    setSelectedCategory("all-categories");
  };

  return (
    <>
      <div className="flex gap-4 flex-wrap">
        <Select
          value={selectedLearningOutcome}
          onValueChange={setSelectedLearningOutcome}
        >
          <SelectTrigger className="min-w-[200px] w-max">
            <SelectValue placeholder="All learning outcomes" />
            <span className="sr-only">Select learning outcome</span>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all-learning-outcomes">
                All learning outcomes
              </SelectItem>
              {learningOutcomes.map((learningOutcome) => (
                <SelectItem
                  key={learningOutcome.slug}
                  value={learningOutcome.slug}
                >
                  {learningOutcome.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="min-w-[200px] w-max">
            <SelectValue placeholder="All categories" />
            <span className="sr-only">Select category</span>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all-categories">All categories</SelectItem>
              {categories.map((category) => (
                <SelectItem key={category.slug} value={category.slug}>
                  {category.title}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        {(selectedLearningOutcome !== "all-learning-outcomes" ||
          selectedCategory !== "all-categories") && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleResetFilters}
                >
                  <RotateCcw className="size-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Reset</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      {/* Grid with colspan */}
      {/* <div
        className={cn(
          "grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-4 mt-8 [&>*:nth-child(1)]:lg:col-span-2 [&>*:nth-child(1)]:lg:row-span-2 [&>*:nth-child(4)]:lg:col-span-2 [&>*:nth-child(4)]:lg:row-span-2 [&>*:nth-child(8)]:lg:col-span-2",
          className
        )}
      > */}
      <div
        className={cn(
          "grid 2xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4 mt-8",
          className
        )}
      >
        <AnimatePresence>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostPreviewCard
                key={post._id}
                title={post.title}
                slug={post.slug.current}
                image={post.mainImage}
                description={post.description}
                categories={post.categories}
                href={post.slug.current}
                project={post.project}
              />
            ))
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <P className="transition-all">No posts found.</P>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
