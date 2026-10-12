// /src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "ccs8-gmt.firebaseapp.com",
    projectId: "ccs8-gmt",
    storageBucket: "ccs8-gmt.firebasestorage.app",
    messagingSenderId: "119027833456",
    appId: "1:119027833456:web:28fd0133b908537ea6b2b5",
    measurementId: "G-NLN8MWJ861"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
