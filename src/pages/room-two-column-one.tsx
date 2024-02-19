import RoomOneColumnBanner from "@/components/common/RoomOneColumnBanner";
import Footer from "@/components/common/Footer";
import FooterBottom from "@/components/common/FooterBottom";
import Navber from "@/components/common/Navber";
import React from "react";
import RoomViewTwoColumnOne from "@/components/Room Two Column One/RoomViewTwoColumnOne";

function RoomTwoColumnOne() {
  return (
    <>
      <Navber />
      <RoomOneColumnBanner
        image="/modern3.png"
        title="Rooms"
        subTitle="So when is it okay to use lorem ipsum? First, lorem ipsum works well for staging."
      />
      <RoomViewTwoColumnOne />
      <Footer />
      <FooterBottom />
    </>
  );
}

export default RoomTwoColumnOne;
