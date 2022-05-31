// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6o-rMiHFrJga2EPhadLM0q2c5NNhRT_g",
  authDomain: "todoreact-3e385.firebaseapp.com",
  projectId: "todoreact-3e385",
  storageBucket: "todoreact-3e385.appspot.com",
  messagingSenderId: "882602521088",
  appId: "1:882602521088:web:10a05b75fa2e80066b1ee5",
  measurementId: "G-ED1PKSDWZ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
