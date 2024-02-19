import React from "react";
import ThreeLine from "../common/ThreeLine";
import TitleSubtitle from "../common/TitleSubtitle";
import Wifi from "../svgs/Wifi";
import Bath from "../svgs/Bath";
import Cup from "../svgs/Cup";
import Safe from "../svgs/Safe";
import Alarm from "../svgs/Alarm";

function AtYourService() {
  const service = [
    {
      svg: <Wifi />,
      title: `Fast WiFi`,
    },
    {
      svg: <Bath />,
      title: `Bath`,
    },
    {
      svg: <Cup />,
      title: `Coffee`,
    },
    {
      svg: <Safe />,
      title: `Safe`,
    },
    {
      svg: <Alarm />,
      title: `Alarm`,
    },
  ];
  return (
    <div className="container mb-[50px] xl:mb-[100px]">
      <div className="flex flex-row justify-center">
        <ThreeLine />
      </div>
      <div className="mt-[30px] xl:px-[300px] px-5 sm:px-[70px] md:px-[104px] lg:px-[240px]">
        <TitleSubtitle
          textColor=""
          title="AT YOUR SERVICE"
          subTitle="This package is designed for couples who want to enjoy a romantic weekend getaway at a hotel."
        />
      </div>
      <div className="flex flex-row justify-between xl:mt-[50px] mt-[25px]">
        {service.map((e: any, i: any) => (
          <div key={i} className="flex flex-col items-center justify-center">
            <div className="mb-5">{e.svg}</div>
            <p className="text-lg leading-9 text-[#1C1715]">{e.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AtYourService;
