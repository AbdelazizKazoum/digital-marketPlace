import React from "react";
import MaxWithWrapper from "./MaxWithWrapper";
import Link from "next/link";
import { Icons } from "./icons";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <div className=" bg-white sticky z-50 inset-y-0 top-0 ">
      <header className=" relative bg-white ">
        <MaxWithWrapper>
          <div className=" border-b border-gray-200 h-16 ">
            <div className=" flex items-center h-16 ">
              {/* mobile nav */}
              <div className=" ml-4 flex lg:ml-0 ">
                <Link href="/">
                  <Icons.logo className="h-10 w-10" />
                </Link>
              </div>

              <div className=" z-50 lg:ml-8 lg:block   ">
                <NavItems />
              </div>
            </div>
          </div>
        </MaxWithWrapper>
      </header>
    </div>
  );
};

export default Navbar;
