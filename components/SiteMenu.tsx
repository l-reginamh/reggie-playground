"use client";

import { siteConfig } from "@/config/site";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function SiteMenu() {
    const menus = siteConfig.pages;
    const [open, setOpen] = useState(false);
    
    return (
        <header className="z-10 sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filyer]:bg-background/60">
            <div className="container flex h-14 min-w-full max-w-screen-2xl items-center justify-between">
                <div className="">
                    <div className="hidden md:flex">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem className="mr-3">
                                    <div className="nes-text is-disabled">
                                        {siteConfig.name}
                                    </div>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>
                                        Tools
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                    <ul className="grid w-[400px] gap-4 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                        {
                                            menus.map((menu, i) => {
                                                return (
                                                    menu.available === true && <li key={i}>
                                                        <Link href={menu.path}>
                                                            <div className="nes-text text-foreground mb-1">
                                                                {menu.title}
                                                            </div>
                                                            <div className="nes-text is-disabled text-xxxs">
                                                                {menu.description}
                                                            </div>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <div className="flex md:hidden">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger asChild>
                                <Button variant={"outline"} className="w-10 px-0 sm:hidden">
                                    <Menu className="h-5 w-5" />
                                    <span className="sr-only">Toggle Theme</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side={"right"}>
                                <Link href="/" className="flex items-center">
                                    <span className="font-bold nes-text is-success">{siteConfig.name}</span>
                                </Link>
                                <div className="flex flex-col gap-3 mt-5">
                                    <div className="nes-text is-disabled">
                                        Tools
                                    </div>
                                    <ul className="flex flex-col ml-1 mt-2">
                                        {
                                            menus.map((menu, i) => {
                                                return (
                                                    menu.available === true && <li key={i} className="mb-3">
                                                        <Link href={menu.path}>
                                                            <div className="nes-text text-foreground mb-1 text-xs">
                                                                {menu.title}
                                                            </div>
                                                            <div className="nes-text is-disabled text-xxxs">
                                                                {menu.description}
                                                            </div>
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
                <div className="">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}