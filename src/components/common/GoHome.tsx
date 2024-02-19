import Link from "next/link";
import React from "react";

function GoHome({ pageName }: { pageName: string }) {
  return (
    <div className="container mt-10 mb-16">
      <div className="text-[#747474] text-base leading-6 font-medium mb-8">
        <Link href="/">Home</Link>
        <i className="fa-solid fa-chevron-right mx-2 "></i>
        <span>{pageName}</span>
      </div>
      <div className="flex flex-row items-center">
        <div className="h-[5px] w-[54px] md:w-[173px] bg-[#1C1715] mr-[30px]"></div>
        <h1 className="text-[32px] leading-[42px] md:text-[42px] md:leading-[55px] text-[#1C1715] font-bold">
          {pageName}
        </h1>
      </div>
    </div>
  );
}

export default GoHome;
