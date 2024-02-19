import React from "react";
import ThreeLine from "../common/ThreeLine";
import TitleSubtitle from "../common/TitleSubtitle";
import Image from "next/image";

function HotelVideo() {
  return (
    <div className="mb-[100px]">
      <div className="flex flex-col items-center mb-[30px]">
        <ThreeLine />
      </div>
      <div className="mb-10">
        <TitleSubtitle title="Video about Hotel" subTitle="" textColor="" />
      </div>
      <div className="relative w-full h-[588px]">
        <Image
          src="/videoimg.png"
          fill
          alt="image loading"
          className="object-cover"
        />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-[#FFFFFF] rounded-[50%] w-[70px] h-[70px]">
          <i className="fa-solid fa-play text-3xl font-bold leading-9 text-[#1C1715]"></i>
        </div>
      </div>
    </div>
  );
}

export default HotelVideo;
