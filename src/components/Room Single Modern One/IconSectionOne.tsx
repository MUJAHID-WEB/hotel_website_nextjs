import React from "react";

function IconSectionOne({ commonIcon, bodyClass }: any) {
  return (
    <div className={`${bodyClass} flex flex-row flex-wrap`}>
      {commonIcon.map((e: any, i: any) => (
        <div key={i} className="flex flex-row items-center gap-4">
          <div className="w-12 h-12 flex flex-col items-center justify-center bg-color">
            {e?.svg}
          </div>
          <div className="">
            <p className=" mb-1 text-sm leading-5 text-[#1C1715] font-bold">
              {e.title}
            </p>
            <p className="text-sm leading-5 text-[#AEAEAE] font-normal">
              {e.subTitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IconSectionOne;
