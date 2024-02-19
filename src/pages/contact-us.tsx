import ContactForm from "@/components/Contact Us/ContactForm";
import ContactProcess from "@/components/Contact Us/ContactProcess";
import Footer from "@/components/common/Footer";
import FooterBottom from "@/components/common/FooterBottom";
import GoHome from "@/components/common/GoHome";
import Navber from "@/components/common/Navber";
import RoomOneColumnBanner from "@/components/common/RoomOneColumnBanner";
import React from "react";

function ContactUs() {
  return (
    <>
      <Navber />
      <RoomOneColumnBanner image="/contactbnr.png" title="" subTitle="" />
      <section className="px-5">
        <GoHome pageName="Contact Us" />
      </section>
      <ContactProcess />
      <ContactForm />
      <Footer />
      <FooterBottom />
    </>
  );
}

export default ContactUs;
