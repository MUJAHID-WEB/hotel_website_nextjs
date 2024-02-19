import React from "react";
import TitleSubtitle from "../common/TitleSubtitle";
import ThreeLine from "../common/ThreeLine";
import Link from "next/link";

function ApartmentsRates() {
  const apartmentArr = [
    {
      title: `High Season`,
      description: `$499.00 / apartment / night`,
      date: ` May 15th to October 15th 2018`,
      button: {
        url: ``,
        text: `CHECK AVAILABILITY`,
      },
    },
    {
      title: `High Season`,
      description: `$499.00 / apartment / night`,
      date: ` May 15th to October 15th 2018`,
      button: {
        url: ``,
        text: `CHECK AVAILABILITY`,
      },
    },
    {
      title: `High Season`,
      description: `$499.00 / apartment / night`,
      date: ` May 15th to October 15th 2018`,
      button: {
        url: ``,
        text: `CHECK AVAILABILITY`,
      },
    },
  ];
  return (
    <div className="container mb-[100px] px-5 xl:px-0">
      <div className="flex flex-col items-center mb-[30px]">
        <ThreeLine />
      </div>
      <TitleSubtitle
        title="Apartments Rates"
        subTitle="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. "
        textColor=""
      />
      <div className="flex flex-col gap-y-[30px]">
        {apartmentArr.map((e: any, i: any) => (
          <div
            key={i}
            className="mt-5 flex flex-col md:flex-row md:justify-between items-center"
          >
            {/* column one */}
            <div className="">
              <h3 className="text-lg leading-7 text-[#1C1715] font-bold capitalize">
                {e.title}
              </h3>
              <p className="text-base leading-6 text-[#1C1715] font-normal mt-2">
                {e.description}
              </p>
            </div>
            {/* column two  */}
            <p className="text-base leading-6 text-[#1C1715] font-normal mt-2">
              {e.date}
            </p>
            {/* column three  */}
            <div className="mt-[40px] md:mt-0">
              <Link
                href={e.button.url}
                className="uppercase text-base leading-6 font-bold text-[#FFFFFF] bg-[#1C1715] px-[76px] md:px-[22px] py-3"
              >
                {e.button.text}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ApartmentsRates;
