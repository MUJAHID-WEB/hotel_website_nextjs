import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

function RoomSuiteArr() {
  // const [sliderIndex, setSliderIndex] = useState();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
    // beforeChange: (current, next) => setSliderIndex(next),
    // centerMode: true,
    className: "RoomSuiteSlider",

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          infinite: true,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          autoplay: true,
          infinite: true,
        },
      },
    ],
  };

  const roomArr = [
    {
      image: "/pillow.png",
      price: "From 50$",
      title: "ROYAL SUITE",
      bedQuantity: `Sleeps 2, Queen Bed`,
      description: ` The Royal Suite is the most luxurious suite at a hotel. It features a bedroom, a living room.`,
      url: {
        button: "Read More ",
        plus: `+`,
        link: ``,
      },
    },
    {
      image: "/bed1.png",
      price: "From 50$",
      title: "ROYAL SUITE",
      bedQuantity: `Sleeps 2, Queen Bed`,
      description: ` The Royal Suite is the most luxurious suite at a hotel. It features a bedroom, a living room.`,
      url: {
        button: "Read More ",
        plus: `+`,
        link: ``,
      },
    },
    {
      image: "/mirror.png",
      price: "From 50$",
      title: "PRESIDENTIAL SUITE",
      bedQuantity: `Sleeps 2, Queen Bed`,
      description: ` The Presidential Suite is the most luxurious and expensive suite at a hotel.`,
      url: {
        button: "Read More ",
        plus: `+`,
        link: ``,
      },
    },
    {
      image: "/bed2.png",
      price: "From 50$",
      title: "ROYAL SUITE",
      bedQuantity: `Sleeps 2, Queen Bed`,
      description: ` The Royal Suite is the most luxurious suite at a hotel. It features a bedroom, a living room.`,
      url: {
        button: "Read More ",
        plus: `+`,
        link: ``,
      },
    },
    {
      image: "/mirror.png",
      price: "From 50$",
      title: "PRESIDENTIAL SUITE",
      bedQuantity: `Sleeps 2, Queen Bed`,
      description: ` The Presidential Suite is the most luxurious and expensive suite at a hotel.`,
      url: {
        button: "Read More ",
        plus: `+`,
        link: ``,
      },
    },
    {
      image: "/bed2.png",
      price: "From 50$",
      title: "ROYAL SUITE",
      bedQuantity: `Sleeps 2, Queen Bed`,
      description: ` The Royal Suite is the most luxurious suite at a hotel. It features a bedroom, a living room.`,
      url: {
        button: "Read More ",
        plus: `+`,
        link: ``,
      },
    },
  ];
  return (
    <div className="sliderDot">
      <Slider {...settings}>
        {roomArr.map((e: any, i: any) => (
          <div
            key={i}
            className="mt-[22px] xl:w-[455px] lg:w-[330px] md:w-[344px] w-[329px] border-b-[3px] border-[#1C1715] pb-[30px]"
          >
            {/* image here */}
            <div className=" relative xl:h-[455px] lg:h-[330px] md:h-[344px] h-[329px] w-full">
              <Image
                src={e.image}
                alt="image loading"
                fill
                className="object-cover"
              />
              <p className="absolute text-xl leading-[26px] xl:text-2xl xl:leading-8 text-[#1C1715] bottom-0 right-0 font-medium backdrop-blur-[12.5px] bg-white/70 px-5 py-2.5 xl:px-[30px] xl:py-[19px]">
                {e.price}
              </p>
            </div>
            {/* description here */}
            <div className="mt-[33px]">
              <h2 className="text-2xl uppercase leading-8 xl:text-[28px] xl:leading-9 text-[#1C1715] font-bold mb-1">
                {e.title}
              </h2>
              <p className="text-sm leading-7 xl:text-base xl:leading-8 text-[#1C1715] font-normal">
                {e.bedQuantity}
              </p>
              <p className="text-sm leading-7 xl:text-base xl:leading-8 text-[#1C1715] font-normal mt-5 mb-4">
                {e.description}
              </p>
              <Link
                href={e.url.link}
                className="text-lg leading-9 text-[#1C1715] capitalize font-bold"
              >
                {e.url.button} <span className="ml-2">{e.url.plus}</span>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default RoomSuiteArr;
