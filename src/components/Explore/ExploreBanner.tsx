import Image from "next/image";
import React from "react";

function ExploreBanner() {
  return (
    <div className="relative w-full md:h-[258px] h-[244px] lg:h-[633px]">
      <Image
        src="/explorebanner.png"
        fill
        alt="image loading"
        className="object-cover"
      />
      <div className="absolute border-l-[10px] border-[#1C1715] top-[50%] -translate-x-1/2 -translate-y-1/2 left-[50%] backdrop-blur-[12.5px] py-[26px] bg-white/70 text-center lg:w-[753px] md:w-[580px] sm:w-[540px] w-[340px]">
        <h1 className="text-4xl leading-[44px] xl:text-5xl xl:leading-[62px] text-[#1C1715] font-bold">
          Explore
        </h1>
        <p className="lg:px-[96px] px-5 mt-[18px] xl:text-lg xl:leading-7 text-base leading-6 text-[#1C1715] font-medium">
          Take a deep dive and try our list of over 40 unique generators, find
          placeholder images for your next design
        </p>
      </div>
    </div>
  );
}

export default ExploreBanner;
