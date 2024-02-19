import React from "react";
import Image from "next/image";
import Kitchen from "../svgs/Kitchen";
import Laptop from "../svgs/Laptop";
import Restaurant from "../svgs/Restaurant";
import Breakfast from "../svgs/Breakfast";
import Washer from "../svgs/Washer";
import Business from "../svgs/Business";
import Tv from "../svgs/Tv";
import FirstAidKit from "../svgs/FirstAidKit";
import Umbrella from "../svgs/Umbrella";
import Car from "../svgs/Car";
import WifiB from "../svgs/WifiB";
import TwoMan from "../svgs/TwoMan";

function ModernTwoAbout() {
  const iconArr2 = [
    {
      svg: <Kitchen />,
      title: `Kitchen`,
    },
    {
      svg: <Laptop />,
      title: `Laptop-friendly`,
    },
    {
      svg: <Restaurant />,
      title: `Restaurant`,
    },
    {
      svg: <Breakfast />,
      title: `Breakfast`,
    },
    {
      svg: <Washer />,
      title: `Washer`,
    },
    {
      svg: <Business />,
      title: `Business centre`,
    },
    {
      svg: <Tv />,
      title: `TV`,
    },
    {
      svg: <FirstAidKit />,
      title: `First aid kit`,
    },
    {
      svg: <Umbrella />,
      title: `Sun terrace`,
    },
    {
      svg: <Car />,
      title: `Free parking`,
    },
    {
      svg: <WifiB />,
      title: `Wifi`,
    },
    {
      svg: <TwoMan />,
      title: `Concierge service`,
    },
  ];
  return (
    <div className="container flex flex-col lg:flex-row justify-between px-5 xl:px-0">
      <div className="xl:w-[668px] lg:w-[568px]">
        <h3 className="text-2xl leading-8 text-[#1C1715] font-semibold">
          About
        </h3>
        <p className="text-base leading-6 text-[#1C1715] font-normal mt-4">
          The Ambassador Suite is a large and luxurious suite typically found in
          top-tier hotels. It often features a separate bedroom and living area,
          as well as a private bathroom. Some suites also include a kitchenette
          or dining area.
        </p>
        <p className="text-base leading-6 text-[#1C1715] font-normal mt-5">
          It features a separate bedroom and living area, as well as a private
          balcony with stunning views of the city. The suite also includes a
          marble bathroom with a Jacuzzi tub, and a fully–equipped kitchen.
        </p>
        <div className="mt-[50px] flex flex-row flex-wrap gap-x-40 gap-y-6">
          {iconArr2.map((e: any, i: any) => (
            <div key={i} className="flex flex-row items-center">
              {e.svg}
              <p className="ml-4 text-sm leading-5 text-[#1C1715] capitalize font-normal">
                {e.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* image here  */}
      <div className="relative w-[335px] sm:w-[367px] h-[577px]">
        <Image
          src="/aboutmimg.png"
          alt="image loading"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export default ModernTwoAbout;
