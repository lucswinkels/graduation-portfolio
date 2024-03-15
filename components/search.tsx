import * as React from "react";
import { Search } from "lucide-react";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  iconOnly?: boolean;
}

export function SearchComponent(props: Props) {
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

function SearchForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="query">Search query</Label>
        <Input id="query" placeholder="What do you want to search for?" />
      </div>
      <Button type="submit">Search</Button>
    </form>
  );
}
