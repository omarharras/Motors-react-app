// /src/services/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAIK_DRn56s0EWMpw2PKo0D38OyjjMbmHU',
  authDomain: 'motors-website-6fd1e.firebaseapp.com',
  projectId: 'motors-website-6fd1e',
  storageBucket: 'motors-website-6fd1e.appspot.com',
  messagingSenderId: '779192802535',
  appId: '1:779192802535:web:6f47dbbc42a38160489642',
  measurementId: 'G-M09KCLE4RD',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);
