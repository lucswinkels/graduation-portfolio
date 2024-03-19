import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoveRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { getSearchQueryFromURL } from "@/app/search/page";

const formSchema = z.object({
  searchQuery: z.string().min(2, {
    message: "Search query must be at least 2 characters.",
  }),
});

export function SearchForm({ className }: React.ComponentProps<"form">) {
  const searchQuery = getSearchQueryFromURL();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery: searchQuery ?? "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    // setSearchQuery(values.searchQuery);
    router.push(`/search?query=${encodeURIComponent(values.searchQuery)}`);
    // window.location.href = `/search?query=${encodeURIComponent(
    //   values.searchQuery
    // )}`;
  }
  // React.useEffect(() => {
  //   setSearchQuery(searchQuery);
  // }, [searchQuery]);
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
