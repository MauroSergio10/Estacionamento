// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBqKUxXVg1-fLo6jOhQZMiFEjGmWgrFbcw",
  authDomain: "parking-dc57c.firebaseapp.com",
  projectId: "parking-dc57c",
  storageBucket: "parking-dc57c.appspot.com",
  messagingSenderId: "465842448486",
  appId: "1:465842448486:web:f21e41ea510377ca3ca5a7",
  measurementId: "G-D9ESSNLXM4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth }; //