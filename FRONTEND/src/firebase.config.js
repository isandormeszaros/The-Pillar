import { initializeApp, FirebaseOptions } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCc_UWwGg3sje2n1327NpOP7-MSBnXM4sQ",
  authDomain: "the-pillar-c782c.firebaseapp.com",
  projectId: "the-pillar-c782c",
  storageBucket: "the-pillar-c782c.firebasestorage.app",
  messagingSenderId: "617155671097",
  appId: "1:617155671097:web:a6d2372b8f3cb82a7e09e8",
  measurementId: "G-VZQR6GPZBH"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export { auth, googleProvider };

export default app;
