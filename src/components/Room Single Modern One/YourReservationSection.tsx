import React from "react";
import IconSectionOne from "./IconSectionOne";
// import AmenitiesOne from "./AmenitiesOne";
import Modernicon1 from "../svgs/Modernicon1";
import Modernicon2 from "../svgs/Modernicon2";
import Modernicon3 from "../svgs/Modernicon3";
import Modernicon4 from "../svgs/Modernicon4";
import YourReservation from "./YourReservation";
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
import Image from "next/image";

function YourReservationSection() {
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
  ];
  const iconArr3 = [
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
    <div className="container flex flex-row justify-between my-[50px] xl:my-[100px]">
      <div className="xl:w-[656px]">
        <div className="flex flex-row items-center">
          <i className="fa-solid fa-star text-lg leading-7 text-[#FFC804] font-normal"></i>
          <div className="text-sm leading-5 font-bold text-[#1C1715] ml-2 mr-1">
            4.91
          </div>
          <div className="text-sm leading-5 font-bold text-[#AEAEAE]">(98)</div>
          <div className="w-[3px] h-[3px] bg-[#AEAEAE] mx-2"></div>
          <div className="text-sm leading-5 font-bold text-[#AEAEAE]">
            Popular
          </div>
        </div>
        <h2 className="my-4 md:text-[38px] md:leading-[49px] text-2xl leading-8 text-[#1C1715] font-medium">
          AMBASSADOR SUITE
        </h2>
        {/* description here  */}
        <div className="border-t mb-10">
          <p className="text-base leading-6 text-[#1C1715] font-normal mt-4">
            The Ambassador Suite is a large and luxurious suite typically found
            in top-tier hotels. It often features a separate bedroom and living
            area, as well as a private bathroom. Some suites also include a
            kitchenette or dining area.
          </p>
          <p className="text-base leading-6 text-[#1C1715] font-normal mt-5">
            It features a separate bedroom and living area, as well as a private
            balcony with stunning views of the city. The suite also includes a
            marble bathroom with a Jacuzzi tub, and a fully-equipped kitchen.
          </p>
        </div>
        {/* icon section one  */}
        <IconSectionOne
          commonIcon={iconArr}
          bodyClass="flex flex-col border-y py-10 gap-6"
        />
        {/* Amenities One */}
        <div className="w-full">
          <p className="text-2xl leading-8 text-[#1C1715] font-medium my-6">
            Amenities
          </p>
          <div className="flex flex-row justify-between w-full gap-[140px]">
            <div className="">
              <IconSectionOne
                commonIcon={iconArr2}
                bodyClass={`gap-x-[140px] gap-y-6 justify-between border-y-0`}
              />
            </div>
            <div className="">
              <IconSectionOne
                commonIcon={iconArr3}
                bodyClass={`gap-x-[140px] gap-y-6 justify-between border-y-0`}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Your reservation here  */}
      <div className="w-[370px]">
        <YourReservation />
        <div className="relative w-[370px] h-[305px] mt-[60px]">
          <Image
            src="/discountimg.png"
            alt="image loading"
            fill
            className="object-contain"
          />
          <div className="absolute font-bold text-2xl leading-8 px-5 right-[37px] bottom-[25px]  py-4 bg-[#FFFFFF]">
            Get a discount - 10%
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourReservationSection;
