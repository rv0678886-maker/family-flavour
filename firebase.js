
// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBkQNH2Hl-vxRETX4jjZH8rkCPbyxupA24",
  authDomain: "family-flavour.firebaseapp.com",
  projectId: "family-flavour",
  storageBucket: "family-flavour.firebasestorage.app",
  messagingSenderId: "151508352233",
  appId: "1:151508352233:web:6aa68d287c412476190473"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
