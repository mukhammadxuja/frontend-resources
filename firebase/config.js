import { getApps, initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDsEKOILoK2KVyFiOEvSghxdMrZ3tGkMWs",
  authDomain: "showcaseai-75e82.firebaseapp.com",
  projectId: "showcaseai-75e82",
  storageBucket: "showcaseai-75e82.appspot.com",
  messagingSenderId: "405966938321",
  appId: "1:405966938321:web:6b0567afce84e5f0d065f0",
  measurementId: "G-R1BWYY1GPB",
};

// Initialize Firebase
let firebase_app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore();
export const storage = getStorage(firebase_app);
export default firebase_app;

export const auth = getAuth(firebase_app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);