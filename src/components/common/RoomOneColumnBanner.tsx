import Image from "next/image";
import React from "react";

function RoomOneColumnBanner({
  image,
  title,
  subTitle,
}: {
  image: string;
  title: string;
  subTitle: string;
}) {
  return (
    <div>
      <div className="w-full h-[244px] md:h-[258px] lg:h-[280px] xl:h-[633px] relative">
        <Image src={image} fill alt="image loading" className="object-cover" />
        <div className="absolute top-[59px] sm:left-[5%] xl:top-[84px] flex flex-col sm:items-start items-center xl:left-[20%]">
          <h2 className="text-[38px] uppercase border-b-[5px] inline-block pb-4 border-[#1C1715] leading-[50px] text-[#1C1715] font-medium ">
            {title}
          </h2>
          <p className=" text-[#1C1715] text-base leading-8 mt-5 text-center sm:text-start sm:w-[330px] font-medium">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RoomOneColumnBanner;
