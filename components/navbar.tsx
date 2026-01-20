"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { NavMenu } from "@/components/nav-menu";
import { NavigationSheet } from "@/components/navigation-sheet";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set isScrolled to true if the page has been scrolled more than 100px
      setIsScrolled(window.scrollY > 30);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const pathname = usePathname();
  return (
<nav
  className={`fixed top-0 left-0 w-full z-50 py-5 px-[7.5rem]
    lg:max-2xl:px-[3rem]
    sm:max-lg:px-[3rem]
    max-sm:px-[1rem]
    flex justify-between items-center
    border-b border-[#e8e8e836]
    transition-colors duration-300
    ${
      pathname === "/request-demo"
        ? "bg-white"
        : isScrolled
        ? "bg-white"
        : "bg-transparent"
    }
  `}
>

      {" "}
      {/* <div className="h-full flex items-center justify-between  mx-auto px-4 sm:px-6 lg:px-8 xl:px-20"> */}
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="flex items-center gap-3">
          <Button asChild>
            <Link href="/request-demo">Request A Demo</Link>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet />
          </div>
        </div>
      {/* </div> */}
      <div className="bg-white  absolute top-[70px] w-full left-0 padding-x">

        {pathname === "/request-demo" && (
          <nav className="text-sm mb-5 text-[#4D595D] ">
            <Link href={'/'}><span>Home</span> </Link><span className="mx-1">&gt;</span> <span className="text-primary font-medium">Request Demo</span>
          </nav>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
