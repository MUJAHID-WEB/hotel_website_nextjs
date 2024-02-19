import React from "react";
import ServiceCommon from "../common/ServiceCommon";
import TitleSubtitle from "../common/TitleSubtitle";
import ThreeLine from "../common/ThreeLine";

function WhatToDo() {
  const whatToDo = [
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
    {
      image: "/musicimg.png",
      title: `ancing with friends`,
      firstText: "D",
      description: `Here is the classic lorem ipsum passage followed by Boparai's odd, yet version`,
    },
    {
      image: "/friendimg.png",
      title: `e with friends`,
      firstText: "B",
      description: `Here is the classic lorem ipsum passage followed by Boparai's odd, yet version`,
    },
    {
      image: "/lonlyman.png",
      title: `editation`,
      firstText: "M",
      description: `Here is the classic lorem ipsum passage followed by Boparai's odd, yet version`,
    },
    {
      image: "/girlhand.png",
      title: `indfulness`,
      firstText: "M",
      description: `Here is the classic lorem ipsum passage followed by Boparai's odd, yet version`,
    },
  ];
  return (
    <section className="bg-[#1C1715] py-[100px]">
      <div className="container">
        <div className="flex flex-col items-center mb-[30px]">
          <ThreeLine color="bg-[#FFFFFF]" />
        </div>
        <div className="mb-10 xl:px-[230px] lg:px-[190px] md:px-[100px] sm:px-[40px] px-5">
          <TitleSubtitle
            textColor="text-[#FFFFFF]"
            title="What to do"
            subTitle="Welcome to the Perfect Holiday section of our website! Here, you will find everything you need to make your stay perfect."
          />
        </div>
        <div className="">
          <ServiceCommon service={whatToDo} textColor="text-[#FFFFFF]" />
        </div>
      </div>
    </section>
  );
}

export default WhatToDo;
