import React from "react";
import defaultImg from "../assets/images/room-1.jpeg";
import { Link } from "react-router-dom";
import { RoomObject } from "../core/models/models";

interface Props {
  room: RoomObject;
}

export const RoomCard = React.memo(({ room }: Props) => {
  const { name, slug, images, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>сутки</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Детали
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
});
