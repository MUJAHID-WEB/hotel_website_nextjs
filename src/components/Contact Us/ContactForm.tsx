import Image from "next/image";
import React from "react";
import ThreeLine from "../common/ThreeLine";

function ContactForm() {
  const input = [
    {
      type: `text`,
      placeholder: `*Your Name`,
    },
    {
      type: `text`,
      placeholder: `*Your Cellphone`,
    },
    {
      type: `text`,
      placeholder: `*Your Email`,
    },
    {
      type: `text`,
      placeholder: `*Your Message`,
    },
  ];
  return (
    <div className="flex flex-col xl:flex-row items-center xl:gap-[118px] xl:mb-0 mb-[100px]">
      <div className="relative w-[364px] h-[364px] sm:h-[580px] sm:w-[580px] md:w-[770px] md:h-[770px] xl:w-[853px] xl:h-[853px]">
        <Image
          src="/contactimg.png"
          alt="image loading"
          fill
          className="object-contain"
        />
      </div>
      <div className="mt-[50px] xl:mt-0">
        <div className="mb-[30px] flex flex-col items-center">
          {" "}
          <ThreeLine />
        </div>
        <h2 className="text-[32px] text-center leading-[42px] lg:text-[42px] lg:leading-[55px] font-semibold text-[#1C1715] mb-5">
          Contact Us
        </h2>
        <form className="flex flex-col gap-5">
          {input.map((e: any, i: any) => (
            <input
              key={i}
              type={e?.type}
              placeholder={e?.placeholder}
              className="w-[340px] sm:w-[462px] border py-[11px] font-normal pl-5 text-lg leading-7 text-[#1C1715]"
            />
          ))}

          <button className="w-[340px] sm:w-[462px] border py-[11px] font-bold pl-5 text-lg leading-7 text-[#FFFFFF] bg-[#1C1715]">
            Sent message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
