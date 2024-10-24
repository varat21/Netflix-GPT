// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTlpZOWbv7vPkwc16YJpiPiUVImXIr8kk",
  authDomain: "nextflixgpt-5d7f6.firebaseapp.com",
  projectId: "nextflixgpt-5d7f6",
  storageBucket: "nextflixgpt-5d7f6.appspot.com",
  messagingSenderId: "271683340767",
  appId: "1:271683340767:web:d901d386a3eeaea6df1c6a",
  measurementId: "G-94VZCY99WT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Optional: Initialize Analytics
const analytics = getAnalytics(app); 

// Initialize Authentication and export
export const auth = getAuth(app); // Pass the app instance if needed
