// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyx5a-sFIuYEoz5JBqP0E0Cg7PDzhvsyI",
  authDomain: "pomodoro-example-88ae0.firebaseapp.com",
  projectId: "pomodoro-example-88ae0",
  storageBucket: "pomodoro-example-88ae0.firebasestorage.app",
  messagingSenderId: "285581521733",
  appId: "1:285581521733:web:da43803eec6f9f28fac42c",
  measurementId: "G-JMFGXNFB4L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);