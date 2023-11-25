import MaxWithWrapper from "@/components/MaxWithWrapper";
import Image from "next/image";

export default function Home() {
  return (
    <MaxWithWrapper className="">
      <div className=" py-20 mx-auto text-center flex flex-col items-center max-w-3xl ">
        <h1 className=" text-4xl tracking-tight text-gray-900 md:text-6xl ">
          Your marketplace for high-qualty{" "}
          <span className="text-blue-600">digital assets</span>
        </h1>
      </div>
    </MaxWithWrapper>
  );
}
