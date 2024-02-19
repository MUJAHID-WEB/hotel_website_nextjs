import React from "react";
import TravelWeek from "../svgs/TravelWeek";
import Tower from "../svgs/Tower";
import Aero from "../svgs/Aero";

function Welcome() {
  return (
    <div className="bg-[#1C1715] mb-[50px] xl:mb-[100px]">
      <div className="container xl:pb-[120px] pt-6 pb-[85px] md:pt-[88px] md:pb-[123px] xl:pt-[159px] items-center xl:items-start flex flex-col xl:flex-row xl:justify-between">
        {/* Video  area  */}
        <div className="">
          <h2 className="md:text-[52px] text-[32px] leading-[42px] w-[314px] md:w-[367px] xl:text-start text-center md:leading-[68px] font-semibold text-[#FFFFFF]">
            Welcome to Paradise!
          </h2>
          <div className="md:mt-14 mt-[26px]">
            <p className="xl:text-base text-[#FFFFFF] font-bold text-xl md:text-xl md:leading-[26px] leading-[21px] xl:leading-[21px] bg-white/10 inline-block py-[14px] px-[53px] border border-dashed">
              <i className="fa-solid fa-play md:mr-3  mr-[17px]"></i> Watch the
              video
            </p>
          </div>
        </div>
        {/* description area  */}
        <div className="flex flex-col xl:mt-0 mt-[29px] md:mt-[52px] w-[334px] sm:w-[560px] md:w-[668px] xl:w-[560px]">
          <p className="text-sm leading-7 md:text-lg md:leading-9 xl:text-start text-center text-[#FFFFFF] ">
            Book your stay at our hotel and enjoy a comfortable and relaxing
            experience. Our hotel offers excellent accommodations and services,
            perfect for business and leisure travelers alike. Our convenient
            location allows easy access to all the best the city has to offer.
            Hotel staff are typically knowledgeable about the area and can
            provide recommendations for things to do and see. Additionally, many
            hotels offer loyalty programs which provide discounts and other
            benefits.
          </p>
          <div className="flex flex-wrap gap-[40px] sm:flex-nowrap flex-row items-center justify-between mt-10">
            <TravelWeek />
            <Tower />
            <Aero />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
