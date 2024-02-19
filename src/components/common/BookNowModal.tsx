import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useContext, useState } from "react";
import CheckIn from "@/components/svgs/CheckIn";
import CheckOut from "@/components/svgs/CheckOut";
import PeopleSvg from "@/components/svgs/PeopleSvg";
import AppContext from "@/context/AppContext";

function BookNowModal() {
  const { state, setBookNowModal } = useContext(AppContext);

  const arr = [
    {
      title: "Check-in Date",
      svg: <CheckIn />,
    },
    {
      title: "Check-out Date",
      svg: <CheckOut />,
    },
    {
      title: "People",
      svg: <PeopleSvg />,
    },
  ];
  return (
    <>
      <Transition appear show={state.bookNowModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative"
          onClose={() => setBookNowModal(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[375px] md:w-[620px] lg:w-[940px] relative transform overflow-hidden bg-[#1C1715] p-5 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h2"
                    className="text-[32px] mt-[115px] font-bold leading-[42px] text-[#FFFFFF] text-center"
                  >
                    Booking
                  </Dialog.Title>
                  <div className="flex flex-col lg:flex-row lg:gap-2">
                    {arr.map((e: any, i: any) => (
                      <div
                        key={i}
                        className="mt-5 w-full lg:w-[300px] flex flex-row justify-between items-center px-5 border-[#FFFFFF] py-[13px] border"
                      >
                        <p className="text-sm leading-7 font-normal text-[#FFFFFF]">
                          {e.title}
                        </p>
                        <div className="">{e.svg}</div>
                      </div>
                    ))}
                  </div>

                  <div
                    className="bg-[#FFFFFF] first-letter:
                   mb-[183px] text-sm leading-7 text-[#1C1715] mt-5 py-[11px] font-bold text-center"
                  >
                    SEARCH
                  </div>
                  <div className="absolute top-[55px] right-[20px]">
                    <button
                      type="button"
                      className="flex flex-col"
                      onClick={() => setBookNowModal(false)}
                    >
                      <div className="h-1 w-[33px] bg-[#FFFFFF] -translate-y-5 rotate-45"></div>
                      <div className="h-1 w-[33px] bg-[#FFFFFF] -translate-y-6 -rotate-45"></div>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default BookNowModal;
