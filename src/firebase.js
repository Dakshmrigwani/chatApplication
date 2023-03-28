// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQIE81fNCy3suPyJkpH9lVWwgq8PjyWiw",
  authDomain: "chat-application-8e945.firebaseapp.com",
  projectId: "chat-application-8e945",
  storageBucket: "chat-application-8e945.appspot.com",
  messagingSenderId: "317361873518",
  appId: "1:317361873518:web:275c65fcc89615af67fc7f",
  measurementId: "G-2FNXX8W0JZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)