import { auth } from "./firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { db } from "./firebase";
import { set, ref } from "firebase/database";

export const doRegisterUser = async (name, lastName, email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;

    set(ref(db, `/users/${user.uid}`), {
      uid: user.uid,
      name: name,
      lastName: lastName,
      email: email,
      status: 'Online',
      imageUrl: 'https://unavatar.io/microlink/microlink.io'
    })

    return user;
  } catch (error) {
    console.log(error);
  }
};

export const doLoggedIn = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result    
  } catch (error) {
    console.log(error);
  }
}

export const doSignOut = () => {
  return auth.signOut();
};
