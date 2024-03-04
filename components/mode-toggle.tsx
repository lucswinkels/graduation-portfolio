"use client";

import * as React from "react";
import { Check, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Button, ButtonProps } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle(props: ButtonProps) {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={props.variant} size="icon">
          <Sun className="size-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute size-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={cn(
            `bg-background flex items-center justify-between ${
              theme === "light" && "bg-accent"
            }`
          )}
        >
          Light {theme === "light" && <Check className="size-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={cn(
            `bg-background flex items-center justify-between ${
              theme === "dark" && "bg-accent"
            }`
          )}
        >
          Dark {theme === "dark" && <Check className="size-4" />}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={cn(
            `bg-background flex items-center justify-between ${
              theme === "system" && "bg-accent"
            }`
          )}
        >
          System {theme === "system" && <Check className="size-4" />}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
