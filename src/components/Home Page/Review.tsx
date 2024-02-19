import React from "react";
import ThreeLine from "../common/ThreeLine";
import TitleSubtitle from "../common/TitleSubtitle";
import Image from "next/image";

function Review() {
  const review = [
    {
      logo: `/tripadvisor.png`,
      star: `fa-solid fa-star`,
      description: `Take a deep dive and try our list of over 40 unique generators, find placeholder images for your next design, or add a lorem ipsum plugin to the CMS or text editor of your choice.`,
      name: `Marii Brown`,
      date: `01/02/2021`,
    },
    {
      logo: `/tripadvisor.png`,
      star: `fa-solid fa-star`,
      description: `Take a deep dive and try our list of over 40 unique generators, find placeholder images for your next design, or add a lorem ipsum plugin to the CMS or text editor of your choice.`,
      name: `Marii Brown`,
      date: `01/02/2021`,
    },
    {
      logo: `/tripadvisor.png`,
      star: `fa-solid fa-star`,
      description: `Take a deep dive and try our list of over 40 unique generators, find placeholder images for your next design, or add a lorem ipsum plugin to the CMS or text editor of your choice.`,
      name: `Marii Brown`,
      date: `01/02/2021`,
    },
  ];
  return (
    <div className="container mb-[50px] xl:mb-[100px]">
      <div className="flex flex-col items-center">
        <ThreeLine color="" />
      </div>
      <div className="px-5 xl:px-[280px] mt-[30px] mb-[25px]">
        <TitleSubtitle
          title="Review"
          subTitle="We use a third-party review aggregator, TripAdvisor, to collect and display hotel reviews. "
        />
      </div>
      {/* reviwe here  */}
      <div className="flex flex-col md:flex-row items-center justify-center md:flex-wrap gap-5">
        {review.map((e: any, i: any) => (
          <div
            key={i}
            className="w-[329px] md:w-[344px] xl:w-[365px] border-[2px] flex flex-col items-center pt-[43px]"
          >
            <div className="relative w-[214px] h-[65px] border-b-[2px] border-[#1C1715]">
              <Image
                src={e.logo}
                fill
                alt="image loading"
                className="object-contain"
              />
            </div>
            <div className="mt-5 mb-[30px] font-bold text-base">
              <i className={`${e.star} text-[#FFC804]`}></i>
              <i className={`${e.star} text-[#FFC804] mx-2`}></i>
              <i className={`${e.star} text-[#FFC804]`}></i>
              <i className={`${e.star} text-[#FFC804] mx-2`}></i>
              <i className={`${e.star} text-[#FFC804]`}></i>
            </div>
            <p className="text-base leading-8 text-[#1C1715] mb-[50px] mx-[25px] text-center">
              {e.description}
            </p>
            <div className="w-full bg-[#1C1715] py-3">
              <p className="text-sm leading-7 text-[#FFFFFF] font-bold text-center">
                {e.name}
              </p>
              <p className="text-sm leading-7 text-[#FFFFFF] font-normal text-center">
                {e.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Review;
