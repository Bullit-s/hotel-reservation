import React, { useContext } from "react";
import { RoomContext } from "../core/context/RoomContext";
import { useParams } from "react-router-dom";
import { EmptyRoom } from "../components/Empty/EmptyRoom";
import { SingleRoom } from "../components/SingleRoom";

export const Room = () => {
  const roomContext = useContext(RoomContext);
  const { slug } = useParams<{ slug: string }>();

  if (!roomContext) {
    return null;
  }

  const room: any = roomContext.getRoom(slug);

  return room ? <SingleRoom room={room} /> : <EmptyRoom />;
};
