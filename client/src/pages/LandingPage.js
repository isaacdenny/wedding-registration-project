import React from "react";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";
import InfoSection from "../components/sections/InfoSection";
import FormSection from "../components/sections/FormSection";
import HeaderSection from "../components/sections/HeaderSection";
import BlockSection from "../components/sections/BlockSection"

import ringImg from "../images/engagement-ring.jpg"
import hotelImg from "../images/engagement-hotel.jpg"

function LandingPage() {
  return (
    <div>
      <Navbar />
      <HeaderSection title={"Together Forever"} />
      <FormSection />
      <InfoSection isEnd={true} />
      <BlockSection
        isAlone={true}
        heading="Event Details"
        desc="Check out our Event Details to know the when and where!"
        imgSrc={ringImg}
        imgAlt="engagement ring with pink rose"
        button={true}
        buttonText="Check It Out!"
        buttonHref="/event-details"
      />
      <BlockSection
        isAlone={true}
        heading="Hotel Recommendations"
        desc="Check out our recommendations for an enjoyable and memorable experience during our wedding!"
        imgSrc={hotelImg}
        imgAlt="engagement hotel with flowers"
        isFlipped={true}
        button={true}
        buttonText="Check It Out!"
        buttonHref="/hotel-rec"
      />
      <Footer />
    </div>
  );
}

export default LandingPage;
