import { auth, db } from "../firebase";
import { Moment } from "moment";
import { showNotification } from "../../core/helpers/showNotification";

export interface BookingParams {
  roomSlug: string;
  dateFrom?: Moment;
  dateTo?: Moment;
}

export const bookingRoom = async ({
  roomSlug,
  dateTo,
  dateFrom
}: BookingParams) => {
  try {
    const userUid = auth.currentUser?.uid;

    if (!userUid) {
      throw new Error("bookingRoom userUid undefined");
    }

    if (!dateTo || !dateFrom) {
      throw new Error("!dateTo || !dateFrom");
    }

    await db
      .collection("booking")
      .doc(userUid)
      .set({
        roomSlug,
        dateTo: dateTo.toISOString(),
        dateFrom: dateFrom.toISOString()
      });
    showNotification("success", "Вы забронировали номер");
  } catch (err) {
    showNotification("error", "Ошибка при бронировании номера");

    console.log(err);
  }
};
