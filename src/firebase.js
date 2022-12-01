// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLyhPdObHEe3i-LjGS4GUDMVUKwD_FavY",
  authDomain: "disney-clone-b8924.firebaseapp.com",
  projectId: "disney-clone-b8924",
  storageBucket: "disney-clone-b8924.appspot.com",
  messagingSenderId: "600991919217",
  appId: "1:600991919217:web:a879eb6ea79c88f68dffd0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);