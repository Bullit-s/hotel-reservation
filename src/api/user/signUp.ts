import { auth } from "../firebase";

export interface SignUpParams {
  name: string;
  email: string;
  password: string;
}

export const signUp = async ({ name, email, password }: SignUpParams) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    if (!userCredential.user) {
      return null;
    }

    await userCredential.user.updateProfile({
      displayName: name
    });

    return userCredential.user;
  } catch (err) {
    console.log(err);
  }
};
