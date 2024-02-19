import RoomsViewTwo from "@/components/Room One Column Two/RoomsViewTwo";
import Footer from "@/components/common/Footer";
import FooterBottom from "@/components/common/FooterBottom";
import Navber from "@/components/common/Navber";
import RoomOneColumnBanner from "@/components/common/RoomOneColumnBanner";
import React from "react";

function RoomOneColumnTwo() {
  return (
    <>
      <Navber />
      <RoomOneColumnBanner
        image="/modern2.png"
        title="Rooms"
        subTitle="So when is it okay to use lorem ipsum? First, lorem ipsum works well for staging."
      />
      <RoomsViewTwo />
      <Footer />
      <FooterBottom />
    </>
  );
}

export default RoomOneColumnTwo;
