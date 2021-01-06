import React, { useContext, MouseEvent } from "react";
import styled from "styled-components";
import { AuthContext } from "../core/context/AuthContext";
import { useAuthForm } from "../core/hooks/useAuthForm";
import { BookingForm, BookingFormParams } from "./Forms/BookingForm";
import { cancelBooking } from "../api/booking/cancelBooking";

interface Props {
  bookingForm: BookingFormParams;
  isBooking: boolean;
}

export const Booking = ({ isBooking, bookingForm }: Props) => {
  const { user, updateCurrentBooking } = useContext(AuthContext);
  const { showSignInForm, showSignUpForm } = useAuthForm();

  const handleSignIn = (e: MouseEvent) => {
    e.preventDefault();
    showSignInForm();
  };

  const handleSignUp = (e: MouseEvent) => {
    e.preventDefault();
    showSignUpForm();
  };

  const handleCancelBooking = async (e: MouseEvent) => {
    e.preventDefault();
    await cancelBooking();
    updateCurrentBooking?.();
  };

  const booking = isBooking ? (
    <Text>
      <Title>Бронирование</Title>
      Вы уже бронируете этот номер&nbsp;
      <Link href={"#!"} onClick={handleCancelBooking}>
        Отменить
      </Link>
    </Text>
  ) : (
    <BookingWrapper>
      <Title>Бронирование</Title>
      <BookingForm {...bookingForm} />
    </BookingWrapper>
  );

  return (
    <Card>
      <Content>
        {user ? (
          booking
        ) : (
          <Text>
            Для того, чтобы забронированить номер&nbsp;
            <Link href={"#!"} onClick={handleSignIn}>
              Авторизуйтесь
            </Link>
            &nbsp;или&nbsp;
            <Link href={"#!"} onClick={handleSignUp}>
              Зарегистрируйтесь
            </Link>
            &nbsp;.
          </Text>
        )}
      </Content>
    </Card>
  );
};

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--mainWhite);
  min-height: 150px;
  background-color: var(--primaryColor);
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const BookingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: var(--mainWhite);
  display: block;
`;

const Text = styled.div`
  text-align: center;
`;

const Link = styled.a`
  color: var(--mainWhite);
  text-decoration: underline;

  &:hover {
    color: var(--mainWhite);
    opacity: 0.7;
  }
`;
