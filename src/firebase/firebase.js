import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBL2n5AGMpC2PIS3SZssRjFGtBVKc3JCC4",
  authDomain: "vikingos-alcohol.firebaseapp.com",
  projectId: "vikingos-alcohol",
  storageBucket: "vikingos-alcohol.appspot.com",
  messagingSenderId: "488325662246",
  appId: "1:488325662246:web:b6afbbc0fb19e16af388e7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


console.log (db)