import Review from "@/components/Home Page/Review";
import ApartmentsRates from "@/components/Room Single Modern Two/ApartmentsRates";
import KitchenBanner from "@/components/Room Single Modern Two/KitchenBanner";
import ModernSectionTwo from "@/components/Room Single Modern Two/ModernSectionTwo";
import ModernTwoAbout from "@/components/Room Single Modern Two/ModernTwoAbout";
import SingleModernTwo from "@/components/Room Single Modern Two/SingleModernTwo";
import Footer from "@/components/common/Footer";
import FooterBottom from "@/components/common/FooterBottom";
import Navber from "@/components/common/Navber";
import React from "react";

function RoomSingleModernTwo() {
  return (
    <>
      <Navber />
      <SingleModernTwo />
      <ModernSectionTwo />
      <ModernTwoAbout />
      <KitchenBanner />
      <ApartmentsRates />
      <Review />
      <Footer />
      <FooterBottom />
    </>
  );
}

export default RoomSingleModernTwo;
