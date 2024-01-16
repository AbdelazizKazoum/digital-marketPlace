import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { ShoppingCart, ShoppingCartIcon } from "lucide-react";
import { Separator } from "./ui/separator";

const Cart = () => {
  const cartCout = 1;
  return (
    <Sheet>
      <SheetTrigger className="group flex -m-2 p-2 items-center">
        <ShoppingCart
          aria-hidden="true"
          className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
        />
        <span className=" ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800 ">
          0
        </span>
      </SheetTrigger>
      <SheetContent className=" flex w-full flex-col pr-0 sm:max-w-lg ">
        <SheetHeader className="space-y-2.5 pr-6">
          <SheetTitle>Cart (0)</SheetTitle>
        </SheetHeader>
        {cartCout > 0 ? (
          <>
            <div className=" mr-6 flex flex-col w-full ">
              {/* Cart Logic */}
              Cart Items
            </div>
            <div className="space-y-4 pr-6">
              <Separator />
              <div className="space-y-1.5 text-sm   ">
                <div className="flex">
                  <span className="flex-1">Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex">
                  <span className="flex-1">Transaction Fee</span>
                  <span>1</span>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
