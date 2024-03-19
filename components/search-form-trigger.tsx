"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { z } from "zod";

import { useMediaQuery } from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { SearchForm } from "./search-form";

interface Props {
  iconOnly?: boolean;
  fullWidthTrigger?: boolean;
}

export function SearchFormTrigger(props: Props) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {props.iconOnly ? (
            <Button variant="ghost" size="icon">
              <Search className="size-4" />
            </Button>
          ) : (
            <Button
              variant="outline"
              className={`${
                props.fullWidthTrigger && "w-full flex justify-between"
              }`}
            >
              Search <Search className="size-4 ml-2" />
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
            <DialogDescription>
              Results will show posts where your search query matches the title,
              project, or category.
            </DialogDescription>
          </DialogHeader>
          <SearchForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        {props.iconOnly ? (
          <Button variant="ghost" size="icon">
            <Search className="size-4" />
          </Button>
        ) : (
          <Button
            variant="outline"
            className={`${
              props.fullWidthTrigger && "w-full flex justify-between"
            }`}
          >
            Search <Search className="size-4 ml-2" />
          </Button>
        )}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Search</DrawerTitle>
          <DrawerDescription>
            Results will show posts where your search query matches the title,
            project, or category.
          </DrawerDescription>
        </DrawerHeader>
        <SearchForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
