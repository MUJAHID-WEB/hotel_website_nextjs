import React from "react";
import ServiceCommon from "../common/ServiceCommon";
import TitleSubtitle from "../common/TitleSubtitle";
import ThreeLine from "../common/ThreeLine";

function APerfectHoliday() {
  const holydayArr = [
    {
      image: "/gameimage.png",
      title: `lay games`,
      firstText: "P",
      description: `Here is the classic lorem ipsum passage followed by Boparai's odd, yet version`,
    },
    {
      image: "/yoga.png",
      title: `o Yoga`,
      firstText: "D",
      description: `Here is the classic lorem ipsum passage followed by Boparai's odd, yet version`,
    },
    {
      image: "/relax.png",
      title: `elax`,
      firstText: "R",
      description: `Here is the classic lorem ipsum passage followed by Boparai's odd, yet version`,
    },
    {
      image: "/fire.png",
      title: `e here now`,
      firstText: "B",
      description: `Here is the classic lorem ipsum passage followed by Boparai's odd, yet version`,
    },
  ];
  return (
    <div className="container mb-[50px] xl:mb-[100px]">
      <div className="flex flex-col items-center mb-[30px]">
        <ThreeLine color="" />
      </div>
      <div className="xl:px-[230px] lg:px-[190px] md:px-[100px] sm:px-[40px] px-5">
        <TitleSubtitle textColor="" title="A Perfect Holiday" subTitle="" />
      </div>
      <div className="">
        <ServiceCommon service={holydayArr} textColor="" />
      </div>
    </div>
  );
}

export default APerfectHoliday;
