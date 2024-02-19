import AppContext from "@/context/AppContext";
import Image from "next/image";
import React, { useContext } from "react";
import CheckOut2 from "../svgs/CheckOut2";
import People2 from "../svgs/People2";
import CheckIn2 from "../svgs/CheckIn2";

const HomeBanner = () => {
  const { setBookNowModal } = useContext(AppContext);
  const arr = [
    {
      title: "Check-in Date",
      svg: <CheckIn2 />,
    },
    {
      title: "Check-out Date",
      svg: <CheckOut2 />,
    },
    {
      title: "People",
      svg: <People2 />,
    },
  ];
  return (
    <div className="w-full relative flex flex-col items-center lg:border-b mb-[50px] border-[#E5E5E5]">
      <div className="relative h-[577px] md:h-[816px] w-full">
        <Image src="/homebanner.png" alt="" fill className="object-cover" />
        <div className=" absolute top-[60px] md:top-[80px] xl:top-[114px] left-[20px] xl:left-[390px] flex flex-row">
          <div className="border-l-8 border-[#1C1715] backdrop-blur-[12.5px] bg-white/70 w-[327px] md:pr-[73px] xl:w-[745px] sm:w-[540px] md:w-[708px] xl:pr-[58px] pt-[42px] md:pt-[96px] xl:pt-[83px] xl:pb-[100px] md:pb-[91px] pb-[49px] pl-[50px]">
            <p className="uppercase text-4xl xl:text-5xl leading-[48px] xl:leading-[62px] text-[#1C1715] font-semibold">
              THE MOST LUXURIOUS HOTEL IN TOWN.
            </p>
            <p className="text-sm md:text-lg leading-7 md:leading-9 text-[#1C1715] font-normal pt-2 md:pt-6 pb-5 md:pb-[48px] md:pr-[38px] pr-[31px]">
              Our luxurious accommodations and impeccable service are sure to
              make your stay unforgettable. Our elegant hotel features spacious
              rooms with elegant décor, and all the amenities.
            </p>
            <button
              type="button"
              className="py-[11px] px-[55px] bg-[#1C1715] text-[#FFFFFF]"
              onClick={() => setBookNowModal(true)}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="flex flex-row lg:gap-5 my-5">
          {arr.map((e: any, i: any) => (
            <div
              key={i}
              className="w-full lg:w-[230px] flex flex-row justify-between items-center px-5 border-[#1C1715] py-[13px] border"
            >
              <p className="text-sm leading-7 font-normal text-[#1C1715]">
                {e.title}
              </p>
              <div className="">{e?.svg}</div>
            </div>
          ))}
          <div className="bg-[#1C1715] text-sm leading-7 text-[#FFFFFF] py-[11px] px-[50px] font-bold text-center">
            SEARCH
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
