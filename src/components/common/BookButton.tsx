import AppContext from "@/context/AppContext";
import React, { useContext } from "react";

function BookButton() {
  const { setBookNowModal } = useContext(AppContext);
  return (
    <div>
      <button
        type="button"
        onClick={() => setBookNowModal(true)}
        className="text-sm leading-7 text-[#1C1715] font-bold px-[30px] py-[13px] border border-[#1C1715] capitalize"
      >
        Book Now
      </button>
    </div>
  );
}

export default BookButton;
