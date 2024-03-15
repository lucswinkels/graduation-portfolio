"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface Props {
  iconOnly?: boolean;
}

const formSchema = z.object({
  searchQuery: z.string().min(3, {
    message: "Search query must be at least 3 characters.",
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
            <Button variant="ghost" size="icon">
              <Search className="size-4" />
            </Button>
          ) : (
            <Button variant="outline">
              Search <Search className="size-4 ml-2" />
            </Button>
          )}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Search</DialogTitle>
            <DialogDescription>
              Search for any project, category or word.
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
          <Button variant="outline">
            Search <Search className="size-4 ml-2" />
          </Button>
        )}
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Search</DrawerTitle>
          <DrawerDescription>
            Search for any project, category or word.
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
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery: "",
    },
  });
  const router = useRouter();
  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`/search?query=${encodeURIComponent(values.searchQuery)}`);
    // TODO: Close drawer/dialog
    // TODO: Refresh page
  }
  React.useEffect(() => {}, [form]);
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
              <FormLabel>Search query</FormLabel>
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
