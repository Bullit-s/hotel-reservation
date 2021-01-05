import React, { useContext } from "react";
import { RoomContext } from "../core/context/RoomContext";
import { Title } from "./ui/Title";
import { Loading } from "./ui/Loading";
import { RoomCard } from "./RoomCard";

export const FeaturedRooms = () => {
  const roomContext = useContext(RoomContext);
  if (!roomContext) {
    return null;
  }
  const { featuredRooms, loading } = roomContext;

  const rooms = featuredRooms.map((room: any) => {
    return <RoomCard key={room.id} room={room} />;
  });

  return (
    <section className="featured-rooms">
      <Title title="Избранные номера" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  );
};
