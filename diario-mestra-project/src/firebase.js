import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; 
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDoiGpyo26lGOLoHNUypQoMMx4M1wzeUmE",
  authDomain: "diariomestra.firebaseapp.com",
  projectId: "diariomestra",
  storageBucket: "diariomestra.firebasestorage.app",
  messagingSenderId: "82975937066",
  appId: "1:82975937066:web:f33626aafabb9cc21d6953",
  measurementId: "G-LT6NL075DN"
  // Remova databaseURL (não é necessário para Firestore)
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Firestore (único banco de dados)
const storage = getStorage(app);

let analytics;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics, auth, storage, db }; // Não exporte 'database'