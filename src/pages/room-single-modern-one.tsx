import SingleOneBanner from "@/components/Room Single Modern One/SingleOneBanner";
import YourReservationSection from "@/components/Room Single Modern One/YourReservationSection";
import Footer from "@/components/common/Footer";
import FooterBottom from "@/components/common/FooterBottom";
import Navber from "@/components/common/Navber";
import React from "react";

function RoomSingleModernOne() {
  return (
    <>
      <Navber />
      <SingleOneBanner />
      <YourReservationSection />
      <Footer />
      <FooterBottom />
    </>
  );
}

export default RoomSingleModernOne;
