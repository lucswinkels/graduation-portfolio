"use client";

import * as React from "react";
import { useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoveRight, Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Button, ButtonProps } from "@/components/ui/button";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props extends ButtonProps {
  iconOnly?: boolean;
  variant?: ButtonProps["variant"];
  fullWidthTrigger?: boolean;
}

const formSchema = z.object({
  searchQuery: z.string().min(2, {
    message: "Search query must be at least 2 characters.",
  }),
});

export function SearchFormComponent(props: Props) {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          {props.iconOnly ? (
            <Button variant={props.variant} size="icon">
              <Search className="size-4" />
              <span className="sr-only">Search</span>
            </Button>
          ) : (
            <Button
              variant={props.variant}
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
          <Button variant={props.variant} size="icon">
            <Search className="size-4" />
            <span className="sr-only">Search</span>
          </Button>
        ) : (
          <Button
            variant={props.variant}
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

export function SearchForm({ className }: React.ComponentProps<"form">) {
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = React.useState(
    searchParams.get("query") ?? ""
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // Comment/Uncomment to populate form input with query from url
    // TODO: Remove this when search double submit bug is fixed
    defaultValues: {
      searchQuery: searchParams.get("query") ?? "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    setSearchQuery(values.searchQuery);
    window.location.href = `/search?query=${encodeURIComponent(
      values.searchQuery
    )}`;
  }
  React.useEffect(() => {
    setSearchQuery(searchQuery);
  }, [searchQuery]);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid items-start gap-4", className)}
      >
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="What do you want to search for?"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">
          Search <MoveRight className="ml-2 size-4" />
        </Button>
      </form>
    </Form>
  );
}
