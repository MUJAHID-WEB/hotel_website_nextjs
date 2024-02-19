import Link from "next/link";
import React from "react";

function NumberBtnComp({listData}) {
  return (
    <div>
      <div className="mt-[72px] gap-[35px] flex flex-row justify-center items-center xl:w-[713px] lg:w-[640px] md:w-[708px] sm:w-[600px] w-[320px]">
        {listData.map((e: any, i: any) => (
          <div key={i} className="">
            <Link
              href={e.list.url}
              className="text-sm leading-7 text-[#1C1715] font-bold hover:text-[#FFFFFF] hover:bg-[#1C1715] hover:py-1.5 hover:px-4"
            >
              {e.list.number}
            </Link>
          </div>
        ))}
        <Link
          href=""
          className="text-sm leading-7 text-[#AEAEAE] border px-6 my-1.5 font-bold"
        >
          Next
        </Link>
      </div>
    </div>
  );
}

export default NumberBtnComp;
