import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBqGyYYlxV7s0G_iF9Bv0gYsLsfdi2Cdfo",
  authDomain: "e-commerce-7c5dc.firebaseapp.com",
  projectId: "e-commerce-7c5dc",
  storageBucket: "e-commerce-7c5dc.firebasestorage.app",
  messagingSenderId: "643252455488",
  appId: "1:643252455488:web:849a5fdecfc0ab508a77a5",
  measurementId: "G-YNZ212Q891"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth