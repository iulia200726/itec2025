import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

// Configurația Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD-3HhK--nt0qlUmQ7GblJ8-bx85VmzS6Q",
  authDomain: "itec2025-87e45.firebaseapp.com",
  projectId: "itec2025-87e45",
  storageBucket: "itec2025-87e45.firebasestorage.app",
  messagingSenderId: "926099095073",
  appId: "1:926099095073:web:31c54d4256a18667d4ed60",
  measurementId: "G-0ED679DN4L"
};

// Inițializează Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };