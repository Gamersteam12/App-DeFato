// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCefC1U9ybnzoug9YGIzsnnUUvV1Yyqgck",
  authDomain: "de-fato.firebaseapp.com",
  databaseURL: "https://de-fato-default-rtdb.firebaseio.com", // importante
  projectId: "de-fato",
  storageBucket: "de-fato.firebasestorage.app",
  messagingSenderId: "1047948482546",
  appId: "1:1047948482546:web:9e4f3c9d5487f7cb18fd6b",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
