import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6o-rMiHFrJga2EPhadLM0q2c5NNhRT_g",
  authDomain: "todoreact-3e385.firebaseapp.com",
  projectId: "todoreact-3e385",
  storageBucket: "todoreact-3e385.appspot.com",
  messagingSenderId: "882602521088",
  appId: "1:882602521088:web:10a05b75fa2e80066b1ee5",
  measurementId: "G-ED1PKSDWZ2"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);