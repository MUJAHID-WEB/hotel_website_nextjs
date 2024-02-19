import React, { useState } from "react";
import Image from "next/image";
import Slider from "react-slick";

function CommonSlider2({ sliderArr }: any) {
  const [sliderIndex, setSliderIndex] = useState();

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    slidesToShow: 2.3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setSliderIndex(next),
    centerMode: true,
    className: "ourHotelSlider",

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.08,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.01,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {sliderArr.map((e: any, i: any) => (
        <div
          key={i}
          className="relative md:h-[477px] w-[335px] md:w-[708px] xl:w-[758px] h-[221px] sm:h-[350px] xl:h-[508px] mb-[100px]"
        >
          <Image src={e.img} alt="" fill className="object-cover" />
          {i === sliderIndex ? (
            <div className="duration-1000 flex flex-col items-center absolute -bottom-[21%] left-[50%] -translate-x-1/2 -translate-y-[21%] w-[278px] h-[96px] backdrop-blur-[12.5px] bg-white/70 md:h-[132px] justify-center sm:w-[450px] lg:w-[666px]">
              <h3 className="md:text-[28px] md:leading-[37px] text-center text-base leading-[21px] xl:text-[32px] xl:leading-[42px] mb-1 text-[#1C1715] font-semibold">
                {e.title}
              </h3>
              <p className="text-sm leading-7 md:text-base md:leading-8 text-center text-[#1C1715] font-normal">
                {e.description}
              </p>
            </div>
          ) : (
            ""
          )}
        </div>
      ))}
    </Slider>
  );
}

export default CommonSlider2;
