// Import the functions you need from the SDKs you need
// v9 compat packages are API compatible with v8 code
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwIMuoA52lc04e5-nLWgflKw2nwO1pe3E",
  authDomain: "athena-e6a1b.firebaseapp.com",
  databaseURL: "https://athena-e6a1b-default-rtdb.firebaseio.com",
  projectId: "athena-e6a1b",
  storageBucket: "athena-e6a1b.appspot.com",
  messagingSenderId: "393710869045",
  appId: "1:393710869045:web:8efe705365a228d92faf7c",
  measurementId: "G-427F8MHZPF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
