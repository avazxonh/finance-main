import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAX5a836vM7qCjVCAF-JzbWkgzUMuG5_W4",
  authDomain: "finance-app-db2c7.firebaseapp.com",
  projectId: "finance-app-db2c7",
  storageBucket: "finance-app-db2c7.firebasestorage.app",
  messagingSenderId: "567574792163",
  appId: "1:567574792163:web:99d46cd3ce8ef0dee542d6",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
