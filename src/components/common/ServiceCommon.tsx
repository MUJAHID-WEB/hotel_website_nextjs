import Image from "next/image";
import React from "react";

function ServiceCommon({ service, textColor }: any) {
  return (
    <div className="container flex flex-col sm:flex-wrap sm:items-start sm:justify-center sm:flex-row items-center xl:flex-row gap-5">
      {service.map((e: any, i: any) => (
        <div
          key={i}
          className="flex flex-col w-[328px] sm:w-[270px] md:w-[340px] xl:w-[270px] lg:mt-[30px] lg:mb-0 mb-[30px]"
        >
          <div className="relative w-[328px] sm:w-[270px] sm:h-[270px] h-[328px] md:w-[340px] md:h-[340px] xl:w-[270px] xl:h-[270px]">
            <Image src={e.image} alt="image" fill className="object-contain" />
          </div>
          <div className="">
            <p
              className={`${textColor} text-[22px] mt-6 mb-4 font-normal leading-7 text-[#1C1715]`}
            >
              <span
                className={`${textColor} text-[#181818] font-extrabold uppercase`}
              >
                {e.firstText}
              </span>
              {e.title}
            </p>
            <p className={`${textColor} text-sm leading-7 text-[#1C1715]`}>
              {e.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ServiceCommon;
