import React from "react";
import { RoomsFilter } from "../components/RoomsFilter";
import { RoomsList } from "../components/RoomsList";
import { withRoomConsumer } from "../core/context/RoomContext";
import Loading from "../components/ui/Loading";
import { RoomsObject } from "../models/models";

interface IPropsRoomsContainer {
  context: RoomsObject;
}

const RoomsContainer: React.FC<IPropsRoomsContainer> = ({ context }) => {
  const { loading, rooms, sortedRooms } = context;
  console.log("context", context);

  if (loading) {
    return <Loading />;
  }
  return (
    <React.Fragment>
      <RoomsFilter rooms={rooms} />
      <RoomsList rooms={sortedRooms} />
    </React.Fragment>
  );
};

export default withRoomConsumer(RoomsContainer);
