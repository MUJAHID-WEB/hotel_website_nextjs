import Link from "next/link";
import React from "react";

function ContactProcess() {
  const process = [
    {
      icon: `fa-solid fa-mobile-screen-button`,
      title: `Give Us a Call`,
      description: `(000) 0000 000`,
    },
    {
      icon: `fa-solid fa-envelope`,
      title: `Send Us an Email`,
      description: `example.site@gmail.com`,
    },
    {
      icon: `fa-solid fa-message`,
      title: `Drop By and Talk`,
      description: `We look forward to welcoming you soon!`,
    },
  ];
  return (
    <div className="container justify-between flex flex-row flex-wrap mb-[100px] px-5 xl:px-0 gap-5">
      {process.map((e: any, i: any) => (
        <div key={i} className="flex flex-row items-center">
          <i
            className={`${e?.icon} text-[#1C1715] font-medium text-2xl leading-8`}
          ></i>
          <div className="flex flex-col ml-5">
            <h3 className="text-[#1C1715] text-2xl leading-8 font-medium">
              {e?.title}
            </h3>
            <p>
              <Link
                href=""
                className="text-lg leading-7 text-[#1C1715] font-normal"
              >
                {e?.description}
              </Link>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContactProcess;
