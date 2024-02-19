import React from "react";
import ThreeLine from "../common/ThreeLine";
import TitleSubtitle from "../common/TitleSubtitle";
import Link from "next/link";
import OurHotelSlider from "../common/OurHotelSlider";

function OurHotel() {
  const imgArr = [
    {
      img: "/bathtap.png",
    },
    {
      img: "/hotelimg1.png",
    },
    {
      img: "/tree.png",
    },
  ];
  return (
    <div className="mt-[50px] xl:mt-[100px]">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <ThreeLine />
        </div>
        <div className="mt-4 md:mt-[30px] xl:px-0 xl:w-[753px] md:px-[104px] lg:px-[150px] px-5 sm:px-[90px]">
          <TitleSubtitle
            textColor=""
            title="OUR HOTEL"
            subTitle="Our elegant hotel features spacious rooms with elegant décor, and all the amenities you need to feel at home. Enjoy a delicious meal in our elegant restaurant, or relax in our luxurious spa. Our hotel is the perfect choice for business or leisure travelers alike. "
          />
        </div>
        <Link
          href=""
          className="text-lg leading-9 text-[#1C1715] justify-center md:mb-[50px] xl:mb-[63px] mb-7 flex flex-row mt-5 capitalize text-center font-bold"
        >
          Read More <span className="ml-2">+</span>
        </Link>
      </div>
      <OurHotelSlider sliderOne={imgArr} />
    </div>
  );
}

export default OurHotel;
