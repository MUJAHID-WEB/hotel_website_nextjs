import Link from "next/link";
import React from "react";

function AdventurePackage() {
  return (
    <div className="container bg-[#1C1715] mb-[50px] xl:mb-[100px] py-[88px] xl:px-[240px] lg:px-[150px] px-5">
      <div className="">
        <h2 className="text-[42px] leading-[55px] font-semibold text-[#FFFFFF] text-center">
          Adventure Package - Save 50%
        </h2>
        <p className="text-lg leading-7 text-[#FFFFFF] font-normal text-center mt-5 mb-[30px]">
          Includes a one night stay in a luxurious room, a $100 credit towards
          activities such as skiing, rafting, and golfing, and a bottle of
          champagne.
        </p>
        <div className="flex flex-col items-center">
          <Link
            href=""
            className="text-base leading-5 px-[70px] py-[11px] font-bold text-[#1C1715] bg-[#FFFFFF]"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdventurePackage;
