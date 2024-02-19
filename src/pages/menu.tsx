import MenuItems from "@/components/Menu/MenuItems";
import CommonSlider2 from "@/components/common/CommonSlider2";
import Footer from "@/components/common/Footer";
import FooterBottom from "@/components/common/FooterBottom";
import GoHome from "@/components/common/GoHome";
import Navber from "@/components/common/Navber";
import RoomOneColumnBanner from "@/components/common/RoomOneColumnBanner";
import React from "react";

function Menu() {
  const menuSliderImg = [
    {
      img: "/corola.png",
      title: ` Hummus and Pita Chips`,
      description: `A healthy and tasty snack. Made with creamy hummus and crispy pita chips.`,
    },
    {
      img: "/meat.png",
      title: ` Hummus and Pita Chips`,
      description: `A healthy and tasty snack. Made with creamy hummus and crispy pita chips.`,
    },
    {
      img: "/vegetables.png",
      title: ` Hummus and Pita Chips`,
      description: `A healthy and tasty snack. Made with creamy hummus and crispy pita chips.`,
    },
  ];
  return (
    <>
      <Navber />
      <RoomOneColumnBanner image="/menuima.png" title="" subTitle="" />
      <section className="px-2 sm:px-5">
        <GoHome pageName="Menu" />
      </section>
      <MenuItems />
      <CommonSlider2 sliderArr={menuSliderImg} />
      <Footer />
      <FooterBottom />
    </>
  );
}

export default Menu;
