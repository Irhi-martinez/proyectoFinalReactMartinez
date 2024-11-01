import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuNPj3_3DUugZSD_rY_cZ9Y7EDp3T0ugQ",
  authDomain: "coder-ejem.firebaseapp.com",
  projectId: "coder-ejem",
  storageBucket: "coder-ejem.appspot.com",
  messagingSenderId: "858604726507",
  appId: "1:858604726507:web:690e23522f61ac166fb6ae"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);