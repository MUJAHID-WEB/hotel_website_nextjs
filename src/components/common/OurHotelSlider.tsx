import Image from "next/image";
import React from "react";
import Slider from "react-slick";

function OurHotelSlider({ sliderOne }: any) {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    slidesToShow: 1.67,
    slidesToScroll: 1,
    className: "ourHotelSlider",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
        },
      },
    ],
  };

  return (
    // <div className="flex flex-row gap-5">
    <Slider {...settings}>
      {sliderOne.map((e: any, i: any) => (
        <div
          key={i}
          className="xl:w-[828px] xl:h-[595px] w-[375px] h-[270px] md:w-[486px] md:h-[350px] relative"
        >
          <Image src={e.img} alt="" fill className="object-cover" />
        </div>
      ))}
    </Slider>
    // </div>
  );
}

export default OurHotelSlider;
