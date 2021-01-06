import React, { useContext, useMemo, useState } from "react";
import { RoomContext } from "../core/context/RoomContext";
import { useParams } from "react-router-dom";
import { EmptyRoom } from "../components/Empty/EmptyRoom";
import { SingleRoom } from "../components/SingleRoom";
import { useForm } from "antd/es/form/Form";
import { bookingRoom } from "../api/booking/bookingRoom";
import { HandleFormChange } from "../core/models/models";
import { BookingFormValues } from "../components/Forms/BookingForm";
import { AuthContext } from "../core/context/AuthContext";

export const RoomPage = () => {
  const [bookingForm] = useForm<BookingFormValues>();
  const [bookingFormValues, setBookingFormValues] = useState<
    BookingFormValues
  >();
  const { currentBooking, updateCurrentBooking } = useContext(AuthContext);
  const roomContext = useContext(RoomContext);
  const { slug: roomSlug } = useParams<{ slug: string }>();
  const isBooking = useMemo(
    () => !!currentBooking && currentBooking.roomSlug === roomSlug,
    [currentBooking, roomSlug]
  );

  if (!roomContext) {
    return null;
  }

  const room = roomContext.getRoom(roomSlug);

  const handleChangeBookingForm: HandleFormChange<BookingFormValues> = async (
    _,
    values
  ) => {
    setBookingFormValues(values);
  };

  const handleBookingRoom = async (values: BookingFormValues) => {
    await bookingRoom({ roomSlug, ...values });
    updateCurrentBooking?.();
    // setBookingFormValues({});
  };

  return room ? (
    <SingleRoom
      isBooking={isBooking}
      booking={{
        values: bookingFormValues,
        form: bookingForm,
        onSubmit: handleBookingRoom,
        onValuesChange: handleChangeBookingForm
      }}
      room={room}
    />
  ) : (
    <EmptyRoom />
  );
};
