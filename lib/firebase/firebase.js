// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBqxzhBOJ-R7cqtTDyWauMokEVd5Tf9-w",
  authDomain: "inharamain.firebaseapp.com",
  projectId: "inharamain",
  storageBucket: "inharamain.appspot.com",
  messagingSenderId: "496211759924",
  appId: "1:496211759924:web:b787033ee927e8880bcb61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage }