import React from "react";
import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";
import BlockSection from "../components/sections/BlockSection";
import HeaderSection from "../components/sections/HeaderSection";
import image1 from "../images/3.jpg";
import image2 from "../images/4.jpg";
import image3 from "../images/5.jpg";

const HotelRecPage = () => {
  return (
    <div>
      <Navbar />
      <HeaderSection title="Our Story" />
      <BlockSection
        isAlone={true}
        heading="A Fried Chicken Denial"
        desc="First met in February giving Isaac a tour of Lighthouse Prayed
              that I would see Isaac again Found out he was coming after spring
              break! All of April every day after school we were hanging out in
              his truck at the Evel Knievel jump site & going to Jack in the Box
              to get mac n cheese bites & churros Isaac asked Allie to be his
              girlfriend on April 29 and she said no because she didn’t like the
              way he asked her (he was eating fried chicken and wanted something
              more romantic like he did with prom)
              
              Isaac asked me to prom (was our first technical date) On April 30
              she asked him to be her boyfriend and got rolled Ice Cream
              together Our first kiss we saw a double rainbow and our second
              kiss literal fireworks went off (if that’s not a sign I don’t know
              what is ;p)"
        imgSrc={image1}
        imgAlt="engagement ring with pink rose"
        isFlipped={true}
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Meaningful Steps"
        desc="On the last day of school we went to Lagoon and he didn’t ride any
              roller coasters except for one, she loved being around him and he
              rubbed her back on the way back and she knew he was going to be a
              keeper We spent our summer together and started our Senior year
              together We started planning our lives Isaac going to BSU and
              Allie staying in Twin to be an esthetician (she was worried that
              long distance wasn’t going to work)
              
              Celebrated our 1 year together at prom We graduated together and
              spent as much time together before Isaac left for BSU Isaac left
              and the long distance began (was actually a good thing for our
              relationship we got to focus on ourselves and the time that we had
              together was much more special)"
        imgSrc={image2}
        imgAlt="engagement hotel with flowers"
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="She Said Yes!"
        desc="Put a lot of trust in God for our relationship to work through
              long-distance and because of trusting God He was faithful to us In
              January we found out that his family was moving to North Carolina
              and Isaac might be moving too (another trusting God moment because
              Allie didn’t want to lose Isaac)
              
              While this was going on Isaac was planning on proposing to Allie and
              taking her with him to North Carolina Isaac proposed to Allie on
              February 19, 2023 and the rest is history"
        imgSrc={image3}
        imgAlt="engagement hotel with flowers"
        isFlipped={true}
        button={false}
      />
      <Footer />
    </div>
  );
};

export default HotelRecPage;
