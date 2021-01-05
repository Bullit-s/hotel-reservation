import React from "react";
import { Cover } from "../components/Cover";
import { Banner } from "../components/ui/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../containers/RoomsContainer";

const Rooms: React.FC = () => {
  return (
    <React.Fragment>
      <Cover coverClass="roomsHero">
        <Banner title="Наши номера">
          <Link to="/" className="btn-primary">
            на главную
          </Link>
        </Banner>
      </Cover>
      <RoomsContainer />
    </React.Fragment>
  );
};

export default Rooms;
