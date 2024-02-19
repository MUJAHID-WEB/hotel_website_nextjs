import Link from "next/link";
import React from "react";

function FooterBottom() {
  return (
    <div className="bg-[#1C1715] sm:px-[30px] xl:px-0">
      <div className="container flex flex-col gap-3 md:gap-0 items-center md:items-start md:flex-row md:justify-between py-[15px]">
        <div className="">
          <Link
            href=""
            className="text-[Privacy & Policy] text-[#FFFFFF] text-base leading-6 font-medium capitalize"
          >
            Privacy & Policy
          </Link>
        </div>
        <div className="">
          <Link
            href=""
            className="text-[Privacy & Policy] text-[#FFFFFF] text-base leading-6 font-medium capitalize"
          >
            Copyright 2023, All right reserved.
          </Link>
        </div>
        <div className="">
          <i className="fa-brands fa-cc-visa text-[#FFFFFF] text-2xl leading-[48px] font-normal"></i>
          <i className="fa-brands fa-cc-paypal text-[#FFFFFF] text-2xl leading-[48px] font-normal mx-[38px]"></i>
          <i className="fa-brands fa-cc-mastercard text-[#FFFFFF] text-2xl leading-[48px] font-normal"></i>
        </div>
      </div>
    </div>
  );
}

export default FooterBottom;
