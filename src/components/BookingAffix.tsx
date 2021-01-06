import React, { useContext, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { Card as AntCard } from "antd";
import { AuthContext } from "../core/context/AuthContext";
import { RoomContext } from "../core/context/RoomContext";

export const BookingAffix = () => {
  const { slug: roomSlug } = useParams<{ slug: string }>();
  const { currentBooking } = useContext(AuthContext);
  const roomContext = useContext(RoomContext);

  const bookingRoom = useMemo(() => {
    if (roomContext && currentBooking && currentBooking.roomSlug !== roomSlug) {
      return roomContext.getRoom(currentBooking.roomSlug) || null;
    } else {
      return null;
    }
  }, [currentBooking, roomContext, roomSlug]);

  return (
    bookingRoom && (
      <Affix>
        <Card
          title="Активная бронь"
          extra={<Link to={`/rooms/${bookingRoom.slug}`}>Перейти</Link>}
        >
          <Content>
            <Image src={bookingRoom.images[0]} alt={bookingRoom.name} />
            {bookingRoom.name}
          </Content>
        </Card>
      </Affix>
    )
  );
};

const Affix = styled.div`
  position: fixed;
  bottom: 25px;
  left: 25px;
  z-index: 999;
`;

const Card = styled(AntCard)``;

const Content = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 15px;
  align-items: center;
  text-transform: uppercase;
`;

const Image = styled.img`
  object-fit: cover;
  height: 68px;
  width: 102px;
`;
