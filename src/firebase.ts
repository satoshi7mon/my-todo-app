// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZmL2wb30v4Ihc9cRU666oepMLxc7FIGg",
  authDomain: "todo-app-d2de9.firebaseapp.com",
  projectId: "todo-app-d2de9",
  storageBucket: "todo-app-d2de9.firebasestorage.app",
  messagingSenderId: "47816743164",
  appId: "1:47816743164:web:018a0a83a87de647b2df79",
  measurementId: "G-M74V7HDFQV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
