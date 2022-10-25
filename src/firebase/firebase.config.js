import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDU_4nJEVV-DHXtTJ8gulUCWRX3eDrm2kg",
  authDomain: "react-redux-full-stack-eshop.firebaseapp.com",
  projectId: "react-redux-full-stack-eshop",
  storageBucket: "react-redux-full-stack-eshop.appspot.com",
  messagingSenderId: "557346918006",
  appId: "1:557346918006:web:bd828fe21a0bdede08d957"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db  = getFirestore(app); 
export const storage = getStorage(app);