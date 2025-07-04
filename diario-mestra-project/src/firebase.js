// Importando os pacotes necessários
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth"; // ✅ Correto agora

// Configuração do seu projeto Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDoiGpyo26lGOLoHNUypQoMMx4M1wzeUmE",
  authDomain: "diariomestra.firebaseapp.com",
  databaseURL: "https://diariomestra-default-rtdb.firebaseio.com",
  projectId: "diariomestra",
  storageBucket: "diariomestra.firebasestorage.com",
  messagingSenderId: "82975937066",
  appId: "1:82975937066:web:f33626aafabb9cc21d6953",
  measurementId: "G-LT6NL075DN"
};

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // opcional
const auth = getAuth(app); // ✅ Inicialização correta
const database = getDatabase(app);   // se for usar o Realtime Database

// Exportações
export { app, analytics, auth, database };
