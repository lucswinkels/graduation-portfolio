"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  Book,
  ExternalLink,
  Github,
  Home,
  Menu,
  Palette,
  Table,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import Container from "./container";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";
import { SearchFormComponent } from "./search-form";
import { Button } from "./ui/button";

export function Navbar() {
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);

  const navItems = [
    {
      title: "Reading guide",
      href: "/reading-guide",
    },
    {
      title: "Burden of proof",
      href: "/burden-of-proof",
    },
  ];

  const closeMobileMenu = () => {
    setMobileMenuVisibility(false);
  };

  const handleMenuVisibility = () => {
    setMobileMenuVisibility(!mobileMenuVisibility);
  };

  const MobileMenuToggle = () => {
    return (
      <Button
        variant="outline"
        size="icon"
        className="lg:hidden flex"
        onClick={handleMenuVisibility}
      >
        {mobileMenuVisibility ? (
          <X className="size-5" />
        ) : (
          <Menu className="size-5" />
        )}
      </Button>
    );
  };

  const MobileMenu = () => {
    const IconStyles = "mr-4 size-6 text-foreground";
    const MobileMenuLinkItems = [
      {
        icon: <Home className={IconStyles} />,
        title: "Home",
        href: "/",
      },
      {
        icon: <Book className={IconStyles} />,
        title: "Reading guide",
        href: "/reading-guide",
      },
      {
        icon: <Table className={IconStyles} />,
        title: "Burden of proof",
        href: "/burden-of-proof",
      },
      {
        icon: <Github className={IconStyles} />,
        title: "Source code (GitHub)",
        href: "https://github.com/lucswinkels/graduation-portfolio",
        external: true,
      },
    ];

    const MobileMenuItemStyles =
      "h-16 w-full flex items-center border-b text-sm";

    return (
      <div
        className={`lg:hidden px-6 md:px-[15%] font-medium flex-col fixed top-16 left-0 z-40 w-full bg-background h-[calc(100vh-4rem)] ${
          mobileMenuVisibility ? "flex" : "hidden"
        } `}
      >
        {MobileMenuLinkItems.map((item, i) => (
          <Link
            href={item.href}
            key={i}
            className={MobileMenuItemStyles}
            onClick={handleMenuVisibility}
          >
            {item.icon}
            {item.title}
            {item.external && <ExternalLink className="size-4 ml-2" />}
          </Link>
        ))}
        <div className={cn("justify-between", MobileMenuItemStyles)}>
          <div className="flex">
            <Palette className={IconStyles} />
            <p>Theme</p>
          </div>
          <ModeToggle variant="outline" />
        </div>
        <div className="mt-8">
          <SearchFormComponent fullWidthTrigger />
        </div>
      </div>
    );
  };

  return (
    <>
      <MobileMenu />
      <Container className="border-b fixed top-0 left-0 z-50 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="w-full items-center justify-between flex h-16">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="flex">
                <Logo onClick={closeMobileMenu} />
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
              <div className="lg:flex hidden items-center ml-8 space-x-8">
                {navItems.map((item, i) => (
                  <NavigationMenuItem key={i}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className="transition-colors text-foreground/60 hover:text-foreground/80 text-sm">
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </div>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <MobileMenuToggle />
            <NavigationMenuList className="lg:flex hidden">
              <NavigationMenuItem>
                <Button variant="ghost" size="icon">
                  <a
                    href="https://github.com/lucswinkels/graduation-portfolio"
                    target="_blank"
                  >
                    <Github className="size-[1.2rem]" />
                    <span className="sr-only">GitHub</span>
                  </a>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ModeToggle variant="ghost" />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <SearchFormComponent iconOnly />
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </Container>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
