"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import { Menu, MoveUpRight, X } from "lucide-react";

import { mainMenuItems, projects, socials } from "@/lib/menuItems";
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
import { H5 } from "./typography/h5";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function Navbar() {
  const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuVisibility(false);
  };

  const handleMenuVisibility = () => {
    setMobileMenuVisibility(!mobileMenuVisibility);
  };

  const MobileMenuBarItems = () => {
    return (
      <div className="flex space-x-2">
        <SearchFormComponent iconOnly variant="outline" />
        <ModeToggle variant="outline" />
        <Button variant="outline" size="icon" onClick={handleMenuVisibility}>
          {mobileMenuVisibility ? (
            <X className="size-5" />
          ) : (
            <Menu className="size-5" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    );
  };

  const MobileMenu = () => {
    const MobileMenuItemCard = (props: {
      icon?: JSX.Element;
      title: string;
    }) => {
      return (
        <Card className="[&>svg]:size-5 shadow-none flex landscape:flex-col landscape:space-x-0 landscape:space-y-2 space-x-4 landscape:justify-center items-center h-full p-4 text-center hover:bg-accent transition-colors">
          {props.icon}
          <span className="text-sm font-medium">{props.title}</span>
        </Card>
      );
    };
    return (
      <div
        className={`p-6 font-medium flex-col fixed top-16 left-0 z-40 w-full bg-background h-[calc(100dvh-4rem)] landscape:overflow-scroll ${
          mobileMenuVisibility ? "flex" : "hidden"
        } `}
      >
        <div className="space-y-4 h-full flex items-stretch flex-col">
          <div
            className={`grid grid-cols-1 landscape:grid-cols-3 gap-4 landscape:h-full`}
          >
            {mainMenuItems.map((item) =>
              item.external ? (
                <a href={item.href} key={item.title} target="_blank">
                  <MobileMenuItemCard icon={item.icon} title={item.title} />
                </a>
              ) : (
                <Link
                  href={item.href}
                  key={item.title}
                  onClick={handleMenuVisibility}
                >
                  <MobileMenuItemCard icon={item.icon} title={item.title} />
                </Link>
              )
            )}
          </div>
          <div className={`grid grid-cols-3 gap-4`}>
            {socials.map((social) => (
              <Button
                variant="outline"
                size="icon"
                asChild
                className="w-full p-4"
                key={social.title}
              >
                <a
                  href={social.href}
                  target="_blank"
                  className="[&>svg]:size-5"
                >
                  {social.icon}
                  <span className="sr-only">{social.title}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const menuLinkStyles =
    "font-medium text-sm hover:border-foreground border-b transition-colors border-transparent pb-0.5 hover:text-foreground text-foreground/80";

  const menus = [
    { title: "Menu", items: mainMenuItems },
    { title: "Projects", items: projects },
    { title: "Connect", items: socials },
  ];

  return (
    <>
      <div className="flex lg:hidden">
        <MobileMenu />
        <NavigationMenu className="w-full items-center justify-between flex h-16 border-b max-w-full min-w-full px-6 fixed top-0 left-0 bg-background">
          <Logo onClick={closeMobileMenu} iconSize="w-8 h-8" />
          <MobileMenuBarItems />
        </NavigationMenu>
      </div>
      <div className="hidden lg:flex w-[220px] xl:w-[240px] h-full flex-col border-r fixed top-0 left-0 z-50 bg-background">
        <NavigationMenu className="flex flex-col w-full max-w-full items-stretch p-0 h-full max-h-full min-h-full">
          <NavigationMenuList className="p-8 border-b flex flex-col space-x-0 items-start">
            <NavigationMenuItem>
              <Logo onClick={closeMobileMenu} iconSize="w-10 h-10" />
            </NavigationMenuItem>
          </NavigationMenuList>
          {menus.map((menu) => (
            <NavigationMenuList
              className="p-8 border-b flex flex-col items-start space-y-2 space-x-0"
              key={menu.title}
            >
              <H5>{menu.title}</H5>
              {menu.items.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.external ? (
                    <NavigationMenuLink
                      href={item.href}
                      target="_blank"
                      className={cn(
                        "flex items-center gap-1 w-max group/navitem",
                        menuLinkStyles
                      )}
                    >
                      {item.title}
                      <MoveUpRight className="size-3 group-hover/navitem:translate-x-1 group-hover/navitem:-translate-y-1 transition-transform" />
                    </NavigationMenuLink>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink className={menuLinkStyles}>
                        {item.title}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          ))}
          <NavigationMenuList className="p-8 space-x-0 flex-col flex items-start">
            <div className="flex flex-row space-x-2">
              <NavigationMenuItem>
                <SearchFormComponent iconOnly variant="outline" />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ModeToggle variant="outline" />
              </NavigationMenuItem>
            </div>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
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
