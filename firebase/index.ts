import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: process.env.FIRE_BASE_API,
    authDomain: "jin-teaching.firebaseapp.com",
    projectId: "jin-teaching",
    storageBucket: "jin-teaching.appspot.com",
    messagingSenderId: "584307016085",
    appId: "1:584307016085:web:a3dc90da3a5cf89ad8369c"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)