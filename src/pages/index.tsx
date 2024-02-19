import AtYourService from "@/components/Home Page/AtYourService";
import Footer from "@/components/common/Footer";
import HomeBanner from "@/components/Home Page/HomeBanner";
import Instagram from "@/components/Home Page/Instagram";
import OurHotel from "@/components/Home Page/OurHotel";
import Review from "@/components/Home Page/Review";
import RoomSuite from "@/components/Home Page/RoomSuite";
import Welcome from "@/components/Home Page/Welcome";
import WhatsNearby from "@/components/Home Page/WhatsNearby";
import Navber from "@/components/common/Navber";
import FooterBottom from "@/components/common/FooterBottom";
import ServiceCommon from "@/components/common/ServiceCommon";
import CommonSlider2 from "@/components/common/CommonSlider2";

export default function Home() {
  const secTwo = [
    {
      image: "/Elegant.png",
      title: `esidence`,
      firstText: "R",
      description: ` Whether you are staying for business or pleasure, our hotel provides an oasis from the everyday. From the moment you walk in the door, you will feel pampered.`,
    },
    {
      image: "/Impeccable.png",
      title: `astronomy`,
      firstText: "G",
      description: ` Our restaurants offer cuisine of the highest standard: Russian, European, barbecue menus and culinary delights with a touch of exotic from our chef.`,
    },
    {
      image: "/Rejuvenating.png",
      title: `ellness & SPA`,
      firstText: "W",
      description: `The hotel spa is a luxurious place to relax and rejuvenate. The spa offers a variety of services such as massages, facials, and body treatments.`,
    },
    {
      image: "/Event.png",
      title: `vents`,
      firstText: "E",
      description: `The hotel event venue is the perfect place to host your next event. With a variety of spaces to choose from, we can accommodate events of all sizes.`,
    },
  ];

  const IncludedRoomRate = [
    {
      img: "/includedimg1.png",
      title: ` Included in the Room Rate`,
      description: `International breakfast from 07 to 11`,
    },
    {
      img: "/twomirror.png",
      title: ` Excluded in the Room Rate`,
      description: `International lunch from 01 to 03`,
    },
    {
      img: "/stairs.png",
      title: ` Excluded in the Room Rate`,
      description: `International dinner from 08 to 11`,
    },
  ];
  return (
    <>
      <Navber />
      <HomeBanner />
      <ServiceCommon service={secTwo} />
      <OurHotel />
      <Welcome />
      <RoomSuite />
      <AtYourService />
      <CommonSlider2 sliderArr={IncludedRoomRate} />
      <WhatsNearby />
      <Review />
      <Instagram />
      <Footer />
      <FooterBottom />
    </>
  );
}
