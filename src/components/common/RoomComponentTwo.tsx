import Image from "next/image";
import Link from "next/link";
import React from "react";
import CheckIn from "../svgs/CheckIn";

function RoomsComponentTwo({ dataTwo }: any) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:gap-3 xl:gap-[30px] lg:gap-3 md:gap-[30px]">
        {dataTwo.map((e: any, i: any) => (
          <div
            key={i}
            className="flex flex-col items-center lg:items-start xl:w-[346px] md:w-[338px] lg:w-[310px] sm:w-[310px] w-[320px] pb-[22px]"
          >
            {/* image here  */}
            <div className="border-b-[2px] w-full pb-[22px] ">
              <div className="relative w-full xl:h-[260px] md:h-[338px] lg:h-[310px] sm:h-[310px] h-[320px]">
                <Image
                  src={e.image}
                  alt="image loading"
                  fill
                  className="object-cover"
                />
                <p className="absolute text-base leading-6 text-[#1C1715] bottom-0 left-0 font-bold backdrop-blur-[12.5px] bg-white/70 px-5 py-2.5">
                  {e.price}
                </p>
                <p className="absolute capitalize text-sm leading-5 text-[#1C1715] top-2.5 right-2.5 font-bold bg-white px-5 py-[6px]">
                  {e?.quality}
                </p>
              </div>
              {/* details here */}
              <div className="mt-3 flex flex-col sm:flex-row sm:justify-between">
                <p className="text-sm text-[#1C1715] font-normal mb-2 sm:mb-0 leading-5">
                  {e.bedQuantity}
                </p>
                <div className="flex flex-row items-center gap-4">{e.svg}</div>
              </div>
            </div>
            <div className="mt-[22px]">
              <h2 className="uppercase font-medium text-2xl leading-8 text-[#1C1715">
                {e.title}
              </h2>
              <p className="text-sm leading-5 my-4 font-normal">
                {e.description}
              </p>
              {/* read more button here */}
              <div className="flex flex-row justify-between items-center">
                <Link
                  href={e.url.link}
                  className="text-sm leading-5 text-[#1C1715] capitalize font-bold"
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

export default RoomsComponentTwo;
