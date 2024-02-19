import ExploreBanner from "@/components/Explore/ExploreBanner";
import ExploreContent from "@/components/common/ExploreContent";
import WhatToDo from "@/components/Explore/WhatToDo";
import Footer from "@/components/common/Footer";
import FooterBottom from "@/components/common/FooterBottom";
import GoHome from "@/components/common/GoHome";
import Navber from "@/components/common/Navber";
import React from "react";

function Explore() {
  const exploreArr = [
    {
      image: `/cameraman.png`,
      star: `fa-solid fa-star`,
      rate: `5.0 (230)`,
      distance: `10 km away`,
      packageTitle: `Adventure Package`,
      description: `Includes a one night stay in a luxurious room, a $100 credit towards activities such as skiing, rafting, and golfing, and a bottle of champagne.`,
      price: `From 19$ per person`,
      url: {
        link: ``,
        btn: `Learn More`,
      },
    },
    {
      image: `/iceman.png`,
      star: `fa-solid fa-star`,
      rate: `5.0 (235)`,
      distance: `10 km away`,
      packageTitle: `Getaway Package`,
      description: `The Getaway Package is a perfect way to celebrate a special occasion or simply reconnect with your loved one. The package includes a one-night stay in a luxurious suite, a bottle of champagne, breakfast in bed, and a romantic dinner for two.`,
      price: `From 19$ per person`,
      url: {
        link: ``,
        btn: `Learn More`,
      },
    },
    {
      image: `/forest.png`,
      star: `fa-solid fa-star`,
      rate: `5.0 (239)`,
      distance: `10 km away`,
      packageTitle: `Pose For Portraits With A Photographer`,
      description: `One brave soul did take a stab at translating the almost-Latin. According to The Guardian, Jaspreet Singh Boparai undertook the challenge with the goal of making the text “precisely as incoherent in English as it is in Latin - and to make it incoherent.`,
      price: `From 20$ per person`,
      url: {
        link: ``,
        btn: `Learn More`,
      },
    },
    {
      image: `/guitarist.png`,
      star: `fa-solid fa-star`,
      rate: `5.0 (230)`,
      distance: `10 km away`,
      packageTitle: `Hit the beach`,
      description: `Relax on the beach with a good book, listen to the waves, and enjoy the sun. Relax on the beach with a good book, listen to the waves, and enjoy the sun.`,
      price: `From 25$ per person`,
      url: {
        link: ``,
        btn: `Learn More`,
      },
    },
  ];
  return (
    <>
      <Navber />
      <ExploreBanner />
      <section className="ml-[25px] sm:ml-[40px]">
        <GoHome pageName="Explore" />
      </section>
      <ExploreContent exploreData={exploreArr} />
      <WhatToDo />
      <Footer />
      <FooterBottom />
    </>
  );
}

export default Explore;
