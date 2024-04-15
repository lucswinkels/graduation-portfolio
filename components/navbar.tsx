"use client";

import * as React from "react";
import { useState } from "react";
import Link from "next/link";
import {
  Book,
  Contact,
  Github,
  Grid3X3,
  Home,
  Mail,
  Menu,
  User,
  X,
} from "lucide-react";
import { BiLogoLinkedin } from "react-icons/bi";

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

  const mainMenuItemsIconStyles = "size-6";
  const mainMenuItems = [
    {
      icon: <Home className={mainMenuItemsIconStyles} />,
      title: "Home",
      href: "/",
    },
    // {
    //   icon: <User className={mainMenuItemsIconStyles} />,
    //   title: "About me",
    //   href: "/about-me",
    // },
    // {
    //   icon: <Contact className={mainMenuItemsIconStyles} />,
    //   title: "Contact",
    //   href: "/contact",
    // },
    {
      icon: <Book className={mainMenuItemsIconStyles} />,
      title: "Reading guide",
      href: "/reading-guide",
    },
    {
      icon: <Grid3X3 className={mainMenuItemsIconStyles} />,
      title: "Burden of proof",
      href: "/burden-of-proof",
    },
    {
      icon: <Github className={mainMenuItemsIconStyles} />,
      title: "Source code",
      href: "https://github.com/lucswinkels/graduation-portfolio",
      external: true,
    },
  ];

  const socialsIconStyles = "size-5";
  const socials = [
    {
      icon: <Github className={socialsIconStyles} />,
      title: "GitHub",
      href: "https://github.com/lucswinkels",
    },
    {
      icon: <BiLogoLinkedin className={socialsIconStyles} />,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/luc-swinkels-42a775157/",
    },
    {
      icon: <Mail className={socialsIconStyles} />,
      title: "E-mail",
      href: "mailto:lucswinkelsweb@gmail.com",
    },
  ];

  const closeMobileMenu = () => {
    setMobileMenuVisibility(false);
  };

  const handleMenuVisibility = () => {
    setMobileMenuVisibility(!mobileMenuVisibility);
  };

  const MobileMenuBarItems = () => {
    return (
      <div className="flex space-x-2 lg:hidden">
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
      icon: JSX.Element;
      title: string;
    }) => {
      return (
        <Card className="flex landscape:flex-col landscape:space-x-0 landscape:space-y-2 space-x-4 landscape:justify-center items-center h-full p-4 text-center hover:bg-accent transition-colors">
          {props.icon}
          <span className="text-sm font-medium">{props.title}</span>
        </Card>
      );
    };
    return (
      <div
        className={`lg:hidden p-6 md:p-[10%] landscape:md:py-6 font-medium flex-col fixed top-16 left-0 z-40 w-full bg-background h-[calc(100dvh-4rem)] landscape:overflow-scroll ${
          mobileMenuVisibility ? "flex" : "hidden"
        } `}
      >
        <div className="space-y-4 h-full flex items-stretch flex-col">
          <div className={`grid grid-cols-1 landscape:grid-cols-2 gap-4`}>
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
                <a href={social.href} target="_blank">
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
                {mainMenuItems.map((item) => (
                  <NavigationMenuItem key={item.title}>
                    {item.external ? (
                      <NavigationMenuLink
                        href={item.href}
                        target="_blank"
                        className="transition-colors text-foreground/80 hover:text-foreground text-sm font-medium"
                      >
                        {item.title}
                      </NavigationMenuLink>
                    ) : (
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className="transition-colors text-foreground/80 hover:text-foreground text-sm font-medium">
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </div>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu>
            <MobileMenuBarItems />
            <NavigationMenuList className="lg:flex hidden">
              <NavigationMenuItem>
                <SearchFormComponent iconOnly variant="ghost" />
              </NavigationMenuItem>
              <NavigationMenuItem>
                <ModeToggle variant="ghost" />
              </NavigationMenuItem>
              {/* {socials.map((social) => (
                <NavigationMenuItem key={social.title}>
                  <Button variant="ghost" size="icon">
                    <a href={social.href} target="_blank">
                      {social.icon}
                      <span className="sr-only">{social.title}</span>
                    </a>
                  </Button>
                </NavigationMenuItem>
              ))} */}
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
