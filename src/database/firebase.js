// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0CkyK0h7hjf2vVd_fDgPoEtvtzu68TQ4",
  authDomain: "rofl-2b073.firebaseapp.com",
  databaseURL: "https://rofl-2b073-default-rtdb.firebaseio.com",
  projectId: "rofl-2b073",
  storageBucket: "rofl-2b073.appspot.com",
  messagingSenderId: "876810665728",
  appId: "1:876810665728:web:d7b73b5a777f92312b3de5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app) 
export const auth = getAuth(app)