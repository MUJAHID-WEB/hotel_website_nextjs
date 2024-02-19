import React from "react";
import ThreeLine from "../common/ThreeLine";
import TitleSubtitle from "../common/TitleSubtitle";
import Image from "next/image";

function Instagram() {
  const insta = [
    {
      image: "/insta1.png",
    },
    {
      image: "/insta2.png",
    },
    {
      image: "/insta3.png",
    },
    {
      image: "/insta4.png",
    },
  ];
  return (
    <div className="xl:py-[120px] md:py-[100px] bg-[#1C1715] py-[80px]">
      <div className="container">
        <div className="flex flex-col items-center">
          <ThreeLine color="bg-[#FFFFFF]" />
        </div>
        <div className="xl:px-[270px] px-5 md:px-[100px] sm:px-10 lg:px-[200px]">
          <TitleSubtitle
            textColor="text-[#FFFFFF]"
            title="#instagram"
            subTitle="We are on Instagram! Follow us to see updates from our hotel, as well as photos and videos of our guests and staff having fun!"
          />
        </div>
        <div className="mt-[25px] flex flex-row flex-wrap items-center justify-center gap-5">
          {insta.map((e: any, i: any) => (
            <div
              key={i}
              className="relative w-[158px] h-[158px] sm:w-[270px] sm:h-[270px] md:w-[340px] md:h-[340px] xl:w-[270px] xl:h-[270px]"
            >
              <Image
                src={e.image}
                alt="image"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Instagram;
