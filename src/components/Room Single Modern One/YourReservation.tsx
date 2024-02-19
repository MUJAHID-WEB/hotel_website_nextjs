import React from "react";
import CheckInOut from "../common/CheckInOut";

function YourReservation() {
  return (
    <div className="w-[370px] px-[30px] pt-[60px] pb-[70px] border-[10px] border-[#1C1715]">
      <h4 className="text-2xl leading-8 text-[#1C1715] font-medium mb-6">
        Your Reservation
      </h4>
      <CheckInOut />
      <h4 className="text-2xl leading-8 text-[#1C1715] font-medium mt-9 mb-6">
        Extra Services
      </h4>
      <div className="flex flex-row justify-between mb-6 pt-6 border-t">
        <h4 className="text-2xl leading-8 text-[#1C1715] font-medium">
          Your Price:
        </h4>
        <h4 className="text-2xl leading-8 text-[#1C1715] font-medium">70$</h4>
      </div>
      {/* bookNow button  */}
      <button
        type="button"
        className="w-full h-[50px] bg-[#1C1715] text-center flex flex-col text-[#FFFFFF] justify-center"
      >
        BOOKING
      </button>
    </div>
  );
}

export default YourReservation;
