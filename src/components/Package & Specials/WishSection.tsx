import Link from "next/link";
import React from "react";

function WishSection() {
  const wishArr = [
    {
      title: `Happy Birthday too you`,
      description: `Happy birthday, hotel! We hope you have a fantastic day! Included in your package are, a complimentary room upgrade.`,
      url: {
        link: ``,
        btn: `Read more `,
        plus: `+`,
      },
    },
    {
      title: `Relax & Wellness`,
      description: `The Relax and Wellness package for a hotel website is a four-night package that includes a two-hour massage, a one-hour facial.`,
      url: {
        link: ``,
        btn: `Read more `,
        plus: `+`,
      },
    },
  ];
  return (
    <div className="container mb-[50px] xl:mb-[100px] flex flex-col items-center lg:flex-row lg:items-start lg:justify-between lg:px-[20px] xl:px-0 gap-5 lg:gap-0">
      {wishArr.map((e: any, i: any) => (
        <div
          key={i}
          className="w-[331px] xl:w-[555px] md:w-[714px] lg:w-[470px] sm:w-[600px] border-[5px] border-[#1C1715] md:pt-16 md:pl-16 p-8 "
        >
          <h2 className="text-[32px] lg:pr-5 xl:pr-[105px] leading-[42px] md:text-[42px] md:leading-[55px] font-semibold text-[#1C1715]">
            {e?.title}
          </h2>
          <p className="text-base leading-6 font-normal text-[#1C1715] mt-2 mb-5 md:mt-7 md:mb-8">
            {e?.description}
          </p>
          <Link
            href={e?.url.link}
            className="text-base leading-6 text-[#1C1715] capitalize font-bold"
          >
            {e?.url.btn}
            <span className="ml-2">{e?.url.plus}</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default WishSection;
