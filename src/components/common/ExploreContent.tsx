import Image from "next/image";
import Link from "next/link";
import React from "react";

function ExploreContent({ exploreData }: any) {
  return (
    <div className="container flex flex-col gap-[50px] mb-[100px] lg:px-6 xl:px-0">
      {exploreData.map((e: any, i: any) => (
        <div
          key={i}
          className={`flex flex-col ${
            i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } lg:justify-between items-center`}
        >
          <div className="relative w-[324px] h-[324px] sm:w-[560px] sm:h-[560px] xl:w-[560px] xl:h-[560px] lg:w-[488px] lg:h-[488px]">
            <Image
              src={e?.image}
              fill
              alt="image loading"
              className="object-cover"
            />
          </div>
          <div className="xl:w-[522px] w-[320px] sm:w-[560px] lg:w-[450px] lg:mt-0 mt-7">
            <div className="mb-4 font-bold text-base">
              <i className={` ${e?.star} text-[#FFC804]`}></i>
              <i className={` ${e?.star} text-[#FFC804] mx-2`}></i>
              <i className={` ${e?.star} text-[#FFC804]`}></i>
              <i className={` ${e?.star} text-[#FFC804] mx-2`}></i>
              <i className={` ${e?.star} text-[#FFC804]`}></i>
              <span className="text-lg leading-7 text-[#1C1715] font-normal ml-5">
                {e?.rate}
              </span>
            </div>
            <div className="">
              <i className="fa-solid fa-location-dot text-lg leading-7 text-[#1C1715] font-normal"></i>
              <span className="text-lg leading-7 text-[#1C1715] font-normal ml-5">
                {e?.distance}
              </span>
            </div>
            {/* title and description here */}
            <div className="mt-7">
              <h3 className="text-2xl leading-8 text-[#1C1715] font-medium">
                {e?.packageTitle}
              </h3>
              <p className="text-base leading-6 text-[#1C1715] font-normal mt-3">
                {e?.description}
              </p>
            </div>
            {/* button here */}
            <div className="mt-14 ">
              <h3 className="text-xl leading-7 text-[#1C1715] font-semibold pl-2.5 border-l-[7px] border-[#1C1715]">
                {e?.price}
              </h3>
              <div className="mt-10 flex flex-col items-center lg:items-start">
                <Link
                  href={e?.url.link}
                  className="text-base leading-5 px-[112px] lg:px-[70px] py-[11px] font-bold bg-[#1C1715] text-[#FFFFFF]"
                >
                  {e?.url.btn}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExploreContent;
