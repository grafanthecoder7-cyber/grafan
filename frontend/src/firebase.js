import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxF2cFMXc0XUsC8xWdo9EKgl9LeTIo4nQ",
  authDomain: "grafan-5376f.firebaseapp.com",
  projectId: "grafan-5376f",
  storageBucket: "grafan-5376f.firebasestorage.app",
  messagingSenderId: "320586017839",
  appId: "1:320586017839:web:8e70c3f5a9144f6d536ada",
  measurementId: "G-526C67RKDG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
