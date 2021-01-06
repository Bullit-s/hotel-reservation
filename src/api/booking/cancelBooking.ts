import { auth, db } from "../firebase";
import { showNotification } from "../../core/helpers/showNotification";

export const cancelBooking = async () => {
  try {
    const userUid = auth.currentUser?.uid;

    if (!userUid) {
      throw new Error("cancelBooking userUid undefined");
    }
    await db
      .collection("booking")
      .doc(userUid)
      .delete();
    showNotification("success", "Вы отменили бронь номера");
  } catch (err) {
    showNotification("error", "Ошибка при отмене бронирования номера");

    console.log(err);
  }
};
