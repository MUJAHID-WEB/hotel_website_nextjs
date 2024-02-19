import React from "react";
import CheckIn2 from "../svgs/CheckIn2";
import CheckOut2 from "../svgs/CheckOut2";
import People2 from "../svgs/People2";

function CheckInOut() {
  const arr = [
    {
      title: "Check-in Date",
      svg: <CheckIn2 />,
    },
    {
      title: "Check-out Date",
      svg: <CheckOut2 />,
    },
    {
      title: "People",
      svg: <People2 />,
    },
  ];
  return (
    <div className="flex flex-col gap-y-5">
      {arr.map((e: any, i: any) => (
        <div
          key={i}
          className="w-full flex flex-row justify-between items-center px-5 border-[#DBDBDB] py-[13px] border"
        >
          <p className="text-sm leading-7 font-normal text-[#1C1715]">
            {e.title}
          </p>
          <div className="">{e?.svg}</div>
        </div>
      ))}
    </div>
  );
}

export default CheckInOut;
