import HotelVideo from "@/components/About Us/HotelVideo";
import OurHotel from "@/components/Home Page/OurHotel";
import Review from "@/components/Home Page/Review";
import Footer from "@/components/common/Footer";
import FooterBottom from "@/components/common/FooterBottom";
import GoHome from "@/components/common/GoHome";
import Navber from "@/components/common/Navber";
import RoomOneColumnBanner from "@/components/common/RoomOneColumnBanner";
import ServiceCommon from "@/components/common/ServiceCommon";
import ThreeLine from "@/components/common/ThreeLine";
import TitleSubtitle from "@/components/common/TitleSubtitle";
import React from "react";

function AboutUs() {
  const teamArr = [
    {
      image: "/team1.png",
      title: `ain Calzoni`,
      firstText: "Z",
      description: `Co-owner at Hotel`,
    },
    {
      image: "/team2.png",
      title: `ulce Bergson`,
      firstText: "D",
      description: `Co-owner at Hotel`,
    },
    {
      image: "/team3.png",
      title: `ain Calzoni`,
      firstText: "Z",
      description: `Co-owner at Hotel`,
    },
    {
      image: "/team4.png",
      title: `ulce Bergson`,
      firstText: "d",
      description: `Co-owner at Hotel`,
    },
    {
      image: "/team1.png",
      title: `ain Calzoni`,
      firstText: "Z",
      description: `Co-owner at Hotel`,
    },
    {
      image: "/team2.png",
      title: `ulce Bergson`,
      firstText: "D",
      description: `Co-owner at Hotel`,
    },
    {
      image: "/team3.png",
      title: `ain Calzoni`,
      firstText: "Z",
      description: `Co-owner at Hotel`,
    },
    {
      image: "/team4.png",
      title: `ulce Bergson`,
      firstText: "d",
      description: `Co-owner at Hotel`,
    },
  ];
  return (
    <>
      <Navber />
      <RoomOneColumnBanner image="/aboutbanner.png" title="" subTitle="" />
      <section className="container px-5 xl:px-0 mb-[100px]">
        <GoHome pageName="About Us" />
        <p className="text-lg text-[#1C1715] leading-7 font-normal">
          One brave soul did take a stab at translating the
          almost-not-quite-Latin. According to The Guardian, Jaspreet Singh
          Boparai undertook the challenge with the goal of making the text
          “precisely as incoherent in English as it is in Latin - and to make it
          incoherent in the same way”.
        </p>
        <p className="text-lg text-[#1C1715] leading-7 font-normal mt-10">
          Nick Richardson described the translation “like extreme Mallarmé, or a
          Burroughsian cut-up, or a paragraph of Finnegans Wake. Bits of it have
          surprising power: the desperate insistence on loving and pursuing
          sorrow, for instance, that is cheated out of its justification.
        </p>
      </section>
      <section className="mb-[100px]">
        {" "}
        <OurHotel />
      </section>
      <HotelVideo />
      <section className="container mb-[100px]">
        <div className="flex flex-col items-center mb-[30px]">
          <ThreeLine />
        </div>
        <div className="mb-10 xl:px-[230px] lg:px-[190px] md:px-[100px] sm:px-[40px] px-5">
          <TitleSubtitle
            title="Our Team"
            subTitle="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesette"
            textColor=""
          />
        </div>
        <ServiceCommon service={teamArr} textColor />
      </section>
      <Review />
      <Footer />
      <FooterBottom />
    </>
  );
}

export default AboutUs;
