import React from "react";
import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";
import BlockSection from "../components/sections/BlockSection";
import HeaderSection from "../components/sections/HeaderSection";
import image1 from "../images/engagement-hotel.jpg";
import image2 from "../images/engagement-ring.jpg";
import image3 from "../images/rings.jpg";

const EventDetailsPage = () => {
  return (
    <div>
      <Navbar />
      <HeaderSection title="Event Details" />
      <BlockSection
        isAlone={true}
        heading="Location"
        desc="event desc goes here..."
        imgSrc={image1}
        imgAlt="engagement ring with pink rose"
        isFlipped={true}
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Event Detail 2"
        desc="event desc goes here..."
        imgSrc={image2}
        imgAlt="engagement hotel with flowers"
        isFlipped={false}
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Event Detail 3"
        desc="event desc goes here..."
        imgSrc={image3}
        imgAlt="engagement hotel with flowers"
        isFlipped={true}
        button={false}
      />
      <Footer />
    </div>
  );
};

export default EventDetailsPage;
