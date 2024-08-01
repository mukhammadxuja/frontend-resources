import { getApps, initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC8BnxeB809vciOQzHwyfWqWM8c1zkrY3A",
  authDomain: "frontend-resources.firebaseapp.com",
  projectId: "frontend-resources",
  storageBucket: "frontend-resources.appspot.com",
  messagingSenderId: "1037105137765",
  appId: "1:1037105137765:web:b8a9a3da9fa916ae8f9e8c",
  measurementId: "G-EX849JJK72"
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