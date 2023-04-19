import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAE5-pelw645H6TzA-AmHeqmvKel8cqMwY",
  authDomain: "fir-reactcoder-653aa.firebaseapp.com",
  projectId: "fir-reactcoder-653aa",
  storageBucket: "fir-reactcoder-653aa.appspot.com",
  messagingSenderId: "83951606055",
  appId: "1:83951606055:web:78c33c4fc041fec343b102",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


console.log (db)
