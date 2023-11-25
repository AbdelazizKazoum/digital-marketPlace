import { cn } from "@/lib/utils";
import React from "react";
import { ReactNode } from "react";

const MaxWithWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(
        " mx-auto w-full max-w-screen-xl px-2 md:px-20 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWithWrapper;
