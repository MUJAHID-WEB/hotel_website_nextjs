import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React, { FC, useState } from "react";

type dropDownProps = {
  open: boolean;
  openCb: (p: boolean) => void;
};

const DropDown: FC<dropDownProps> = ({ openCb, open }: any) => {
  return (
    <div
      className={`fixed inset-0 h-screen w-screen flex flex-row justify-start transition-all items-start ${
        open ? "z-[9999]" : "-z-10"
      } `}
    >
      <div
        className={`bg-black/60 w-full h-full z-[999] backdrop-blur-[1.5px] absolute inset-0 transition-all duration-400 ${
          open ? "opacity-100 z-[9999]" : "opacity-0 -z-10 delay-300"
        } `}
        onClick={() => openCb(false)}
      />
      <div
        className={`w-[467px] bg-white duration-200 h-screen pt-7 origin-left delay-100 transition-all z-[9999] ${
          open ? "scale-x-100" : "scale-x-0"
        } `}
      >
        <ul className="text-start pl-[40px] pr-10">
          <li className="flex flex-row items-center gap-10">
            <button
              type="button"
              onClick={() => openCb(false)}
              className="flex flex-col gap-[7px]"
            >
              <div className="h-1 w-[37px] bg-[#1C1715]"></div>
              <div className="h-1 w-[37px] bg-[#1C1715]"></div>
              <div className="h-1 w-[37px] bg-[#1C1715]"></div>
            </button>
            <div className="uppercase text-2xl text-[#1C1715] font-normal leading-[42px]">
              <Link href="/">HOTEL</Link>
            </div>
          </li>
          <li className="capitalize py-5 text-lg text-[#1C1715] font-bold leading-[23px]">
            <Link href="/">home</Link>
          </li>
          <li className="capitalize text-lg text-[#1C1715] font-bold leading-[23px]">
            <Link href="/about-us">about us</Link>
          </li>
          <li className="">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between group capitalize text-lg text-[#1C1715] font-bold leading-[23px] pt-5 border-b pb-4">
                    <span>rooms</span>
                    <div
                      className={`${
                        open ? "rotate-180 transform" : ""
                      }  text-[#1C1715]`}
                    >
                      <i className="fa-solid fa-caret-up text-lg font-bold"></i>
                    </div>
                  </Disclosure.Button>
                  <Disclosure.Panel className="pl-[30px] pb-5">
                    <ul>
                      <li className="capitalize text-lg hover:text-[#1C1715] text-[#6C6C6D] font-semibold leading-[23px] hover:underline py-5">
                        <Link href="/room-one-column-one">
                          room one column #1
                        </Link>
                      </li>
                      <li className="capitalize text-lg hover:text-[#1C1715] text-[#6C6C6D] font-semibold leading-[23px] hover:underline">
                        <Link href="/room-one-column-two">
                          room one column #2
                        </Link>
                      </li>
                      <li className="capitalize text-lg hover:text-[#1C1715] text-[#6C6C6D] font-semibold leading-[23px] hover:underline py-5">
                        <Link href="">room one column #3</Link>
                      </li>
                      <li className="capitalize text-lg hover:text-[#1C1715] text-[#6C6C6D] font-semibold leading-[23px] hover:underline">
                        <Link href="/room-two-column-one">
                          room two column #1
                        </Link>
                      </li>
                      <li className="capitalize text-lg hover:text-[#1C1715] text-[#6C6C6D] font-semibold leading-[23px] hover:underline py-5">
                        <Link href="">room two column #2</Link>
                      </li>
                      <li className="capitalize text-lg hover:text-[#1C1715] text-[#6C6C6D] font-semibold leading-[23px] hover:underline">
                        <Link href="">room coloumn card</Link>
                      </li>
                    </ul>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </li>
          <li className="capitalize text-lg text-[#1C1715] pt-5 font-bold leading-[23px]">
            <Link href="/explore">explore</Link>
          </li>
          <li className="capitalize text-lg text-[#1C1715] font-bold leading-[23px] py-5">
            <Link href="/package-specials">packege specials</Link>
          </li>
          <li className="capitalize text-lg text-[#1C1715] font-bold leading-[23px]">
            <Link href="/menu">food/menu</Link>
          </li>
          <li className="capitalize text-lg text-[#1C1715] font-bold leading-[23px] py-5">
            <Link href="">our history</Link>
          </li>
          <li className="capitalize text-lg text-[#1C1715] font-bold leading-[23px]">
            <Link href="/contact-us">contact us</Link>
          </li>
        </ul>
        {/* select language here */}
        <div className="absolute bottom-0 bg-[#1C1715] w-full pl-10 pt-[30px] pb-5 pr-[127px]">
          <p className="text-[#6C6C6D] capitalize text-sm leading-7 font-normal">
            city
          </p>
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between group capitalize text-base text-[#FFFFFF] font-bold leading-[21px] border-[#6C6C6D] pt-5 border-b pb-4">
                  <span>Prague</span>
                  <div
                    className={`${
                      open ? "rotate-180 transform" : ""
                    }  text-[#6C6C6D]`}
                  >
                    <i className="fa-solid fa-caret-up text-base font-bold text-[#FFFFFF]"></i>
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="">
                  <div className="capitalize text-sm text-[#6C6C6D] font-normal leading-7 pt-5">
                    <Link href="">Language</Link>
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default DropDown;
