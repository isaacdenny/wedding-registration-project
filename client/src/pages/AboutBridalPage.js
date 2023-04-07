import React from "react";
import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";
import BlockSection from "../components/sections/BlockSection";
import HeaderSection from "../components/sections/HeaderSection";
import stephanie from "../images/stephanie.jpg";
import brandie from "../images/brandie.jpg";
import hadlee from "../images/hadlee.png";
import lisa from "../images/lisa.jpg";
import dan from "../images/dan.jpg";
import colston from "../images/colston.jpg";
import micah from "../images/micah.jpg";
import thad from "../images/thad.jpg";
import momdad from "../images/momdad.jpg";
import connor from "../images/connor.png";
import sophie from "../images/sophie.png";

const AboutBridalPage = () => {
  return (
    <div>
      <Navbar />
      <HeaderSection title="The Bridal Party" />
      <BlockSection
        isAlone={true}
        heading="Stephanie Jackson"
        desc="Allie's sister and Matron of Honor."
        imgSrc={stephanie}
        imgAlt="Stephanie Jackson"
        isFlipped={true}
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Brandie Snelson"
        desc="Allie's sister"
        imgSrc={brandie}
        imgAlt="Brandie Snelson"
        isFlipped={true}
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Hadlee Jackson"
        desc="Allie's niece and Jr. Bridesmaid"
        imgSrc={hadlee}
        imgAlt="Hadlee Jackson"
        isFlipped={true}
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Dan Runyan"
        desc="Allie's Father"
        imgSrc={dan}
        imgAlt="Dan Runyan"
        isFlipped={true}
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Lisa Runyan"
        desc="Allie's Mother"
        imgSrc={lisa}
        imgAlt="Lisa Runyan"
        isFlipped={true}
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Colston Kapnick"
        desc="Isaac's best friend and Best Man"
        imgSrc={colston}
        imgAlt="Colston Kapnick"
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Micah Denny"
        desc="Isaac's younger brother"
        imgSrc={micah}
        imgAlt="Micah Denny"
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Thaddeus Denny"
        desc="Isaac's youngest brother"
        imgSrc={thad}
        imgAlt="Thaddeus Denny"
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Steve and Rebecca Denny"
        desc="Isaac's parents"
        imgSrc={momdad}
        imgAlt="Thaddeus Denny"
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Connor Jackson"
        desc="Allie's nephew and Ring Bearer"
        imgSrc={connor}
        imgAlt="Connor Jackson"
        isFlipped={true}
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Sophie Jackson"
        desc="Allie's niece and Flower Girl"
        imgSrc={sophie}
        imgAlt="Hadlee Jackson"
        isFlipped={true}
        button={false}
      />
      <Footer />
    </div>
  );
};

export default AboutBridalPage;
