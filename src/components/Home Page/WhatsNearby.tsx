import Image from "next/image";
import React from "react";
import ThreeLine from "../common/ThreeLine";
import TitleSubtitle from "../common/TitleSubtitle";
import Nature from "../svgs/Nature";
import Store from "../svgs/Store";
import Mountain from "../svgs/Mountain";
import Helipad from "../svgs/Helipad";

function WhatsNearby() {
  const nearby = [
    {
      svg: <Nature />,
      places: `Nature - forest, lake`,
      distance: `300 meters from the house`,
    },
    {
      svg: <Store />,
      places: `Clothing store`,
      distance: `300 meters from the house`,
    },
    {
      svg: <Mountain />,
      places: `Mountain Attractions`,
      distance: `300 meters from the house`,
    },
    {
      svg: <Helipad />,
      places: `Helipad`,
      distance: `300 meters from the house`,
    },
  ];
  return (
    <div className="container border-t-[2px] mb-[50px] xl:mb-[100px] pt-[100px] flex flex-col xl:flex-row items-center xl:gap-[72px] -z-[100px]">
      <div className="relative w-[329px] h-[493px] md:w-[463px] md:h-[694px]">
        <Image
          src="/girlphoto.png"
          fill
          alt="image loading"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-center xl:items-start">
        <div className="mb-[30px] mt-[30px] xl:mt-0">
          <ThreeLine />
        </div>
        <div className="xl:w-[560px] px-5 sm:px-[80px] md:px-[120px] xl:px-0">
          <TitleSubtitle
            textColor="xl:text-start"
            title="What's nearby?"
            subTitle="There are plenty of things to do near the hotel. Depending on your location, guests might be able to visit local tourist attractions, go shopping, or go out for dinner and drinks."
          />
        </div>
        {nearby.map((e: any, i: any) => (
          <div key={i} className="flex flex-row gap-6 mt-[34px] items-center">
            {e.svg}
            <div className="flex flex-col">
              <p className="text-base leading-8 text-[#1C1715] font-medium">
                {e.places}
              </p>
              <p className="text-sm leading-7 text-[#1C1715] font-normal">
                {e.distance}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatsNearby;
