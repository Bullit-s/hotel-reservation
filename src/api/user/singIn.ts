import { auth } from "../firebase";

export interface SignInParams {
  email: string;
  password: string;
}

export const signIn = async ({ email, password }: SignInParams) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    if (!userCredential) {
      return null;
    }

    return userCredential.user;
  } catch (err) {
    console.log(err);
  }
};
