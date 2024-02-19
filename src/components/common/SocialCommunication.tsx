import Link from "next/link";
import React from "react";

function SocialCommunication() {
  return (
    <div className="flex flex-row">
      <div>
        <Link href="">
          <i className="fa-brands fa-facebook-f text-[#1C1715] font-normal text-lg leading-9 mr-5"></i>
        </Link>
      </div>
      <div className="border-x">
        <Link href="">
          <i className="fa-brands fa-twitter text-[#1C1715] font-normal text-lg leading-9 mx-[23px]"></i>
        </Link>
      </div>
      <div className="">
        <Link href="">
          <i className="fa-brands fa-instagram text-[#1C1715] font-normal text-lg leading-9 ml-5 mr-[38px]"></i>
        </Link>
      </div>
    </div>
  );
}

export default SocialCommunication;
