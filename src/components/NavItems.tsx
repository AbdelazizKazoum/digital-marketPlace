"use client";

import React, { useEffect, useRef, useState } from "react";
import { NAV_ELEMENTS, PRODUCT_CATEGORIES } from "./config";
import NavItem from "./NavItem";
import { useOnClickOutside } from "@/hooks/use-click-outside";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const isAnyOpen = activeIndex !== null;

  const navRef = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(navRef, () => setActiveIndex(null));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key == "Escape") {
        setActiveIndex(null);
      }
    };

    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, []);

  return (
    <div ref={navRef} className="flex h-full gap-2">
      {NAV_ELEMENTS.map((item, i) => (
        <div className="     ">
          <Link
            className={buttonVariants({ variant: "ghost" })}
            href={item.href}
          >
            {item.label}{" "}
          </Link>
        </div>
      ))}
      {/* {PRODUCT_CATEGORIES.map((category, i) => {
        const handleOpen = () => {
          if (activeIndex === i) setActiveIndex(null);
          else setActiveIndex(i);
        };

        const isOpen = activeIndex === i;

        return (
          <NavItem
            category={category}
            handleOpen={handleOpen}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
          />
        );
      })} */}
    </div>
  );
};

export default NavItems;
