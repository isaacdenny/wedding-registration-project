import React from "react";
import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";
import BlockSection from "../components/sections/BlockSection";
import HeaderSection from "../components/sections/HeaderSection";
import image1 from "../images/allie-me.jpg";
import image2 from "../images/allie-me-walking.jpg";
import image3 from "../images/prom-3.jpg";
import image4 from "../images/prom-5.jpg";

const OurStoryPage = () => {
  return (
    <div>
      <Navbar />
      <HeaderSection title="Our Story" />
      <BlockSection
        isAlone={true}
        heading="The Spark"
        desc={
          <div style={{ textAlign: "left" }}>
            <p>
              In February of 2021, Allie Runyan gave Isaac Denny a tour of
              Lighthouse Christian School, and sparked a love that would last
              forever. Allie prayed that the Denny's would move to Idaho, so she
              could see Isaac again, and in March of 2021 the Lord granted her
              request: the Denny's started a new life in Idaho.
            </p>
            <p>
              As Prom was coming up soon, Isaac decided (with the help of
              Allie's best friend, Tilly Monroe) to ask Allie to prom. He put
              together a big cheerleader-megaphone-promposal and asked her out
              on their first date.
            </p>
          </div>
        }
        imgSrc={image3}
        imgAlt="allie and isaac at prom"
        isFlipped={true}
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="A Fried Chicken Denial"
        desc={
          <div style={{ textAlign: "left" }}>
            <p>
              In April of that year, Allie and Isaac started dating more often
              and knew something was special about the relationship they had.
              Most of their dates entailed hanging out in Isaac's truck at the
              Evel Knievel jump site & going to Jack in the Box to get mac'n
              cheese bites & churros.
            </p>
            <p>
              On April 29 at that very spot, Isaac asked Allie to be his
              girlfriend. Unfortunately, because Isaac set the bar so high with
              his promposal, Allie didn't think it was romantic enough!
              (probably because they were eating fried chicken at their usual
              spot). Fortunately for both of them, Allie had second thoughts and
              realized the error of her ways (hehe) and asked Isaac to be her
              boyfriend the next day.
            </p>
          </div>
        }
        imgSrc={image4}
        imgAlt="allie and isaac at prom"
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="Meaningful Steps"
        desc={
          <div style={{ textAlign: "left" }}>
            <p>
              Every month of dating built on the last. Each month they would
              write each other meaningful notes as a testimony to their
              friendship and care for one another. In April of 2022, they
              celebrated their 1 year of dating at their senior prom.
            </p>
            <p>
              They graduated in May of 2022 and spent as much time together as
              possible before Isaac left for college at Boise State University.
              The long distance began in early August and only strengthened the
              relationship between them.
            </p>
          </div>
        }
        imgSrc={image2}
        imgAlt="allie and isaac walking in the snow"
        button={false}
      />
      <BlockSection
        isAlone={true}
        heading="She Said Yes!"
        desc={
          <div style={{ textAlign: "left" }}>
            <p>
              Allie and Isaac put a lot of trust in God for their relationship
              to work despite the long-distance challenges. He was faithful even
              In January of 2023 when his family planned to move to North
              Carolina.
            </p>
            <p>
              Fortunately for the both of them, Isaac was planning on proposing
              to Allie and solidifying what their future would hold together.
              Isaac proposed to Allie on February 19, 2023 at the Evel Knievel
              jump site, and the rest is history.
            </p>
          </div>
        }
        imgSrc={image1}
        imgAlt="allie and isaac holding each other"
        isFlipped={true}
        button={false}
      />
      <Footer />
    </div>
  );
};

export default OurStoryPage;
