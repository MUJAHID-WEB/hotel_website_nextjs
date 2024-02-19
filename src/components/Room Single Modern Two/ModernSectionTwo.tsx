import React from "react";
import Modernicon1 from "../svgs/Modernicon1";
import Modernicon2 from "../svgs/Modernicon2";
import Modernicon3 from "../svgs/Modernicon3";
import Modernicon4 from "../svgs/Modernicon4";

function ModernSectionTwo() {
  const iconArr = [
    {
      svg: <Modernicon1 />,
      title: `Entire home`,
      subTitle: `All for your needs.`,
    },
    {
      svg: <Modernicon2 />,
      title: `9 guests`,
      subTitle: `Great stays for guests.`,
    },
    {
      svg: <Modernicon3 />,
      title: `3 bedrooms`,
      subTitle: `Highly rated apartments.`,
    },
    {
      svg: <Modernicon4 />,
      title: `Cancellation policy`,
      subTitle: `Flexible cancellation details.`,
    },
  ];
  return (
    <div className="container mt-[33px] mb-[60px] px-5 xl:px-0">
      <div className="border-b pb-7 flex flex-col">
        <div className="flex flex-col items-center sm:items-start">
          <div className="flex flex-row items-center">
            <i className="fa-solid fa-star text-lg leading-7 text-[#FFC804] font-normal"></i>
            <div className="text-sm leading-5 font-bold text-[#1C1715] ml-2 mr-1">
              4.91
            </div>
            <div className="text-sm leading-5 font-bold text-[#AEAEAE]">
              (98)
            </div>
            <div className="w-[3px] h-[3px] bg-[#AEAEAE] mx-2"></div>
            <div className="text-sm leading-5 font-bold text-[#AEAEAE]">
              Popular
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col justify-between mt-3">
          <h2 className="mb-2 sm:mb-0 md:text-[38px] text-center md:leading-[49px] text-2xl leading-8 text-[#1C1715] font-medium">
            AMBASSADOR SUITE
          </h2>
          <p className="md:text-[32px] md:leading-[42px] text-lg leading-7 text-[#1C1715] font-medium flex flex-row items-center justify-center sm:justify-start">
            From: <span className="mr-[7px] ml-[10px] md:ml-4">$495</span>
            <span className="text-[#AEAEAE] text-base leading-6">/ night</span>
          </p>
        </div>
      </div>
      {/* icons here  */}
      <div className="flex flex-row flex-wrap justify-between">
        {iconArr.map((e: any, i: any) => (
          <div key={i} className="mt-9 flex flex-row items-center gap-4">
            <div className="w-12 h-12 flex flex-col items-center justify-center bg-color">
              {e?.svg}
            </div>
            <div className="">
              <p className=" mb-1 text-sm leading-5 text-[#1C1715] font-bold">
                {e.title}
              </p>
              <p className="text-sm leading-5 text-[#AEAEAE] font-normal">
                {e.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ModernSectionTwo;
