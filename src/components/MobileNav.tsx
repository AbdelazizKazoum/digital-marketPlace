"use client";

import React, { useState } from "react";
import { AlignRight } from "lucide-react";
import Link from "next/link";
import { Icons } from "./Icons";
import { NAV_ELEMENTS } from "./config";
import { buttonVariants } from "./ui/button";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const user = null;
  return (
    <>
      <div className=" lg:hidden  m-3 cursor-pointer">
        <AlignRight onClick={() => setIsOpen(!isOpen)} />
      </div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{ zIndex: "900" }}
        className={` ${
          isOpen ? "" : "hidden"
        } fixed w-screen h-screen bg-black top-0 bottom-0 opacity-50 `}
      ></div>

      <div
        style={{
          zIndex: "1000",
        }}
        className={` transition-all ease-in	duration-500 ${
          isOpen ? "" : "-translate-x-full"
        }  fixed left-0 bottom-0  w-full  max-w-sm   h-full bg-gray-50 shadow-lg z-50 overflow-hidden`}
      >
        <div className=" absolute right-0 m-5 cursor-pointer">
          <AlignRight onClick={() => setIsOpen(!isOpen)} />
        </div>

        <div className=" mx-10  ">
          {" "}
          <div className=" ml-4 flex  mt-10 ">
            <Link onClick={() => setIsOpen(!isOpen)} href="/">
              <Icons.logo className="h-10 w-10" />
            </Link>
          </div>
          <div className="mt-10">
            {NAV_ELEMENTS.map((item, i) => (
              <div className="mt-5 -ml-4    ">
                <Link
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                  }}
                  className={buttonVariants({ variant: "ghost", size: "lg" })}
                  href={item.href}
                >
                  {item.label}{" "}
                </Link>
              </div>
            ))}
            <div className="flex  flex-col gap-3 mt-10 ">
              {user ? null : (
                <Link className={buttonVariants({})} href="/signup">
                  Sign in{" "}
                </Link>
              )}

              {user ? (
                <p></p>
              ) : (
                <Link
                  href="/sign-up"
                  className={buttonVariants({ variant: "secondary" })}
                >
                  Create account
                </Link>
              )}

              {user ? null : (
                <span
                  className="h-6 w-px bg-gray-200"
                  aria-hidden="true"
                ></span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
