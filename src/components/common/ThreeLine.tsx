import React from "react";

function ThreeLine({ color }: any) {
  return (
    <div className="flex flex-row gap-[6px] items-end">
      <div className={`w-[1px] h-[19px] bg-[#1C1715] ${color} `}></div>
      <div className={`w-[1px] h-[76px] bg-[#1C1715] ${color} `}></div>
      <div className={`w-[1px] h-[40px] bg-[#1C1715] ${color} `}></div>
    </div>
  );
}

export default ThreeLine;
