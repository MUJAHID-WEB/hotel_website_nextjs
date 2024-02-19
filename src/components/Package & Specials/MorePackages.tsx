import React from "react";
import ThreeLine from "../common/ThreeLine";
import TitleSubtitle from "../common/TitleSubtitle";
import Image from "next/image";
import Link from "next/link";

function MorePackages() {
  const morePack = [
    {
      image: `/greenpillow.png`,
      price: `From 50$`,
      discount: `-50%`,
      pakTitle: ` SPA PACKAGE`,
      url: {
        link: ``,
        btn: `Learn More`,
      },
      description: ``,
    },
    {
      image: `/coupleimg.png`,
      price: `From 50$`,
      discount: `-50%`,
      pakTitle: ` GETAWAY PACKAGE`,
      url: {
        link: ``,
        btn: `Learn More`,
      },
      description: ``,
    },
    {
      image: `/restimg.png`,
      price: `From 50$`,
      discount: `-50%`,
      pakTitle: ` GIRLS' NIGHT OUT`,
      url: {
        link: ``,
        btn: `Learn More`,
      },
      description: ``,
    },
  ];
  const packList = [
    {
      packName: `breakfast and lunch`,
    },
    {
      packName: `breakfast and lunch`,
    },
    {
      packName: `breakfast and lunch`,
    },
    {
      packName: `breakfast and lunch`,
    },
  ];
  return (
    <div className="container mb-[50px] xl:mb-[100px]">
      <div className="flex flex-col items-center mb-[30px]">
        <ThreeLine />
      </div>
      <div className="px-5 md:px-[50px] lg:px-[140px] xl:px-[180px] mb-10">
        <TitleSubtitle
          title="More Packages"
          subTitle="Welcome to our packages page! Here, you’ll find our latest deals and offers on accommodations and services. We update our packages frequently."
          textColor=""
        />
      </div>
      <div className="flex flex-col items-center md:items-start xl:flex-nowrap md:flex-row md:flex-wrap justify-between gap-[50px]">
        {morePack.map((e: any, i: any) => (
          <div
            key={i}
            className="xl:w-[367px] md:w-[345px] sm:w-[367px] w-[335px]"
          >
            <div className="relative w-full xl:h-[276px] md:h-[259px] sm:h-[276px] h-[335px]">
              <Image
                src={e?.image}
                alt="image loading"
                fill
                className="object-cover"
              />
              <p className="absolute text-xl leading-[26px] text-[#1C1715] bottom-0 left-0 font-bold backdrop-blur-[12.5px] bg-white/70 px-5 py-2.5">
                {e.price}
              </p>
              <p className="absolute capitalize text-base leading-6 text-[#1C1715] right-2.5 top-2.5 font-bold bg-white px-3 py-1">
                {e?.discount}
              </p>
            </div>
            {/* offer here  */}
            <div className="mt-6">
              <h2 className="text-2xl font-medium leading-8 text-[#1C1715] mb-4">
                {e?.pakTitle}
              </h2>
              {/* package list here  */}
              <div className="flex flex-col gap-5">
                {packList.map((e: any, i: any) => (
                  <div key={i} className="flex flex-row items-center">
                    <div className="w-2 h-2 bg-[#888888] mr-2.5"></div>
                    <p className="text-base leading-5 text-[#1C1715] font-normal">
                      {e?.packName}
                    </p>
                  </div>
                ))}
              </div>
              {/* description here  */}
              <p>{e?.description}</p>
            </div>
            {/* button heren  */}
            <div className="mt-[40px]">
              <Link
                href={e?.url.link}
                className="text-base leading-6 font-bold px-[119.7px] xl:px-[125px] md:px-[124.7px] sm:px-[135.92px] py-[11px] bg-[#1C1715] text-[#FFFFFF]"
              >
                {e?.url.btn}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MorePackages;
