"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { Book, Github, Grid3X3, Home, Menu, User, X } from "lucide-react";

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
import { Card } from "./ui/card";

export function Navbar() {
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);
  const iconStyles = "size-6 md:size-8";
  const mainMenuItems = [
    {
      icon: <Home className={iconStyles} />,
      title: "Home",
      href: "/",
    },
    {
      icon: <User className={iconStyles} />,
      title: "About me",
      href: "/about-me",
    },
    {
      icon: <Book className={iconStyles} />,
      title: "Reading guide",
      href: "/reading-guide",
    },
    {
      icon: <Grid3X3 className={iconStyles} />,
      title: "Burden of proof",
      href: "/burden-of-proof",
    },
  ];
  // const desktopMenuItems = [
  //   {
  //     title: "Home",
  //     href: "/",
  //   },
  //   {
  //     title: "About me",
  //     href: "/about-me",
  //   },
  //   {
  //     title: "Reading guide",
  //     href: "/reading-guide",
  //   },
  //   {
  //     title: "Burden of proof",
  //     href: "/burden-of-proof",
  //   },
  // ];

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
    // const iconStyles = "size-6 md:size-8";
    // const mobileMenuItems = [
    //   {
    //     icon: <Home className={iconStyles} />,
    //     title: "Home",
    //     href: "/",
    //   },
    //   {
    //     icon: <User className={iconStyles} />,
    //     title: "About me",
    //     href: "/about-me",
    //   },
    //   {
    //     icon: <Book className={iconStyles} />,
    //     title: "Reading guide",
    //     href: "/reading-guide",
    //   },
    //   {
    //     icon: <Grid3X3 className={iconStyles} />,
    //     title: "Burden of proof",
    //     href: "/burden-of-proof",
    //   },
    // ];
    return (
      <div
        className={`lg:hidden p-6 md:p-[10%] font-medium flex-col fixed top-16 left-0 z-40 w-full bg-background h-[calc(100dvh-4rem)] ${
          mobileMenuVisibility ? "flex" : "hidden"
        } `}
      >
        <div className="space-y-4 h-full flex items-stretch flex-col">
          <div className="grid grid-cols-2 landscape:grid-cols-4 gap-4 grow">
            {mainMenuItems.map((item, i) => (
              <Link href={item.href} key={i} onClick={handleMenuVisibility}>
                <Card className="flex flex-col space-y-1 items-center h-full justify-center p-4 text-center hover:bg-accent transition-colors">
                  {item.icon}
                  <span className="text-sm font-semibold">{item.title}</span>
                </Card>
              </Link>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              variant="outline"
              size="icon"
              asChild
              className="w-full p-4"
            >
              <a href="https://github.com/lucswinkels/graduation-portfolio">
                <Github className="size-[1.2rem]" />
              </a>
            </Button>
            <ModeToggle variant="outline" className="w-full p-4" />
          </div>
          <SearchFormComponent fullWidthTrigger />
        </div>
      </div>
    );
  };

  return (
    <>
      <MobileMenu />
      <Container className="border-b fixed top-0 left-0 z-50 bg-background">
        <div className="w-full items-center justify-between flex h-16">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="flex">
                <Logo onClick={closeMobileMenu} />
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList>
              <div className="lg:flex hidden items-center ml-8 space-x-8">
                {mainMenuItems.map((item, i) => (
                  <NavigationMenuItem key={i}>
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className="transition-colors text-foreground/80 hover:text-foreground text-sm font-medium">
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
