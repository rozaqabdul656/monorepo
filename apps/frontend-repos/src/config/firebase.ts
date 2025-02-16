import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC6z7Jq-iQFOZcg0xoTib1gHorimNf7GYg",
    authDomain: "e-jas-55e85.firebaseapp.com",
    projectId: "e-jas-55e85",
    storageBucket: "e-jas-55e85.firebasestorage.app",
    messagingSenderId: "925238764387",
    appId: "1:925238764387:web:afa3b4d337eae5730da956",
    measurementId: "G-PKKFJMN5JW"
  };
  
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
