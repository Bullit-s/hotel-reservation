import React from "react";
import { RoomCard } from "./RoomCard";
import { EmptySearch } from "./Empty/EmptySearch";

interface IPropsRoomsFilter {
  rooms: any[];
}

export const RoomsList: React.FC<IPropsRoomsFilter> = ({ rooms }) => {
  return rooms.length === 0 ? (
    <EmptySearch />
  ) : (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => {
          return <RoomCard key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};
