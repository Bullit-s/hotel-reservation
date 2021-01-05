import React from "react";
import { Cover } from "../components/Cover";
import { Banner } from "../components/ui/Banner";
import { Link } from "react-router-dom";
import { Services } from "../components/Services";
import { FeaturedRooms } from "../components/FeaturedRooms";

export const Home = () => {
  return (
    <React.Fragment>
      <Cover>
        <Banner
          title="Роскошные номера"
          subtitle="Deluxe номера начиная с $299"
        >
          <Link to="/rooms" className="btn-primary">
            Наши номера
          </Link>
        </Banner>
      </Cover>
      <Services />
      <FeaturedRooms />
    </React.Fragment>
  );
};
