import React from "react";
import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";
import BlockSection from "../components/sections/BlockSection";
import HeaderSection from "../components/sections/HeaderSection";
import image1 from "../images/kingdomchurch2.jpg";
import image2 from "../images/engagement-ring.jpg";
import image3 from "../images/gift-card.jpg";

const EventDetailsPage = () => {
  return (
    <div>
      <Navbar />
      <HeaderSection title="Event Details" />
      <BlockSection
        isAlone={true}
        heading="Location"
        desc="The Wedding will be held at Kingdom Church on 910 Shoshone St N, Twin Falls, ID 83301"
        imgSrc={image1}
        imgAlt="engagement ring with pink rose"
        isFlipped={true}
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Gifts!"
        desc="If you would like to bring a gift, please consider giving GIFTCARDS rather than larger items, as we will be moving soon and not be able to bring everything with us :( Thank you so much!"
        imgSrc={image3}
        imgAlt="engagement hotel with flowers"
        isFlipped={false}
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="When Does It Start?"
        desc="Our Wedding will begin promptly at 4:00pm and go until 8:30-9:00pm! The ceremony will be short, and there will be a reception immediately after!"
        imgSrc={image2}
        imgAlt="engagement hotel with flowers"
        isFlipped={true}
        button={false}
      />
      <Footer />
    </div>
  );
};

export default EventDetailsPage;
