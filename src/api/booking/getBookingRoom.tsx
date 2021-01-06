import { auth, db } from "../firebase";
import { BookingParams } from "./bookingRoom";

export const getBookingRoom = async () => {
  try {
    const userUid = auth.currentUser?.uid;
    if (!userUid) {
      throw new Error("bookingRoom userUid undefined");
    }

    const booking = await db
      .collection("booking")
      .doc(userUid)
      .get();
    if (!booking.exists) {
      return null;
    }
    return booking.data() as BookingParams;
  } catch (err) {
    console.log(err);
  }
};
