import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxxNyX1PZeadXWz49SRqCOLlrgdzv3ImM",
  authDomain: "aksjepro.firebaseapp.com",
  projectId: "aksjepro",
  storageBucket: "aksjepro.firebasestorage.app",
  messagingSenderId: "334920437646",
  appId: "1:334920437646:web:a09e162fe7cba017095edf",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);