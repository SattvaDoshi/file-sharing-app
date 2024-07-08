// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvYa4FGQk8t93M_bDm2lhvHsB3HuFe5g8",
  authDomain: "web-development-b18f2.firebaseapp.com",
  projectId: "web-development-b18f2",
  storageBucket: "web-development-b18f2.appspot.com",
  messagingSenderId: "993232093938",
  appId: "1:993232093938:web:dcc9ddccb8a6af632c866b",
  measurementId: "G-47PXQVJ265"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
