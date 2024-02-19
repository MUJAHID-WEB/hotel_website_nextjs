import Link from "next/link";
import React, { useContext } from "react";
import SocialCommunication from "./SocialCommunication";
import AppContext from "@/context/AppContext";

function Footer() {
  const { setBookNowModal } = useContext(AppContext);
  return (
    <div className="py-[90px] border-t">
      <div className="container flex flex-col items-center xl:items-start xl:flex-row xl:justify-between">
        {/* 1st column here */}
        <div className="text-center xl:text-start flex flex-col">
          <Link
            href="/about-us"
            className="text-[#1C1715] text-center xl:text-start text-xl leading-7 font-bold capitalize"
          >
            About Us
          </Link>
          <p className="xl:w-[366px] xl:pr-[40px] mb-[30px] xl:mb-0 mx-5 xl:mx-0 text-sm md:px-[100px] xl:px-0 leading-7 text-[#1C1715] mt-4">
            Our hotel is a smoke–free, pet–friendly hotel with a free hot
            breakfast buffet and free WiFi. We offer a variety of rooms and
            suites, perfect for business and leisure travelers alike.
          </p>
        </div>
        {/* 2nd/3rd column here  */}
        {/* <div className="flex flex-row gap-[83px] mt-[25px] mb-[31px]"> */}
        {/* 2nd column here */}
        <div className="w-full px-5 sm:px-[30px] md:px-[90px] justify-between mb-[30px] lg:px-[215px] xl:px-0 xl:justify-start xl:flex-col flex flex-row">
          <div>
            <Link
              href="/package-specials"
              className="text-[#1C1715] text-xl leading-7 font-bold capitalize"
            >
              Packages
            </Link>
          </div>
          <div className="xl:my-[35px]">
            <Link
              href=""
              className="text-[#1C1715] text-xl leading-7 font-bold capitalize"
            >
              Rooms
            </Link>
          </div>
          <div>
            <Link
              href="/menu"
              className="text-[#1C1715] text-xl leading-7 font-bold capitalize"
            >
              Menu Page
            </Link>
          </div>
        </div>
        {/* 3rd column here */}
        <div className="flex flex-row w-full px-5 sm:px-[30px] md:px-[90px] lg:px-[215px] xl:px-0 xl:justify-start xl:flex-col justify-between">
          <div>
            <Link
              href=""
              className="text-[#1C1715] text-xl leading-7 font-bold capitalize"
            >
              Gallery
            </Link>
          </div>
          <div className="xl:my-[35px]">
            <Link
              href=""
              className="text-[#1C1715] text-xl leading-7 font-bold capitalize"
            >
              Blog
            </Link>
          </div>
          <div>
            <Link
              href="/contact-us"
              className="text-[#1C1715] text-xl leading-7 font-bold capitalize"
            >
              Contact Us
            </Link>
          </div>
        </div>
        {/* </div> */}
        {/* 4th column here */}

        <div className="flex xl:mt-0 mt-[50px] flex-col md:flex-row xl:flex-col xl:gap-0 md:gap-[70px] justify-center xl:justify-start items-center xl:items-start">
          <div>
            <Link
              href=""
              className="text-[#1C1715] xl:text-start text-xl leading-7 font-bold capitalize"
            >
              Get Social
            </Link>
          </div>

          <div className="my-[30px] ml-[30px] xl:ml-0">
            <SocialCommunication />
          </div>
          <div className="md:-ml-[30px] xl:ml-0">
            <button
              type="button"
              onClick={() => setBookNowModal(true)}
              className="text-base leading-7 text-[#1C1715] font-bold px-[120px] md:px-[40px] sm:px-[200px] py-[13px] border border-[#1C1715] capitalize"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
