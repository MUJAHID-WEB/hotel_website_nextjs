import React from "react";
import CheckOut2 from "../svgs/CheckOut2";
import People2 from "../svgs/People2";
import CheckIn2 from "../svgs/CheckIn2";
import CheckInOut from "./CheckInOut";

function CheckAvailability({ borderColor }: any) {
  return (
    <div
      className={`xl:w-[370px] lg:w-[360px] py-[61px] px-[30px] border-[10px] border-[#1C1715] ${borderColor}`}
    >
      <h3 className="text-2xl leading-8 text-[#1C1715] font-semibold mb-[22px]">
        Check Availability
      </h3>

      <div className="flex flex-col gap-5">
        <CheckInOut />
        <div className="bg-[#1C1715] mb-6 text-sm leading-7 text-[#FFFFFF] py-[11px] px-[50px] font-bold text-center">
          SEARCH
        </div>
        <div className="flex flex-row gap-2 items-center justify-center">
          <div className="flex flex-col items-center gap-[3px]">
            <div className="w-[18px] h-[2px] bg-[#1C1715]"></div>
            <div className="w-3 h-[2px] bg-[#1C1715]"></div>
            <div className="w-1 h-[2px] bg-[#1C1715]"></div>
          </div>
          <p className="text-sm leading-7 font-bold text-[#1C1715]">
            Search by criteria
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckAvailability;
