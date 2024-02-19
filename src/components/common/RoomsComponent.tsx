import Image from "next/image";
import Link from "next/link";
import React from "react";
import CheckIn from "../svgs/CheckIn";

function RoomsComponent({ data }: any) {
  return (
    <div>
      <div className="flex flex-col gap-16">
        {data.map((e: any, i: any) => (
          <div
            key={i}
            className="flex flex-col items-center lg:items-start xl:w-[713px] lg:w-[640px] md:w-[708px] sm:w-[600px] w-[320px]"
          >
            {/* image here  */}
            <div className="border-b-[2px] xl:w-[713px] lg:w-[640px] md:w-[708px] sm:w-[600px] w-[320px] pb-[22px] ">
              <div className="relative w-full xl:h-[440px] lg:h-[410px] md:h-[436px] sm:h-[400px] h-[320px]">
                <Image
                  src={e.image}
                  alt="image loading"
                  fill
                  className="object-cover"
                />
                <p className="absolute text-xl leading-[26px] xl:text-2xl xl:leading-8 text-[#1C1715] bottom-0 left-0 font-bold backdrop-blur-[12.5px] bg-white/70 px-5 py-2.5 xl:px-[30px] xl:py-[19px]">
                  {e.price}
                </p>
                <p className="absolute capitalize text-base leading-6 text-[#1C1715] md:top-5 md:right-5 top-2.5 right-2.5 xl:top-8 xl:right-8 font-bold bg-white px-5 py-[6px]">
                  {e?.quality}
                </p>
              </div>
              {/* details here */}
              <div className="mt-3 flex flex-col sm:flex-row sm:justify-between">
                <p className="text-base text-[#1C1715] font-normal mb-2 sm:mb-0 leading-8">
                  {e.bedQuantity}
                </p>
                <div className="flex flex-row items-center gap-[35px]">
                  {e.svg}
                </div>
              </div>
            </div>
            <div className="mt-[22px]">
              <h2 className="md:text-[28px] uppercase font-medium text-2xl leading-8 text-[#1C1715 md:leading-9">
                {e.title}
              </h2>
              <p className="text-sm leading-5 md:text-base md:leading-6 my-4 font-normal">
                {e.description}
              </p>
              {/* read more button here */}
              <div className="flex flex-row justify-between items-center">
                <Link
                  href={e.url.link}
                  className="text-base leading-9 text-[#1C1715] capitalize font-bold"
                >
                  {e.url.button} <span className="ml-2">{e.url.plus}</span>
                </Link>
                <div className="circle-shadow h-[53px] lg:hidden w-[53px] rounded-[50%] flex flex-col items-center justify-center bg-[#1C1715]">
                  <CheckIn />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RoomsComponent;
