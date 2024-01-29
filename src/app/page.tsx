import MaxWithWrapper from "@/components/MaxWithWrapper";
import ProductsReel from "@/components/products/ProductsReel";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const perks = [
    {
      name: "Instant Delivery",
      icon: ArrowDownToLine,
      description:
        "Get your assets delivred to your email in seconds and download right away",
    },
    {
      name: "Guaranteed Quality",
      icon: CheckCircle,
      description:
        "Every asset in our platform is verified by our team to ensure our highest quality standars. ",
    },
    {
      name: "For the Planet",
      icon: Leaf,
      description:
        "we've plaged 1% sales to the preservation of the natural environment.  ",
    },
  ];
  return (
    <>
      <MaxWithWrapper className="">
        <div className=" py-20 mx-auto text-center flex flex-col items-center max-w-3xl ">
          <h1 className=" text-4xl tracking-tight text-gray-900 md:text-6xl ">
            Your marketplace for high-qualty{" "}
            <span className="text-blue-600">digital assets</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            welcome to digitaleHippo. Every asset on our platform is verified by
            our team to ensure our highest quality standards.
          </p>
          <div className="mt-6 flex flex-col md:flex-row gap-4 ">
            <Link href={"/products"} className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant={"ghost"}>Our quality promise &rarr;</Button>
          </div>
        </div>
      </MaxWithWrapper>
      <section className="Product-reel">
        <ProductsReel />
      </section>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWithWrapper className="py-20   ">
          <div className=" grid grid-cols-1 gap-y-12 md:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-3 ">
            {perks.map((perk) => (
              <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center ">
                <div className=" flex-shrink-0  flex justify-center ">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.icon className=" w-1/3 h-1/3 " />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWithWrapper>
      </section>
    </>
  );
}
