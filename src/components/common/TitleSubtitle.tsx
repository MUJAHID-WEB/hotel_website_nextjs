import React from "react";

function TitleSubtitle({
  title,
  subTitle,
  textColor,
}: {
  title: string;
  subTitle: string;
  textColor: string;
}) {
  return (
    <div className="flex flex-col">
      <h2
        className={`${textColor} xl:text-[42px] text-[32px] mb-5 font-semibold text-center leading-[42px] xl:leading-[55px] text-[#1C1715]`}
      >
        {title}
      </h2>
      <p
        className={`${textColor} md:text-base text-sm leading-7 text-center md:leading-8`}
      >
        {subTitle}
      </p>
    </div>
  );
}

export default TitleSubtitle;
