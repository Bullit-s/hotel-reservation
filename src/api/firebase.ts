import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZtG420R3JZnbzCwRkciH51JpFrXUSU20",
  authDomain: "hotel-reservation-8c7b3.firebaseapp.com",
  projectId: "hotel-reservation-8c7b3",
  storageBucket: "hotel-reservation-8c7b3.appspot.com",
  messagingSenderId: "1051412249470",
  appId: "1:1051412249470:web:bf570497d972ddd9ad512f"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { firebase, auth, db };
