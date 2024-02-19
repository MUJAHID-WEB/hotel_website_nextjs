import React from "react";
import OurHotelSlider from "../common/OurHotelSlider";

function SingleOneBanner() {
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

  return <OurHotelSlider sliderOne={imgArr} />;
}

export default SingleOneBanner;
