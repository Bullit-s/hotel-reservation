import { auth } from "../firebase";

export const signOut = async () => {
  try {
    await auth.signOut();
  } catch (err) {
    console.log(err);
  }
};
