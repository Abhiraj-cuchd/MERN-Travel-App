// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "moupia-59c53.firebaseapp.com",
  projectId: "moupia-59c53",
  storageBucket: "moupia-59c53.appspot.com",
  messagingSenderId: "822880389479",
  appId: "1:822880389479:web:a5ff956c3215ab82db47c2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
