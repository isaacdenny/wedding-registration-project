import React from "react";
import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";
import BlockSection from "../components/sections/BlockSection";
import HeaderSection from "../components/sections/HeaderSection";
import image1 from "../images/prom-1.jpg";
import image2 from "../images/prom-2.jpg";
import image3 from "../images/prom-3.jpg";
import image4 from "../images/prom-5.jpg";

const AboutBridalPage = () => {
  return (
    <div>
      <Navbar />
      <HeaderSection title="Our Story" />
      <BlockSection
        isAlone={true}
        heading="Stephanie Jackson"
        desc="Allie's sister and Matron of Honor."
        imgSrc={image1}
        imgAlt="Stephanie Jackson"
        isFlipped={true}
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Brandie Snelson"
        desc="Allie's sister"
        imgSrc={image1}
        imgAlt="Brandie Snelson"
        isFlipped={true}
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Hadlee Jackson"
        desc="Allie's niece and Jr. Bridesmaid"
        imgSrc={image1}
        imgAlt="Hadlee Jackson"
        isFlipped={true}
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Colston Kapnick"
        desc="Isaac's best friend and Best Man"
        imgSrc={image2}
        imgAlt="Colston Kapnick"
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Micah Denny"
        desc="Isaac's younger brother"
        imgSrc={image2}
        imgAlt="Micah Denny"
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Thaddeus Denny"
        desc="Isaac's youngest brother"
        imgSrc={image2}
        imgAlt="Thaddeus Denny"
        button={false}
      />
      <Footer />
    </div>
  );
};

export default AboutBridalPage;
