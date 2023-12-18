"use client";

import React from "react";
import { Button } from "./ui/button";
import { PRODUCT_CATEGORIES } from "./config";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({ category, handleOpen, isOpen, isAnyOpen }: NavItemProps) => {
  return (
    <div className="flex ">
      <div className="relative flex items-center">
        <Button
          variant={isOpen ? "secondary" : "ghost"}
          className="gap-1.5"
          onClick={handleOpen}
        >
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground ", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>
      {isOpen ? (
        <div
          className={cn(
            " absolute inset-x-0 text-sm text-muted-foreground top-full ",
            {
              "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen,
            }
          )}
        >
          <div className=" bg-white relative shadow ">
            <div className="mx-auto max-w-7xl">
              <div className="grid  grid-cols-4  gap-y-10 py-16 px-10">
                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-8">
                  {category.featured.map((item, index) => (
                    <div key={index} className=" group text-base sm:text-sm ">
                      <div className=" relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 cursor-pointer ">
                        <Image
                          src={item.imageSource}
                          alt=""
                          fill
                          className="object-cover object-center "
                        />
                      </div>
                      <Link
                        href={item.href}
                        className="mt-6 block font-medium text-gray-900"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1" aria-hidden="true">
                        Shop Now
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavItem;
