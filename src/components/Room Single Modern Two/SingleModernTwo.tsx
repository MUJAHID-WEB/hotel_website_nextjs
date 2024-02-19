import Image from "next/image";
import React from "react";
import ShowIcon from "../svgs/ShowIcon";
import Link from "next/link";

function SingleModernTwo() {
  return (
    <div className="container flex flex-row justify-between md:px-[30px] px-5 xl:px-0 gap-2 sm:gap-0">
      <div className="relative xl:w-[660px] xl:h-[488px] lg:w-[530px] lg:h-[440px] md:w-[400px] md:h-[400px] sm:w-[360px] sm:h-[250px] w-full h-[140px]">
        <Image
          src="/modern1.png"
          alt="image loading"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col xl:gap-3 sm:gap-5 gap-2">
        <div className="relative xl:w-[470px] xl:h-[238px] lg:w-[410px] lg:h-[210px] md:w-[290px] md:h-[190px] sm:w-[220px] sm:h-[115px] w-[130px] h-[66px]">
          <Image
            src="/modern2.png"
            alt="image loading"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative xl:w-[470px] xl:h-[238px] lg:w-[410px] lg:h-[210px] md:w-[290px] md:h-[190px] sm:w-[220px] sm:h-[115px] w-[130px] h-[66px]">
          <Image
            src="/modarn3.png"
            alt="image loading"
            fill
            className="object-cover"
          />
          <Link
            href=""
            className="absolute p-1 sm:p-2 bottom-1 right-1 sm:bottom-3 sm:right-3 lg:bottom-4 lg:right-[18px] lg:p-[14px] bg-color flex flex-row items-center"
          >
            <ShowIcon />
            <p className="text-[10px] leading-4 sm:text-sm sm:leading-5 font-bold text-[#AEAEAE] ml-[3px] sm:ml-1.5">
              Show all photos
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleModernTwo;
