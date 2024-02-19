import AppContext from "@/context/AppContext";
import Link from "next/link";
import React, { useContext, useState } from "react";
import BookNowModal from "./BookNowModal";
import DropDown from "./DropDown";
import SocialCommunication from "./SocialCommunication";
import BookButton from "./BookButton";

function Navber() {
  const [open, setOpen] = useState<boolean>(false);
  const { setBookNowModal } = useContext(AppContext);
  return (
    <section className="bg-white">
      <nav className="container z-10  py-5  px-5 md:px-[30px] xl:px-0">
        <ul className="flex flex-row justify-between items-center">
          {/* part one here */}
          <li className="flex flex-row items-center gap-[60px]">
            {/* nav icon here */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex flex-col gap-[7px] transition"
            >
              <div className="h-1 w-[37px] bg-[#1C1715]"></div>
              <div className="h-1 w-[37px] bg-[#1C1715]"></div>
              <div className="h-1 w-[37px] bg-[#1C1715]"></div>
            </button>
            <DropDown open={open} openCb={(e) => setOpen(e)} />

            {/* language area here */}
            <div className="text-base leading-7 text-[#1C1715] uppercase font-extrabold hidden md:block">
              En
              <i className="fa-solid fa-caret-down ml-[5px] h-2 w-[11px] text-[#1C1715]"></i>
            </div>
          </li>
          {/* part two here */}
          <li className="uppercase text-2xl text-[#1C1715] font-normal leading-[42px] text-center hidden md:block">
            <Link href="/">HOTEL</Link>
          </li>
          <div className="flex flex-row justify-between items-center">
            <div className="hidden md:block">
              <SocialCommunication />
            </div>
            {/*book now button here / open a modal */}
            <BookNowModal />

            {/* button here  */}
            <BookButton />
          </div>
        </ul>
      </nav>
    </section>
  );
}

export default Navber;
