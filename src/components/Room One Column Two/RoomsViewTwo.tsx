import React from "react";
import Swifi from "../svgs/Swifi";
import Sbath from "../svgs/Sbath";
import Scup from "../svgs/Scup";
import Sshild from "../svgs/Sshild";
import Sbell from "../svgs/Sbell";
import CheckAvailability from "../common/CheckAvailability";
import RoomsComponent from "../common/RoomsComponent";
import NumberBtnComp from "../common/NumberBtnComp";

function RoomsViewTwo() {
  const roomsArr = [
    {
      image: `/ambassador.png`,
      price: `From 50$`,
      quality: `Top`,
      bedQuantity: `Sleeps 2, Queen Bed`,
      svg: (
        <>
          <Swifi />
          <Sbath />
          <Scup />
          <Sshild />
          <Sbell />
        </>
      ),
      title: ` AMBASSADOR SUITE`,
      description: ` One word of caution: make sure your client knows that lorem ipsum
      is filler text. You don't want them wondering why you filled
      their website with a foreign language.`,
      url: {
        button: "Read More ",
        plus: `+`,
        link: ``,
      },
    },
    {
      image: `/doublebed.png`,
      price: `From 50$`,
      quality: `Top`,
      bedQuantity: `Sleeps 2, Queen Bed`,
      svg: (
        <>
          <Swifi />
          <Sbath />
          <Scup />
          <Sshild />
          <Sbell />
        </>
      ),
      title: `ROYAL SUITE`,
      description: ` One word of caution: make sure your client knows that lorem ipsum
      is filler text. You don't want them wondering why you filled
      their website with a foreign language.`,
      url: {
        button: "Read More ",
        plus: `+`,
        link: ``,
      },
    },
    {
      image: `/greenpillow.png`,
      price: `From 50$`,
      quality: `Popular`,
      bedQuantity: `Sleeps 2, Queen Bed`,
      svg: (
        <>
          <Swifi />
          <Sbath />
          <Scup />
          <Sshild />
          <Sbell />
        </>
      ),
      title: `GARDEN SUITE`,
      description: ` One word of caution: make sure your client knows that lorem ipsum
      is filler text. You don't want them wondering why you filled
      their website with a foreign language.`,
      url: {
        button: "Read More ",
        plus: `+`,
        link: ``,
      },
    },
    {
      image: `/bigwindow.png`,
      price: `From 50$`,
      quality: `Popular`,
      bedQuantity: `Sleeps 2, Queen Bed`,
      svg: (
        <>
          <Swifi />
          <Sbath />
          <Scup />
          <Sshild />
          <Sbell />
        </>
      ),
      title: `IMPERIAL SUITE`,
      description: ` One word of caution: make sure your client knows that lorem ipsum
      is filler text. You don't want them wondering why you filled
      their website with a foreign language.`,
      url: {
        button: "Read More ",
        plus: `+`,
        link: ``,
      },
    },
    {
      image: `/drawingroom.png`,
      price: `From 50$`,
      quality: `Popular`,
      bedQuantity: `Sleeps 2, Queen Bed`,
      svg: (
        <>
          <Swifi />
          <Sbath />
          <Scup />
          <Sshild />
          <Sbell />
        </>
      ),
      title: `SIGNATURE SUITE`,
      description: ` One word of caution: make sure your client knows that lorem ipsum
      is filler text. You don't want them wondering why you filled
      their website with a foreign language.`,
      url: {
        button: "Read More ",
        plus: `+`,
        link: ``,
      },
    },
  ];

  const pageList = [
    {
      list: {
        number: "1 ",
        url: ``,
      },
    },
    {
      list: {
        number: "2 ",
        url: ``,
      },
    },
    {
      list: {
        number: "3 ",
        url: ``,
      },
    },
    {
      list: {
        number: "4 ",
        url: ``,
      },
    },
    {
      list: {
        number: "5 ",
        url: ``,
      },
    },
  ];
  return (
    <div className="container my-[75px] xl:px-0 lg:px-1.5 px-5 ">
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:justify-between">
        <RoomsComponent data={roomsArr} />
        <div className="hidden lg:block">
          <CheckAvailability borderColor="border-[#DBDBDB]" />
        </div>
      </div>
      {/*number button here */}
      <NumberBtnComp listData={pageList} />
    </div>
  );
}

export default RoomsViewTwo;
