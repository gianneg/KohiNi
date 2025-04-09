// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRArQGVSjHqGA2sM7yjRgb81ZI6w9M79Y",
  authDomain: "ccs8-gmt.firebaseapp.com",
  projectId: "ccs8-gmt",
  storageBucket: "ccs8-gmt.firebasestorage.app",
  messagingSenderId: "119027833456",
  appId: "1:119027833456:web:28fd0133b908537ea6b2b5",
  measurementId: "G-NLN8MWJ861"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);