import React from "react";
import defaultCover from "../assets/images/room-1.jpeg";
import { Banner } from "./ui/Banner";
import { Link } from "react-router-dom";
import { StyledCover } from "./StyledCover";
import { Booking } from "./Booking";
import { BookingFormParams } from "./Forms/BookingForm";

interface Props {
  room: any;
  booking: BookingFormParams;
  isBooking: boolean;
}

export const SingleRoom = ({ isBooking, room, booking }: Props) => {
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images
  } = room;
  const [mainImg, ...defaultImg] = images;

  return (
    <>
      <StyledCover img={mainImg || defaultCover}>
        <Banner title={`${name} room`}>
          <Link to="/rooms" className="btn-primary">
            Все номера
          </Link>
        </Banner>
      </StyledCover>
      <section className="single-room">
        <div className="single-room-info">
          <article className="info">
            <h3>Информация</h3>
            <h6>Цена : ${price}</h6>
            <h6>Размеры : {size} кв.м.</h6>
            <h6>
              Вмещаемость:
              {capacity > 1 ? ` ${capacity} гостей` : ` ${capacity} гость`}
            </h6>
            <h6>{pets ? "Питомцы разрешены" : "Питомцы запрещены"}</h6>
            <h6>{breakfast && "Бесплатный завтрак"}</h6>
          </article>
          <article>
            <Booking isBooking={isBooking} bookingForm={booking} />
          </article>
          <article className="desc">
            <h3>Описание</h3>
            <p>{description}</p>
          </article>
        </div>
        <div className="single-room-images">
          {defaultImg.map((item: string, index: number) => {
            return <img key={index} src={item} alt={name} />;
          })}
        </div>
      </section>
      <section className="room-extras">
        <h6>Дополнительно</h6>
        <ul className="extras">
          {extras.map((item: string, index: number) => {
            return <li key={index}>- {item}</li>;
          })}
        </ul>
      </section>
    </>
  );
};
