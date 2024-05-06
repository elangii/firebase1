// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANC0V2PPyXYkguaPn6dDAdp3afCUZg0LI",
  authDomain: "react-course-d5d0b.firebaseapp.com",
  projectId: "react-course-d5d0b",
  storageBucket: "react-course-d5d0b.appspot.com",
  messagingSenderId: "629347584592",
  appId: "1:629347584592:web:064f0736b1856bff2c9f55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db  = getFirestore(app);