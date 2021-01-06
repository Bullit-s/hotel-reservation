import React, { createContext, FC, useEffect, useState } from "react";
import { auth, firebase } from "../../api/firebase";
import { BookingParams } from "../../api/booking/bookingRoom";
import { getBookingRoom } from "../../api/booking/getBookingRoom";

type AuthContextProps = {
  user: firebase.User | null;
  currentBooking: BookingParams | null;
  updateCurrentBooking: () => void;
  authenticated: boolean;
  isLoadingAuth: boolean;
};

export const AuthContext = createContext<Partial<AuthContextProps>>({});

export const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<firebase.User | null>();
  const [currentBooking, setCurrentBooking] = useState<BookingParams | null>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged(async (user: firebase.User | null) => {
      setUser(user);
      if (user) {
        const booking = await getBookingRoom();
        setCurrentBooking(booking);
      } else {
        setCurrentBooking(null);
      }
      setLoading(false);
    });
  }, []);

  const updateCurrentBooking = async () => {
    const booking = await getBookingRoom();
    setCurrentBooking(booking);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        currentBooking,
        updateCurrentBooking,
        authenticated: user != null,
        isLoadingAuth: loading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
