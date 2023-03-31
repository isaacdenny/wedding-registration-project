import React from "react";
import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";
import BlockSection from "../components/sections/BlockSection";
import HeaderSection from "../components/sections/HeaderSection";
import image1 from "../images/prom-1.jpg";
import image2 from "../images/prom-2.jpg";
import image3 from "../images/prom-3.jpg";
import image4 from "../images/prom-5.jpg";

const OurStoryPage = () => {
  return (
    <div>
      <Navbar />
      <HeaderSection title="Our Story"/>
      <BlockSection
        isAlone={true}
        heading="The Spark"
        desc="In February of 2021, Allie Runyan gave Isaac Denny a tour of 
        Lighthouse Christian School, and sparked a love that would last forever.
        Allie prayed that the Denny's would move to Idaho, so she could see see 
        Isaac again, and Lord granted her request: in March of 2020, the 
        Denny's started a new life in Idaho. 

        As Prom was coming up soon, Isaac decided (with the help of Allie's best
        friend, Tilly Monroe) to ask Allie to prom. He put together a big
        cheerleader-megaphone-promposal and asked her out on their first date."
        imgSrc={image1}
        imgAlt="engagement ring with pink rose"
        isFlipped={true}
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="A Fried Chicken Denial"
        desc="In April of that year, Allie and Isaac started dating more often and knew something
        was special about the relationship they had. Most of their dates entailed
        hanging out in Isaac's truck at the Evel Knievel jump site & going to 
        Jack in the Box to get mac'n cheese bites & churros. On April 29 at that very spot, 
        Isaac asked Allie to be his girlfriend. Unfortunately, because Isaac
        set the bar so high with his promposal, Allie didn't think it was 
        romantic enough! (probably because they were eating fried chicken at their
        usual spot). Fortunately for both of them, Allie had second thoughts and
        realized the error of her ways (hehe) and asked Isaac to be her boyfriend
        the next day."
        imgSrc={image4}
        imgAlt="engagement hotel with flowers"
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Meaningful Steps"
        desc="Every month of dating built on the last. Each month they would write 
        each other meaningful notes as a testimony to their friendship and
        care for one another. In April of 2022, they Celebrated their 1 year of dating 
        at their senior prom. They graduated in 2022 and spent as much time together as 
        possible before Isaac left for College at Boise State. The long distance began
        and only strengthened the relationship between them."
        imgSrc={image2}
        imgAlt="engagement hotel with flowers"
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="She Said Yes!"
        desc="Allie and Isaac put a lot of trust in God for their relationship to work
        despite the long-distance challenges. He was faithful to even In
        January of 2023 when they planned for his family to move to North Carolina.
        Fortunately for the both of them, Isaac was planning on proposing to Allie and 
        solidifying what their future would hold together. Isaac proposed to Allie on
        February 19, 2023 at the Evel Knievel jump site, and the rest is history."
        imgSrc={image3}
        imgAlt="engagement hotel with flowers"
        isFlipped={true}
        button={false}
      />
      <Footer />
    </div>
  );
};

export default OurStoryPage;