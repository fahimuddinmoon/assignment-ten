// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByn111TWwfEXiw-1GUGVCBU2TTTZ5pzuM",
  authDomain: "project-ten-96173.firebaseapp.com",
  projectId: "project-ten-96173",
  storageBucket: "project-ten-96173.firebasestorage.app",
  messagingSenderId: "868908033766",
  appId: "1:868908033766:web:f6e0bcad7f7f85e9b23d27"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);