// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjOU6P7YxfwIU8ic59sn4rBfW9cw2MnSc",
  authDomain: "web-development-4960e.firebaseapp.com",
  projectId: "web-development-4960e",
  storageBucket: "web-development-4960e.appspot.com",
  messagingSenderId: "310421996047",
  appId: "1:310421996047:web:bcd0ffd32b4508c120997a",
  measurementId: "G-B71T5YESBR"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
