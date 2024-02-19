import RoomOneColumnBanner from "@/components/common/RoomOneColumnBanner";
import Footer from "@/components/common/Footer";
import FooterBottom from "@/components/common/FooterBottom";
import Navber from "@/components/common/Navber";
import React from "react";
import RoomsViewOne from "@/components/Room One Column One/RoomsViewOne";

const RoomOneColumnOne = () => {
  return (
    <>
      <Navber />
      <RoomOneColumnBanner
        image="/modern1.png"
        title="Rooms"
        subTitle="So when is it okay to use lorem ipsum? First, lorem ipsum works well for staging."
      />
      <RoomsViewOne />
      <Footer />
      <FooterBottom />
    </>
  );
};

export default RoomOneColumnOne;
