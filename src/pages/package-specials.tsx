import APerfectHoliday from "@/components/Package & Specials/APerfectHoliday";
import AdventurePackage from "@/components/Package & Specials/AdventurePackage";
import MorePackages from "@/components/Package & Specials/MorePackages";
import WishSection from "@/components/Package & Specials/WishSection";
import ExploreContent from "@/components/common/ExploreContent";
import Footer from "@/components/common/Footer";
import FooterBottom from "@/components/common/FooterBottom";
import GoHome from "@/components/common/GoHome";
import Navber from "@/components/common/Navber";
import RoomOneColumnBanner from "@/components/common/RoomOneColumnBanner";
import React from "react";

function PackageSpecials() {
  const packageArr = [
    {
      image: `/restaurant.png`,
      star: `fa-solid fa-star`,
      rate: `5.0 (230)`,
      distance: `10 km away`,
      packageTitle: `Girls' Night Out Package`,
      description: `The Girls' Night Out Package for a Hotel is a great way for a group of women to have a fun night out. The package includes a room for the group, a bottle of champagne, and a $100 credit.`,
      price: `From 22$ per person`,
      url: {
        link: ``,
        btn: `Learn More`,
      },
    },
    {
      image: `/lakeresraurant.png`,
      star: `fa-solid fa-star`,
      rate: `5.0 (235)`,
      distance: `10 km away`,
      packageTitle: `Romantic Getaway Package`,
      description: `The Romantic Getaway Package is a perfect way to celebrate a special occasion or simply reconnect with your loved one. The package includes a one-night stay in a luxurious suite, a bottle of champagne.`,
      price: `From 30$ per person`,
      url: {
        link: ``,
        btn: `Learn More`,
      },
    },
  ];
  return (
    <>
      <Navber />
      <RoomOneColumnBanner image="/packageimg.png" title="" subTitle="" />
      <section className="ml-[25px] sm:ml-[40px]">
        <GoHome pageName="Package & Specials" />
      </section>
      <ExploreContent exploreData={packageArr} />
      <AdventurePackage />
      <MorePackages/>
      <APerfectHoliday />
      <WishSection />
      <Footer />
      <FooterBottom />
    </>
  );
}

export default PackageSpecials;
