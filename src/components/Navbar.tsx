import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { buttonVariants } from "../components/ui/button";
import { Menu } from "lucide-react";
import { LogoIcon } from "./Icons";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "About TerraTech",
  },
  {
    href: "/solutions",
    label: "Solutions",
  },
  {
    href: "/platform",
    label: "TerraByte Platform",
  },
  {
    href: "/industries",
    label: "Industries",
  },
  // {
  //   href: "/case-studies",
  //   label: "Case Studies",
  // },
  {
    href: "/contact",
    label: "Contact",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex items-center">
          {/* Left: Logo and company name */}
          <div className="flex items-center" style={{ minWidth: 180, maxWidth: 180 }}>
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex items-center"
            >
              <LogoIcon />
              TerraTech
            </a>
          </div>

          {/* Center: Nav links (desktop) */}
          <nav className="hidden md:flex flex-1 justify-center gap-8">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          {/* Right: Placeholder for alignment (was ModeToggle) */}
          <div className="hidden md:flex" style={{ minWidth: 180, maxWidth: 180 }}></div>

          {/* Mobile menu */}
          <span className="flex md:hidden">
            <Sheet
              open={isOpen}
              onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    TerraTech
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
