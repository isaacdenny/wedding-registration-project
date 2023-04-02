import React from "react";
import Footer from "../components/navigation/Footer";
import Navbar from "../components/navigation/Navbar";
import BlockSection from "../components/sections/BlockSection";
import HeaderSection from "../components/sections/HeaderSection";
import image1 from "../images/hihotel.jpg";
import image2 from "../images/mphotel.jpg";
import image3 from "../images/bwhotel.jpg";
import { Link } from "react-router-dom"

const HotelRecPage = () => {
  return (
    <div>
      <Navbar />
      <HeaderSection title="Hotel Recommendations" />
      <Link to="https://www.guestreservations.com/hampton-inn-twin-falls-id/booking?gclid=Cj0KCQjwz6ShBhCMARIsAH9A0qXzUXr8AePaeoPtnpwKOsg3j1v3UuwuAvkcw_i3_mKWX8B3sy4Kd9AaAuHGEALw_wcB" style={{textDecoration: "none"}}>
        <BlockSection
          isAlone={true}
          heading="Hampton Inn Twin Falls, ID"
          desc="$186 per night (June 15-17)"
          imgSrc={image1}
          imgAlt="Hampton Inn and Suites in Twin Falls, ID"
          isFlipped={true}
          button={false}
        />
      </Link>
      <Link to="https://www.reservations.com/hotel/my-place-hotel--twin-falls-id-twin-falls-id?rmcid=tophotels11&utm_source=googleads&gclid=Cj0KCQjwz6ShBhCMARIsAH9A0qUXHi1UtpcGCfNZVVkvSBAJt7U3BENWj5z2atdRUpsolwuLEm09irUaAvY8EALw_wcB" style={{textDecoration: "none"}}>
        <BlockSection
          isAlone={true}
          heading="My Place Hotel Twin Falls ID"
          desc="$116 per night (Jun 15-17) Breakfast is not complementary"
          imgSrc={image2}
          imgAlt="My Place Hotel in Twin Falls, ID"
          button={false}
        />
      </Link>
      <Link to="https://www.bestwestern.com/en_US/book/hotel-rooms.13059.html?iata=00170260&ssob=PSPBM0304G&cid=PSPBM0304G:google:Conversion_National_X_US_Google_BW_BW-Plus_BR_PO_Phrase_En_United-States_Idaho:best%20western%20plus%20twin%20falls%20hotel&gclid=Cj0KCQjwz6ShBhCMARIsAH9A0qUGC66lN5UdVNqH-_aowYiCibZCyI9IG2dgEd7gTtNWwMl8Wx5uxpcaAiuGEALw_wcB&gclsrc=aw.ds" style={{textDecoration: "none"}}>
        <BlockSection
          isAlone={true}
          heading="Best Western Plus Twin Falls, ID"
          desc="$148 per night (Jun 15-17)"
          imgSrc={image3}
          imgAlt="Best Western Plus Hotel in Twin Falls, ID"
          isFlipped={true}
          button={false}
        />
      </Link>
      <Footer />
    </div>
  );
};

export default HotelRecPage;
