// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaUsni5LALRrjab5a_UnNrYYgn1rswoxs",
  authDomain: "image-grid-app.firebaseapp.com",
  projectId: "image-grid-app",
  storageBucket: "image-grid-app.appspot.com",
  messagingSenderId: "1051482779991",
  appId: "1:1051482779991:web:d73fca8c19fec5534b8e12"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();