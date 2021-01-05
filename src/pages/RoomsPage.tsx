import React, { useContext } from "react";
import { Cover } from "../components/Cover";
import { Banner } from "../components/ui/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../core/context/RoomContext";
import { Loading } from "../components/ui/Loading";
import { RoomsFilter } from "../components/RoomsFilter";
import { RoomsList } from "../components/RoomsList";

export const RoomsPage: React.FC = () => {
  const roomContext = useContext(RoomContext);

  if (!roomContext) {
    return <Loading />;
  }

  const { loading, rooms, sortedRooms } = roomContext;

  return (
    <>
      <Cover coverClass="roomsHero">
        <Banner title="Наши номера">
          <Link to="/" className="btn-primary">
            на главную
          </Link>
        </Banner>
      </Cover>
      {loading ? (
        <Loading />
      ) : (
        <>
          <RoomsFilter rooms={rooms} />
          <RoomsList rooms={sortedRooms} />
        </>
      )}
    </>
  );
};
