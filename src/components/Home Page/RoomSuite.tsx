import React, { useState } from "react";
import ThreeLine from "../common/ThreeLine";
import TitleSubtitle from "../common/TitleSubtitle";
import RoomSuiteArr from "./RoomSuiteArr";
import Slider from "react-slick";

function RoomSuite() {
  return (
    <div className="mb-[50px] xl:mb-[100px]">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center mb-[30px]">
          <ThreeLine color="" />
        </div>
        <div className="px-5 sm:px-[30px] xl:px-0 w-[560px] md:px-[104px]">
          <TitleSubtitle
            textColor=""
            title="ROOMS & SUITES"
            subTitle="Our suites are the perfect place to stay for a relaxing and comfortable getaway. Each suite includes a bedroom."
          />
        </div>
      </div>
      {/* slider here  */}

      <RoomSuiteArr />
    </div>
  );
}

export default RoomSuite;
